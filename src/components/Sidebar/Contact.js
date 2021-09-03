import React from 'react';
import EditField from '../EditField';

const iconClassName = {
  address: 'fas fa-home',
  phone: 'fas fa-phone-alt',
  mobile: 'fas fa-mobile-alt',
  mail: 'fas fa-at',
  linkedIn: 'fab fa-linkedin-in',
  twitter: 'fab fa-twitter',
  discord: 'fab fa-discord'
}

const ContactList = (props) => {
  const { data, sectionName, update } = props;

  const handleEdit = (editedData) => {
    update(editedData, "contactInfo", "edit");
  };

  const generateContactList = () => {
    return data.map((item, idx) => {
      return (
        <div key={`contact-${idx}`} className="info">
          <i className={`${iconClassName[item.type]}`}></i>
          <EditField
            tag="p"
            init={item}
            dataKey="value"
            onEdit={handleEdit}
          />
        </div>
      );
    });
  };

  return (
    <section>
      <h4>{sectionName}</h4>
      {generateContactList()}
    </section>
  );
};

const Contact = (props) => {
  const { info, update } = props;
  const personalContact = info.filter((item) => {
    return item.category === 'personal';
  });
  const socmedContact = info.filter((item) => {
    return item.category === 'socmed';
  });

  return (
    <section className="contact">
      <h3>
        Contact
      </h3>
      <ContactList
        data={personalContact}
        sectionName="Personal"
        update={update}
      />
      <ContactList
        data={socmedContact}
        sectionName="Social Media"
        update={update}
      />
    </section>
  );
};

export default Contact;