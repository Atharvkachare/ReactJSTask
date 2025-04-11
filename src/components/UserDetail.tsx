import React, { useState } from 'react';
import { User } from '../interfaces/User';
import ProfileTab from './ProfileTab';
import ContactTab from './ContactTab';

interface UserDetailProps {
  user: User | null;
}

const UserDetail: React.FC<UserDetailProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'contacts'>('profile');

  if (!user) {
    return <div className="user-detail">Select a user to view details</div>;
  }

  return (
    <div className="user-detail">
      <h2>User detail</h2>
      <div className="tabs">
        <div className="tab-container1">
          <div className="tab-label1">Profile</div>
          <button 
            className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
            aria-label="Profile tab"
          ></button>
        </div>
  
        <div className="tab-container2">
          <div className="tab-label2">Contacts</div>
          <button 
            className={`tab-button ${activeTab === 'contacts' ? 'active' : ''}`}
            onClick={() => setActiveTab('contacts')}
            aria-label="Contacts tab"
          ></button>
        </div>
      </div>
      {activeTab === 'profile' ? (
        <ProfileTab user={user} />
      ) : (
        <ContactTab user={user} />
      )}
    </div>
  );
};

export default UserDetail;