import React from 'react';
import AddField from '../AddField';
import EditField from '../EditField';
import { skillDataFormat } from '../Utils/dataFormat';

const Skills = (props) => {
  const { info, update } = props;

  const handleEdit = (editedData) => {
    update(editedData, "skillInfo", "edit");
  };
  
  const generateSkillList = () => {
    return info.map((data, idx) => {
      return (
        <li key={`skill-${idx}`}>
          <div className="listContent">
            <EditField
              tag="h4"
              init={data}
              dataKey="skill"
              onEdit={handleEdit}
            />
            <EditField
              className="desc"
              tag="p"
              init={data}
              dataKey="level"
              onEdit={handleEdit}
            />
          </div>
        </li>
      )
    });
  };

  return (
    <section className="skill">
      <h3>Skills</h3>
      <ul>
        {generateSkillList()}
      </ul>
      <AddField
        identifier={`skillInfo`}
        format={skillDataFormat} 
        onAdd={update}/>
    </section>
  );
};

export default Skills;