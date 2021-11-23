import React from 'react'
import PostRequest from '../../components/PostRequest'
import './ContentPage.css'
import Header from '../../components/Header'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'

export default function PostsPage(props) {

  const { Logout } = props;
  return (
    <div className="page_wrapper">
      <Header Logout={Logout}/>
      <Aside />
      <div className="page_content">
        <h2>
          Content page
        </h2>
        <PostRequest />
      </div>
      <Footer />
    </div>
  )
}
