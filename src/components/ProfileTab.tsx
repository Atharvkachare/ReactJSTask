import React from 'react';
import { User } from '../interfaces/User';

interface ProfileTabProps {
  user: User;
}

const ProfileTab: React.FC<ProfileTabProps> = ({ user }) => {
  return (
    <div className="profile-tab">
      <h3>Profile</h3>
      <div className="field">
        <label>Name:</label>
        <span>{user.name}</span>
      </div>
      <div className="field">
        <label>DOB:</label>
        <span>{user.dob}</span>
      </div>
      <div className="field">
        <label>Address:</label>
        <span>{user.address}</span>
      </div>
      <button className="edit-button" disabled>Edit</button>
    </div>
  );
};



export default ProfileTab;