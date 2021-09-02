import React from 'react';
import EditableField from '../EditableField';

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
  const { data, sectionName } = props;

  const generateContactList = () => {
    return data.map((item, idx) => {
      return (
        <div key={`personal-${idx}`} className="info">
          <i className={`${iconClassName[item.type]}`}></i>
          <EditableField
            tag="p"
            initialData={item.value}
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
  const { info } = props;

  return (
    <section className="contact">
      <h3>
        Contact
      </h3>
      <ContactList
        data={info.personal}
        sectionName="Personal"
      />
      <ContactList
        data={info.socMed}
        sectionName="Social Media"
      />
    </section>
  );
};

export default Contact;