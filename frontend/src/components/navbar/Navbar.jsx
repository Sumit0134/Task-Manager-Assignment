import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#"><b>Task Manager</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Sign Up</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Sign In</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Log Out</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3231862/user-avatar-icon-sm.png" className='img-fluid user-png' alt="/" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
