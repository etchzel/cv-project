import React, { useState } from "react";

const EditField = ({ tag, init, dataKey, onEdit, type }) => {
  const initialData = init[dataKey];
  const [data, setData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const Tag = `${tag}`;

  const handleDblClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setData(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit({...init, [dataKey]: data});
    setIsEditing(false);
  };

  const handleFocus = (e) => {
    e.preventDefault();
    e.target.select()
  };

  const handleCancel = (e) => {
    if (e.key === 'Escape') {
      setData(initialData);
      setIsEditing(false);
    };

    //handling for textarea
    if (e.currentTarget.tagName.toLowerCase() === 'textarea' &&
        (e.key === 'Enter' && !e.shiftKey)) {
      onEdit({...init, [dataKey]: data});
      setIsEditing(false);
    }
  };

  let input = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        defaultValue={data}
        autoFocus={true}
        onFocus={handleFocus}
        onChange={handleChange}
        onKeyDown={handleCancel}
      />
    </form>
  );

  if (type) {
    input = (
      <textarea
        defaultValue={data}
        autoFocus={true}
        onFocus={handleFocus}
        onChange={handleChange}
        onKeyDown={handleCancel}
        rows="12"
      />
    );
  };

  const display = (
    isEditing ?
    input :
    (<Tag onDoubleClick={handleDblClick}>{data}</Tag>)
  );

  // const cancelByEsc = (e) => {
  //   if (e.key === 'Escape') {
  //     setIsEditing(false);
  //   };
  // };

  return display;
};

export default EditField;