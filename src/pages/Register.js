import React, { useState } from 'react';
import gallery from '../img/gallery.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../firebase/FireBase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'


function Register() {
  const navigate = useNavigate()
  const [err, setErr] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${name + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              name,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              name,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
          }
        });
      });
    } catch (err) {
      setErr(true);
    }
  };


return (
  <div className='formContainer'>
    <div className='formWrapper'>
      <span className='logo'>Online Chat</span>
      <span className='title'>Register</span>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='name' />
        <input type='email' placeholder='email' />
        <input type='password' placeholder='password' />
        <input style={{ display: "none" }} type='file' id='file' />
        <label htmlFor='file'>
          <img src={gallery} alt='' />
          <span>Add an avatar</span>
        </label>
        <button>Sign up</button>
        {err && <span>Something went wrong</span>}
      </form>
      <p>You do have an account? Login</p>
    </div>
  </div>
)
}

export default Register