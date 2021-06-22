import MainPage from "./components/MainPage";
import ConnexionPage from "./components/ConnexionPage";
import "./App.scss";
import "sweetalert2/dist/sweetalert2.css";
import { useState } from "react";

const App = (props) => {
  let [sideMenuContext, setSideMenuContext] = useState(false);
  let [authContext, setAuthContext] = useState({
    authVisible: false,
    userStatus: "",
    check: "",
  });
  let [contentContext, setContentContext] = useState("project");
  let [logIn, setLogIn] = useState({
    isUserLoggedIn: false,
    userCredentials: {},
  });

  let [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const handleDisconnect = () => {
    setLogIn({
      isUserLoggedIn: false,
      userCredentials: {
        name: "",
        lastName: "",
        email: "",
        password: "",
      },
    });
  };

  const handleConnect = (event) => {
    event.stopPropagation();
    setLogIn({
      isUserLoggedIn: true,
      userCredentials: {
        name: "",
        lastName: "",
        email: "",
        password: "",
      },
    });
    setAuthContext({ authVisible: false });
    setContent("project");
  };

  const loggerIn = (userObject) => {
    setLogIn({
      isUserLoggedIn: true,
      userCredentials: userObject,
    });
  };

  const setContent = (context) => {
    setContentContext(context);
  };

  const setMenuContext = (context) => {
    setSideMenuContext(context);
  };

  return (
    <>
      {((context) => {
        if (context) {
          return (
            <MainPage
              authContext={authContext}
              setAuthContext={setAuthContext}
              setContent={setContent}
              context={sideMenuContext}
              setSideMenuContext={setMenuContext}
              contentContext={contentContext}
              handleDisconnect={handleDisconnect}
              isUserAuthenticated={isUserAuthenticated}
              setIsUserAuthenticated={setIsUserAuthenticated}
            />
          );
        }
      })(logIn.isUserLoggedIn)}
      {((context) => {
        if (!context) {
          return <ConnexionPage handleConnect={handleConnect} />;
        }
      })(logIn.isUserLoggedIn)}
    </>
  );
};

export default App;
