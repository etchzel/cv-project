import React from 'react';

const Personal = () => {
  return (
    <section>
      <h4>Personal</h4>
      <div className="info">
        <i className="fas fa-home"></i>
        Jl. Komp TCI B6
      </div>
      <div className="info">
        <i className="fas fa-phone-alt"></i>
        +62225409247
      </div>
      <div className="info">
        <i className="fas fa-mobile-alt"></i>
        +6282126697966
      </div>
      <div className="info">
        <i className="fas fa-at"></i>
        +6282126697966
      </div>
    </section>
  );
};

const SocMed = () => {
  return (
    <section>
      <h4>Social Media</h4>
      <div className="info">
        <i className="fab fa-linkedin-in"></i>
        me.poggers
      </div>
      <div className="info">
        <i className="fab fa-twitter"></i>
        @azurzel
      </div>
      <div className="info">
        <i className="fab fa-discord"></i>
        azurzel#0001
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="contact">
      <h3>
        Contact
      </h3>
      <Personal/>
      <SocMed/>
    </section>
  );
};

export default Contact;