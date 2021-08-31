import React from 'react';

const Education = () => {
  return (
    <section className="education-history">
      <h2>Education</h2>
      <ul>
        <li>
          <div className="edu-item">
            <h4>2010-2014</h4>
            <div className="school">
              <h4>Istanbul Technical University</h4>
              <p>Bachelor of Science (BSc)</p>
              <p>Physics Engineering</p>
            </div>
          </div>
        </li>
        <li>
          <div className="edu-item">
            <h4>2007-2010</h4>
            <div className="school">
              <h4>SMAN 17 Bandung</h4>
              <p>High School Graduate</p>
              <p>Natural Science</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Education;