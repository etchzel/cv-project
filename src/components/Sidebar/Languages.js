import React from 'react';
import AddField from '../AddField';
import EditField from '../EditField';
import { langDataFormat } from '../Utils/dataFormat';

const Languages = (props) => {
  const { info, update } = props;

  const handleEdit = (editedData) => {
    update(editedData, "langInfo", "edit");
  };

  const generateLanguageList = () => {
    return info.map((data, idx) => {
      return (
        <li key={`language-${idx}`}>
          <div className="listContent">
            <EditField
              tag="h4"
              init={data}
              dataKey="language"
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
    <section className="languages">
      <h3>Languages</h3>
      <ul>
        {generateLanguageList()}
      </ul>
      <AddField
        identifier={`langInfo`}
        format={langDataFormat} 
        onAdd={update}/>
    </section>
  );
};

export default Languages;