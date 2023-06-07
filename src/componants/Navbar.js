// import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
export default function Navbar(props) {
  // import {Link} from "react-router-dom";
  return (
    <>
  
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.homeType}</a>
          </li> 
        {/* <li className="nav-item">
          <Link className="nav-link" to="/About" >{props.aboutText}</Link>
        </li> */} 
        {/* <div className="form-check form-switch">
  <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
</div> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <div className={`form-check form-switch ${props.mode==='light' ? 'dark':'light'} `}>
      <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
</div>
      {/* <label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
</label> */}
      {/* eslint-disable-next-line no-unused-vars */}
      {/* <form className="d-flex" role="search"> */}
  {/* <button className="form-control me-2" onClick={props.toggleMode} type="switch" role="switch" aria-label="search"/> */}
  {/* <label className="btn btn-outline-success" type="submit">Default switch checkbox input</label> */}
  {/* </form> */}
</div>
    </div>
  </div>
</nav>
</>
  )}
Navbar.propTypes = {
      title: PropTypes.string.isRequired,
      homeType: PropTypes.string.isRequired,
      mode: PropTypes.string.isRequired,
      toggleMode: PropTypes.func.isRequired,
      aboutText: PropTypes.string.isRequired,
}
