import React from 'react'
import '../pages/contentPage/ContentPage.css'

export default function Aside() {
  return (
    <aside className="page_aside">
      <ul className="page_aside_navigation navigation">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Terms and conditions</a></li>
      </ul>
      <div>Advertisement
        <a href="https://ibb.co/pbmTTZn">
          <img className="aside_image" src="https://i.ibb.co/pbmTTZn/nasa-1lf-I7wk-GWZ4-unsplash-1.jpg" alt="nasa-1lf-I7wk-GWZ4-unsplash-1" border="0" />
        </a>
      </div>
      <div>Advertisement
        <a href="https://ibb.co/MZ7BNG4">
          <img className="aside_image" src="https://i.ibb.co/VJTwBQZ/jackson-so-t-l5-FFH8-VA-unsplash.jpg" alt="jackson-so-t-l5-FFH8-VA-unsplash" border="0" />
        </a>
      </div>
    </aside>
  )
}
