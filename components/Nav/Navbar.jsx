
// import profilePic from "../../assets/images/user.png"; 
import navStyles from "./Navbar.module.css";
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/images/logo4.png'
import { useStateValue } from "../../ContextAPI/StateProvider";

const Navigation = () => {
  const [showLinks, setShowLinks] = useState(false)
  const [{ response }, dispatch] = useStateValue();
  const router = useRouter()



  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
// console.log(response);

function logout() {
  dispatch({
    type: "SET_RES",
    response: null,
  })
  // window.location.reload()
  // const pathname = "/logIn"
  // router.reload(pathname)
  // router.push("/logIn")
}

  return (
    <div className='Navigation border'>
      <header>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light navigation py-3 px-1'>
            <Link className='navbar-brand' href='/' passHref>
              <a>
              <Image src={logo} alt='logo' height='50' width='50' />
              </a>
            </Link>
            <button
              className='navbar-toggler d-lg-none'
              type='button'
              onClick={()=>{setShowLinks(!showLinks)}}
            >
              <i style={{ color: 'var(--main-blue)' }} className='fas fa-bars' />
            </button>
            <div className='collapse navbar-collapse'  id={showLinks ? "hidden" : ""}>
              <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                <li className='nav-item'>
                  <Link href='https://linkages-edu.vercel.app/'>
                    <a className='nav-link ml-lg-3' activeclassname='activeLink'>
                      Jobs
                    </a>
                  </Link>
                </li>
                {/* <li className='nav-item'>
                  <Link href='/curriculum'>
                    <a className='nav-link ml-lg-3' activeclassname='activeLink'>
                      Create Profile
                    </a>
                  </Link>
                </li> */}
                {/* <li className='nav-item'>
                  <Link href='/contact'>
                    <a className='nav-link ml-lg-3' activeclassname='activeLink'>
                      All Profiles
                    </a>
                  </Link>
                </li> */}
                  <li className='nav-item'>
                 <div className={navStyles.user} onClick={toggle}>
             <span className='nav-link ml-lg-3 m-0'>Menu</span>
            {/* <Image
              src={profilePic}
              alt="Profile pic"
              width={35}
              height={35}
              className={navStyles.img}
            /> */}
          </div>
                </li>
                
              </ul>
            </div>
          </nav>
          <div
        style={{ display: showMe ? "block" : "none" }}
        className={navStyles.menu}
      >
        <span className={navStyles.menuitem} onClick={logout}>
          <Link href="/logIn" >
          <a className='nav-link my-0 text-white' activeclassname='activeLink'>
          logout
            </a>
            </Link>
        </span>
      </div>
        </div>
      </header>
    </div>
  )
}
export default Navigation
