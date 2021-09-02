import React from 'react';
import Profile from './Profile';
import Experience from './Experience';
import Education from './Education';

const MainContent = (props) => {
  const {
    profileInfo,
    expInfo,
    eduInfo,
    update
  } = props;

  return (
    <div className="main-content">
      <Profile
        info={profileInfo}
      />
      <Experience
        info={expInfo}
        update={update}
      />
      <Education
        info={eduInfo}
        update={update}
      />
    </div>
  );
};

export default MainContent;