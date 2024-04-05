import React from 'react'
import "./../../css/navbar.css"
import ReactDOM from 'react-dom/client';
export default function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg '>
        <div className="container d-flex justify-content-between">
            <a href="" className='navbar-brand'>
            <img src="/logo.png" id='img' className='' />
            </a>
          <div className='' id='search'>
            <input type="text" className='' placeholder='search in e-shirt' />
            <i className="fas fa-search fs-5"></i>
          </div>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='text-black nav-link'>
                <i className="fas fa-heart fs-5"></i>
              </a>
            </li>
            <li className='nav-item'>
              <a className='text-black nav-link'>
                <i className="fas fa-user fs-5"></i>
              </a>
            </li>
            <li className='nav-item'>
              <a className='text-black nav-link'>
              <i className="fa-solid fa-bag-shopping fs-5"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('navbar')).render(     
  <Navbar />       
);