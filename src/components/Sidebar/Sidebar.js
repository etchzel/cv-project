import React from 'react';
import Skills from './Skills';
import Contact from './Contact';
import pic from '../../assets/myimg-resized.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={pic} className="profpic"></img>
      <Skills/>
      <Contact/>
    </div>
  );
};

export default Sidebar;