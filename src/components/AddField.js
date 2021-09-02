import React, { useState } from 'react';

const AddField = ({ identifier, format, update }) => {
  const dataKeys = Object.keys(format);
  const [state, setState] = useState(format);
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    update(state, identifier, 'add');
    setState({ ...state, [dataKeys[0]]: '', [dataKeys[1]]: ''});
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
    setState({ ...state, [dataKeys[0]]: '', [dataKeys[1]]: ''});
    setIsAdding(false);
  };

  const handleAdd = () => {
    setIsAdding(true);
  };

  let input = (
    <form onSubmit={handleSubmit}>
      <input 
        name={dataKeys[0]} 
        type="text" 
        placeholder={dataKeys[0]}
        autoFocus={true}
        onChange={handleChange}
      />
      <input 
        name={dataKeys[1]} 
        type="text" 
        placeholder={dataKeys[1]}
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
          name={dataKeys[0]} 
          type="text" 
          placeholder={dataKeys[0]} 
          autoFocus={true}
          onChange={handleChange}
        />
        <input 
          name={dataKeys[1]} 
          type="text" 
          placeholder={dataKeys[1]}
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