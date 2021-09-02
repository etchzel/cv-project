import React from 'react';
import Skills from './Skills';
import Contact from './Contact';
import pic from '../../assets/myimg-resized.png';
import Languages from './Languages';

const Sidebar = (props) => {
  const {
    contactInfo,
    skillInfo,
    langInfo,
    update
  } = props;

  return (
    <div className="sidebar">
      <img src={pic} alt="placeholderimg" className="profpic"></img>
      <Skills info={skillInfo} update={update}/>
      <Languages info={langInfo} update={update}/>
      <Contact info={contactInfo}/>
    </div>
  );
};

export default Sidebar;