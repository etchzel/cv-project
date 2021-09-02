import React from 'react';
import EditableField from '../EditableField';

const Profile = (props) => {
  const { info } = props;
  
  return (
    <>
      <section className="name">
        <EditableField
          tag="h1"
          initialData={info.fullName}
        />
        <EditableField
          tag="p"
          initialData={info.role}
        />
      </section>
      <section className="profile">
        <h2>Profile</h2>
        <EditableField
          tag="p"
          initialData={info.profileDesc}
          type="textarea"
        />
      </section>
    </>
  );
};

export default Profile;
