import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { ButtonFilled} from '../Button/Button';
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick =()=>setClick(!click);
    const closeMobileMenu =()=>setClick(false)

    const showButton =() =>{
         if(window.innerWidth <= 960){
             setButton(false);
         } else{
             setButton(true)
         }
    }
    useEffect(()=>{
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    
    const [showMe, setShowMe] = useState(false);
    function toggle(){
      setShowMe(!showMe);
    }
console.log(button);
    return (
        <div>
          <nav className="navbar">
              <div className="navbar-container">
                  <Link to="/" className= "navbar-logo" onClick={closeMobileMenu}>
                      <img src="/Images/outboxedu logo.png" alt="Outbox EDU logo" className="Logo"/>
                  </Link>
                  <div className ='menu-icon' onClick={handleClick}>
                    <i className ={click ? 'fas fa-times' : 'fas fa-bars'}/>
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li className ='nav-item'>
                          <Link to ='/jobs' className ='nav-links' onClick={closeMobileMenu}>
                              Jobs
                          </Link>
                      </li>
                      <li className ='nav-item'>
                          <Link to ='/createprofile' className ='nav-links' onClick={closeMobileMenu}>
                             Create Profile
                          </Link>
                      </li>
                      <li className ='nav-item none' >
                          <Link to ='/viewprofile/:id' className ='nav-links' onClick={closeMobileMenu}>
                             Profile
                          </Link>
                      </li>
                      <li className ='nav-item none'>
                          <Link to ='/signin'  className ='nav-links' onClick={closeMobileMenu}>
                             Sign out
                          </Link>
                      </li>
                       <li className ='nav-item dropdown' onClick={toggle}>
                          <span to ='/viewprofile/:id' className ='nav-links ' onClick={closeMobileMenu}>
                               John
                              <img src="/Images/John.webp" alt="avatar" width={40} height={40}/>
                          </span>
                      </li>
                    
                  </ul>
                  <ButtonFilled text="Sign Up" url = "#" onClick={()=>console.log("hihi")}/>
          
              </div>
          </nav>  
                <div 
                style={{ display: showMe ? "block" : "none" }}
                className="menu "
                >
                <span className="menuitem">
                <Link to="/profile">
                <span className='nav-link my-0 text-white' activeclassname='activeLink'>
                    View Profile
                    </span>
                    </Link>
                </span>
                <span className="menuitem">
                <Link to="/signin">
                <span className='nav-link my-0 text-white' activeclassname='activeLink'>
                Sign In
                    </span>
                    </Link>
                </span>
            </div>
        </div>
    );
}

export default Navbar;
