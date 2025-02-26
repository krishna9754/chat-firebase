import React from 'react';
// import gallery from "../img/gallery.png"

function Login() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Online Chat</span>
            <span className='title'>Login</span>
            <form>
                <input type='email' placeholder='email' />
                <input type='password' placeholder='password' />
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login