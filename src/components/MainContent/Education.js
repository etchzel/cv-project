import React from 'react';
import AddField from '../AddField';

const dataFormat = {
  institution: '',
  degree: '',
  field: '',
  start: '',
  end: ''
};

const Education = (props) => {
  const { info, update } = props;

  const generateEducationList = () => {
    return info.map((data, idx) => {
      return (
        <li key={`exp-${idx}`}>
          <div className="edu-item">
            <h4>{`${data.start} - ${data.end}`}</h4>
            <div className="school">
              <h4>{data.institution}</h4>
              <p>{data.degree}</p>
              <p>{data.field}</p>
            </div>
          </div>
        </li>
      )
    });
  };

  return (
    <section className="education-history">
      <h2>Education</h2>
      <ul>
        {generateEducationList()}
        <AddField
          identifier={`eduInfo`}
          format={dataFormat} 
          update={update}/>
      </ul>
    </section>
  );
};

export default Education;