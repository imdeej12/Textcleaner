import React,{useState} from 'react';
import PropTypes from 'prop-types'


export default function Navbar(props) {

  

 
const toggleInDark=() =>{
        
}


  return (

        /*==========================Navbar start ====================== */ 
            <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                     <a href="index.html" className="navbar-brand ml-lg-3">
                        <h1 className="mx-3 text-primary">{props.title}</h1>
                     </a>
                     <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                    <div className="navbar-nav m-auto py-0">
                        <a href="index.html" className="nav-item nav-link active ">Home</a>
                        <a href="about.html" className="nav-item nav-link text-grey">About</a>
                        <a href="contact.html" className="nav-item nav-link text-grey">Contact</a>
                    </div>

                        <div className={`form-check form-switch text-${props.mode==='light'? 'dark' : 'light'}`}>
                         <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
                       </div>
                    
                </div>
           
            </nav>
            
       
    
    
    
  )
}

// Navbar.PropTypes = {
//   title: PropTypes.string.isRequired,
//   about: PropTypes.string.isRequired
// }