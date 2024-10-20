import React, { createContext, useState, useEffect } from "react";
import axios from "../config/config-axios";

// Tạo UserContext
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/auth/get/account"
        );
        setUser(response.data.data);
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser({
          name: "",
        }); // Nếu không lấy được user, đặt lại là null
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
