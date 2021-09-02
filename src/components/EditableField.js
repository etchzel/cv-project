import React, { useState, useEffect } from "react";

const EditableField = ({ tag, initialData, type }) => {
  const [data, setData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const Tag = `${tag}`;

  const handleDblClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    if (e.key === 'Escape') {
      setIsEditing(false);
      return;
    };

    if (e.key === 'Enter' && !e.shiftKey) {
      setData(e.target.value);
      setIsEditing(false);
      return;
    };
  };

  const handleFocus = (e) => {
    e.target.select()
  };

  let input = (
    <input
      type="text"
      defaultValue={data}
      autoFocus={true}
      onFocus={handleFocus}
      onKeyDown={handleChange}
    />
  );

  if (type) {
    input = (
      <textarea
        defaultValue={data}
        autoFocus={true}
        onFocus={handleFocus}
        onKeyDown={handleChange}
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

  useEffect(() => {
    console.log(`${data} updated`);
    return () => {
      console.log('remove listener');
    };
  }, [data])

  return display;
};

export default EditableField;