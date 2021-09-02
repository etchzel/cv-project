import React from 'react';
import AddField from '../AddField';

const dataFormat = {
  skill: '',
  level: ''
};

const Skills = (props) => {
  const { info, update } = props;
  
  const generateSkillList = () => {
    return info.map((data, idx) => {
      return (
        <li key={`skill-${idx}`}>
          <div className="listContent">
            <h4>{data.skill}</h4>
            <p className="desc">{data.level}</p>
          </div>
        </li>
      )
    });
  };

  return (
    <section className="skill">
      <h3>Competences</h3>
      <ul>
        {generateSkillList()}
      </ul>
      <AddField
        identifier={`skillInfo`}
        format={dataFormat} 
        update={update}/>
    </section>
  );
};

export default Skills;