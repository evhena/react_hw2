import './App.css';
import React, { useState } from 'react'
import LoginPage from './pages/loginPage/LoginPage'
import ContentPage from './pages/contentPage/ContentPage';
import AuthHoc from './hoc/AuthHoc';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [user, setUser] = useState({email: "", pass: ""});
  
  const Login = details => {
    console.log(details)
    if( details.email !== "" && details.pass !== "") {
      console.log("Logged in!")
      setUser(
        {
          email: details.email,
          pass: details.pass
        })
    }
  }

  const Logout = () => {
    setUser({email: "", pass: ""})
    localStorage.clear();
    console.log("Logout")
  }

  return (
    <div className="App">

      {
        (!localStorage.userEmail) 
        ? 
        ( <LoginPage Login={Login} /> ) 
        :  
        <ContentPage Logout={Logout} />
      }
    
    </div>
  );
}

export default App;
