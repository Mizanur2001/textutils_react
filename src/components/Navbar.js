import React from "react";
import '../style.css'
import { Link } from "react-router-dom";


export default function Navbar(props) {
  const funcCustomColor = (color) => {
    if (props.mode === 'dark') {
      document.body.style.background = `${color}`
      document.body.style.color = 'white'
    }
    else{
      props.customColorAlrt();
    }
  }


  return (
    <div>
      <nav className={`navbar py-3 navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"> {props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"> {props.about}</Link>
              </li>
            </ul>
            <div className="d-flex">

              <div className="colorPalettes">
                <div onClick={() => { funcCustomColor('#011c02') }} className="green boxes" id="green"></div>
                <div onClick={() => { funcCustomColor('rgb(18, 0 , 18)') }} className="violet boxes"></div>
                <div onClick={() => { funcCustomColor('#1c0000') }} className="red boxes"></div>
                <div onClick={() => { funcCustomColor('#181700') }} className="yello boxes"></div>
              </div>

              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.funcToggleMode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.mode === 'dark' ? 'Disable Dark Mode' : 'Enable Dark Mode'}</label>
              </div>
            </div>
          </div>
        </div>
      </nav >
    </div >
  );
}

Navbar.defaultProps = {
  title: "Title",
  home: "Home",
  about: "About Us"
};
