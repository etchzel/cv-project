import React from 'react';
import AddField from '../AddField';

const dataFormat = {
  language: '',
  level: ''
};

const Languages = (props) => {
  const { info, update } = props;

  const generateLanguageList = () => {
    return info.map((data, idx) => {
      return (
        <li key={`language-${idx}`}>
          <div className="listContent">
            <h4>{data.language}</h4>
            <p className="desc">{data.level}</p>
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
        format={dataFormat} 
        update={update}/>
    </section>
  );
};

export default Languages;