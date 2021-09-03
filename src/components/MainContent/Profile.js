import React from 'react';
import EditField from '../EditField';

const Profile = (props) => {
  const { info, update } = props;

  const handleEdit = (editedData) => {
    update(editedData, "profileInfo", "edit");
  };
  
  return (
    <>
      <section className="name">
        <EditField
          tag="h1"
          init={info}
          dataKey={'fullName'}
          onEdit={handleEdit}
        />
        <EditField
          tag="p"
          init={info}
          dataKey={'role'}
          onEdit={handleEdit}
        />
      </section>
      <section className="profile">
        <h2>Profile</h2>
        <EditField
          tag="p"
          init={info}
          dataKey={'profileDesc'}
          onEdit={handleEdit}
          type="textarea"
        />
      </section>
    </>
  );
};

export default Profile;
