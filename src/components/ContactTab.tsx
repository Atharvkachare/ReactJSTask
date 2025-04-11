import React from 'react';
import { User } from '../interfaces/User';

interface ContactTabProps {
  user: User;
}

const ContactTab: React.FC<ContactTabProps> = ({ user }) => {
  return (
    <div className="contact-tab">
      <h3>Contacts</h3>
      <div className="field">
        <label>Email:</label>
        <span>{user.email}</span>
      </div>
      <div className="field">
        <label>Phone:</label>
        <span>{user.phone}</span>
      </div>
      <div className="field">
        <label>Skype ID:</label>
        <span>{user.skypeId}</span>
      </div>
    </div>
  );
};

export default ContactTab;