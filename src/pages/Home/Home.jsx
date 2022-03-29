import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div className="main-section">
      <div className="self-start relative flex-shrink-0 w-[55%] pr-[42px] babybear:w-full babybear:pr-[0px]">
        <h1 className="main-heading text-copper-70 babybear:pb-[24px]">
          Welcome To The Edu Community <br />
          build A Profile <br />
          Search for jobs 
        </h1><br />
        <div className="flex flex-row flex-nowrap h-auto mb-hero-content babybear:w-full babybear:mb-[0px] papabear:mt-[48px]">
          <ul className="w-full">
            <li className="w-[16px]">
              <Link to="/jobs" className="etta-btn container-lined bg-white hover:text-black-a90 hover:container-raised">
                Search for a job
                <i aria-hidden="true" className="ml-[16px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="artdeco-icon lazy-loaded"
                    focusable="false"
                  >
                    <path
                      d="M14 12L8 3.06 9.55 2l6.19 9.15a1.5 1.5 0 010 1.69L9.55 22 8 20.94z"
                      fill="rgba(0, 0, 0, 0.6)"
                    />
                  </svg>
                </i>
              </Link>
            </li>
            <li className="w-[16px]">
              <Link to="/profile" className="etta-btn container-lined bg-white hover:text-black-a90 hover:container-raised ">
                Find an Alumni
                <i aria-hidden="true" className="ml-[16px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="artdeco-icon lazy-loaded"
                    focusable="false"
                  >
                    <path
                      d="M14 12L8 3.06 9.55 2l6.19 9.15a1.5 1.5 0 010 1.69L9.55 22 8 20.94z"
                      fill="rgba(0, 0, 0, 0.6)"
                    />
                  </svg>
                </i>
              </Link>
            </li>
            <li className="w-[16px]">
              <Link to="/CreateProfile" className="etta-btn container-lined bg-white hover:text-black-a90 hover:container-raised">
                Create a Profile
                <i aria-hidden="true" className="ml-[16px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="artdeco-icon lazy-loaded"
                    focusable="false"
                  >
                    <path
                      d="M14 12L8 3.06 9.55 2l6.19 9.15a1.5 1.5 0 010 1.69L9.55 22 8 20.94z"
                      fill="rgba(0, 0, 0, 0.6)"
                    />
                  </svg>
                </i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <img src="./images/outbox-edu-02.jpg" alt="pic" className="flip-rtl
      block z-[-1] w-[700px] h-[560px] relative flex-shrink
      babybear:w-[374px] babybear:h-[214px] babybear:static"/>
    </div>
  );
}

export default Home;
