import React from 'react';
import Profile from './Profile';
import Experience from './Experience';
import Education from './Education';

const MainContent = () => {
  return (
    <div className="main-content">
      <section className="name">
        <h1>Andi Abdul Hafez Ramadhan</h1>
        <p>Data Scientist</p>
      </section>
      <Profile/>
      <Experience/>
      <Education/>
    </div>
  );
};

export default MainContent;