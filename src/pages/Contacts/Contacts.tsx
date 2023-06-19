import React from 'react';
import { ContactsCard } from '../../compononts/ContactsCard/ContactsCard';
import { contactsData } from '../../utils/contactsInfo';

import './contacts.scss';

export const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts__content">
          {contactsData.map(data => (
            <ContactsCard data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
