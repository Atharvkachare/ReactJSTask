import { User } from "../interfaces/User";

export const fetchUsers = async (): Promise<User[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    {
      id: 1,
      name: "User 1",
      dob: "1990-05-15",
      address: "Chnitamani nager , sangli",
      email: "user1@example.com",
      phone: "+91 705-123-456",
      skypeId: "user1.skype"
    },
    {
      id: 2,
      name: "User 2",
      dob: "1985-11-22",
      address: "Plot No.2 near the Vithal temple, gavbhag, sangli",
      email: "user2@example.com",
      phone: "+91 905-987-6543",
      skypeId: "user2.skype"
    }
  ];
};