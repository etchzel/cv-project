import React from 'react';
import Profile from './Profile';
import Experience from './Experience';
import Education from './Education';

const MainContent = (props) => {
  const {
    profileInfo,
    expInfo,
    eduInfo,
    stateUpdate
  } = props;

  return (
    <div className="main-content">
      <Profile
        info={profileInfo}
        update={stateUpdate}
      />
      <Experience
        info={expInfo}
        update={stateUpdate}
      />
      <Education
        info={eduInfo}
        update={stateUpdate}
      />
    </div>
  );
};

export default MainContent;