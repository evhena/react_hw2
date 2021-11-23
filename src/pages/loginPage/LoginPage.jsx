import React, { useState } from 'react'
import './LoginPage.css'

export default function LoginPage(props) {

  const {
    children,
    Login
  } = props;

  let [details, setDetails] = useState ({email: "", pass: ""})
  
  const handleSubmit = (e) => {
    e.preventDefault();
    Login(details);
 
    localStorage.setItem('userEmail', details.email);
    localStorage.setItem('userPassword', details.pass);

    console.log(localStorage.userEmail)

    // setDataUser = () => ({ 
    //   emailField: this.state,
    //   passField: this.state
    // })

    // const requestOptions = {
    //   method: "POST",
    //   headers: {"Content-type": "application/json"},
    //   body: { dataUser }
    // };

    // if (dataUser) {
    //   console.log("Form sent", dataUser)
    // }
  }

  // const handleInputChange = (e) => {
    
  //   if (e.target.name === "email") {
  //     setDataUser({
  //       emailField: e.target.value
  //     })
  
  //   } else if (e.target.name === "pass") {
  //     setDataUser({ 
  //       passField: e.target.value
  //     })
  //   }
    
  //   console.log(dataUser)
  // }

  return (
    <div className="login_page">
      Welcome! Please login to visit our site!
      <form action="" className="form" onSubmit={handleSubmit}>
        <input type="email" 
          placeholder="Email" 
          autoComplete="email" 
          required 
          name="email" 
          className="input" 
          value={details.email}
          onChange={e => setDetails({...details, email: e.target.value})}
        />
        <input type="pass" 
          placeholder="Password" 
          required 
          className="input" 
          name="pass" 
          value={details.pass}
          onChange={e => setDetails({...details, pass: e.target.value})}
        />
        <button type="submit" className="custom-btn btn">
          <span>Get your best!</span>
        </button>
      </form>
    </div>
  )
}
