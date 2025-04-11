import React from 'react';
import { User } from '../interfaces/User';

interface UserListProps {
  users: User[];
  selectedUserId: number | null;
  onSelectUser: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ users, selectedUserId, onSelectUser }) => {
  return (
    <div className="user-list">
      <h2>User list</h2>
      <ul>
        {users.map(user => (
          <li 
            key={user.id} 
            className={selectedUserId === user.id ? 'selected' : ''}
            onClick={() => onSelectUser(user)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;