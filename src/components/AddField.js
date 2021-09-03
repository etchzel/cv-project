import React, { useState } from 'react';
import uniqid from "uniqid";

const AddField = ({ identifier, format, onAdd }) => {
  const dataKeys = Object.keys(format);
  const [state, setState] = useState({
    ...format,
    id: uniqid()
  });
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(state, identifier, 'add');
    setState({ ...state, ...format, id: uniqid() });
    setIsAdding(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setState({ ...format, id: state.id });
    setIsAdding(false);
  };

  const handleAdd = () => {
    setIsAdding(true);
  };

  let input = (
    <form onSubmit={handleSubmit}>
      <input 
        name={dataKeys[1]} 
        type="text" 
        placeholder={dataKeys[1]}
        autoFocus={true}
        onChange={handleChange}
      />
      <input 
        name={dataKeys[2]} 
        type="text" 
        placeholder={dataKeys[2]}
        onChange={handleChange}
      />
      <button type="button" onClick={handleCancel}>Cancel</button>
      <button type="submit">Add</button>
    </form>
  );

  if (identifier === 'expInfo' || identifier === 'eduInfo') {
    input = (
      <form onSubmit={handleSubmit}>
        <input 
          name={dataKeys[1]} 
          type="text" 
          placeholder={dataKeys[1]} 
          autoFocus={true}
          onChange={handleChange}
        />
        <input 
          name={dataKeys[2]} 
          type="text" 
          placeholder={dataKeys[2]}
          onChange={handleChange}
        />
        <input 
          name={dataKeys[3]} 
          type="text" 
          placeholder={dataKeys[3]}
          onChange={handleChange}
        />
        <input 
          name={dataKeys[4]} 
          type="text" 
          placeholder={dataKeys[4]}
          onChange={handleChange}
        />
        <input
          name={dataKeys[5]}
          type="text"
          placeholder={dataKeys[5]}
          onChange={handleChange}
        />
        <button type="button" onClick={handleCancel}>Cancel</button>
        <button type="submit">Add</button>
      </form>
    );
  };

  const display = (
    isAdding ?
    input :
    (<button onClick={handleAdd}>Add Item</button>)
  );

  return display;
};

export default AddField;