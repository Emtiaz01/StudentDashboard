// src/context/UserContext.jsx
import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    studentId: "1234567890",
    phone: "+1 (555) 123-4567",
    major: "Computer Science",
    photo: null,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for easy use
export const useUser = () => useContext(UserContext);
