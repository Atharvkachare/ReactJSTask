import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, { useEffect, useState } from 'react';
import { fetchUsers } from './services/userService';
import { User } from './interfaces/User';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import ActionSection from './components/ActionSection';
import './style.css'

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
        if (data.length > 0) {
          setSelectedUser(data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) {
    return <div>Loading users...</div>;
  }

  return (
    <div className="app">
      <div className="left-panel">
        <UserList 
          users={users} 
          selectedUserId={selectedUser?.id || null}
          onSelectUser={setSelectedUser}
        />
      </div>
      <div className="right-panel">
        <UserDetail user={selectedUser} />
        <ActionSection />
      </div>
    </div>
  )
}

export default App


// src/App.tsx


// const App: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [selectedUser, setSelectedUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const loadUsers = async () => {
//       try {
//         const data = await fetchUsers();
//         setUsers(data);
//         if (data.length > 0) {
//           setSelectedUser(data[0]);
//         }
//       } catch (error) {
//         console.error("Failed to fetch users:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadUsers();
//   }, []);

//   if (loading) {
//     return <div>Loading users...</div>;
//   }

//   return (
//     <div className="app">
//       <div className="left-panel">
//         <UserList 
//           users={users} 
//           selectedUserId={selectedUser?.id || null}
//           onSelectUser={setSelectedUser}
//         />
//       </div>
//       <div className="right-panel">
//         <UserDetail user={selectedUser} />
//         <ActionSection />
//       </div>
//     </div>
//   );
// };

// export default App;