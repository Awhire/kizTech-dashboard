import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import Navigation from "./Components/NavigationTemplate/Navigation";
import Login from "./Login/Login";
import Main from "./Main/Main";
import { ThemeContext } from "./ThemeContext";
import { useEffect, useState } from "react";
import { auth } from "./Firebase";

function App() {
  const [DarkTheme, setDarkTheme] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ DarkTheme, setDarkTheme }}>
      <div className="App">
        {/* {!loggedIn && <login />}
        {loggedIn && (
          <>
            <Navigation />

            <Main />
          </>
        )} */}
        
        {loggedIn ? (
          <>
            <Navigation />

            <Main />
          </>
        ) : (
          <Login />
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
