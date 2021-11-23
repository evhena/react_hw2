import React from 'react'
import '../pages/contentPage/ContentPage.css'

export default function Header(props) {
  const {
    Logout
  } = props;
  return (
    <header className="page_header">
      <ul className="navigation">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Terms and conditions</a></li>
      </ul>
      <button className="button_logout" onClick={Logout}>Logout</button>
    </header>
  )
}
