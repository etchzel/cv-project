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
    stateUpdate
  } = props;

  return (
    <div className="sidebar">
      <img src={pic} alt="placeholderimg" className="profpic"></img>
      <Skills info={skillInfo} update={stateUpdate}/>
      <Languages info={langInfo} update={stateUpdate}/>
      <Contact info={contactInfo} update={stateUpdate}/>
    </div>
  );
};

export default Sidebar;