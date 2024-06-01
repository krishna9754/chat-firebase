import React from 'react'
import Navbar from './Navbar'
import Searchs from './Searchs'
import Chats from './Chats'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Searchs/>
      <Chats/>
    </div>
  );
};

export default Sidebar