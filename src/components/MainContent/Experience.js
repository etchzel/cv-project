import React from 'react';
import AddField from '../AddField';

const dataFormat = {
  position: '',
  companyName: '',
  jobDesc: '',
  start: '',
  end: ''
};

const Experience = (props) => {
  const { info, update } = props;

  const generateExperienceList = () => {
    return info.map((data, idx) => {
      return (
        <li key={`exp-${idx}`}>
          <div className="work-item">
            <h4>{`${data.start} - ${data.end}`}</h4>
            <div className="job">
              <h4>{data.companyName}</h4>
              <p>{data.position}</p>
              <p>{data.jobDesc}</p>
            </div>
          </div>
        </li>
      )
    });
  };

  return (
    <section className="work-history">
      <h2>Experience</h2>
      <ul>
        {generateExperienceList()}
      </ul>
      <AddField
        identifier={`expInfo`}
        format={dataFormat} 
        update={update}/>
    </section>
  );
};

export default Experience;
