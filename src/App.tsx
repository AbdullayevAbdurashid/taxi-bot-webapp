/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

// Define type for user data
interface UserData {
  // Define properties of user data
}

function App() {
  // State to store user data
  const [user, setUser] = useState<UserData | string | undefined>();

  useEffect(() => {
    // Check if the Telegram object exists on the window
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();

      // Type assertion for userData
      const userData = (window.Telegram.WebApp.initDataUnsafe as any)?.user;

      if (!userData) {
        setUser("false");
      } else {
        setUser(userData);
      }
      // Proceed with the authentication process using userData
    } else {
      console.log("Telegram object not available");
    }
  }, []);

  return <Container>{user}</Container>;
}

export default App;
