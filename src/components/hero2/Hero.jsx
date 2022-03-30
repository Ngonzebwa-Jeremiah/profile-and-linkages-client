// eslint-disable

import React from "react";
import JobDataNames from "../jobData/Data";
import { Link } from "react-router-dom"; 
import "./Hero.css"; 

const Hero = () => {
  return (
    <div>
        <section
          className="section py-section flex-wrap
                    babybear:flex-col
                    papabear:flex-nowrap"
        >
          <div
            className="self-start mb-[24px] w-full flex-shrink-0
                  papabear:w-column papabear:mr-[72px] papabear:mb-[0px]"
          >
            <h2 className="secondary-heading">
              Find the right job or Opportunity for Your Career
            </h2>
          </div>

          <div className="w-full papabear:max-w-[calc(theme('spacing.content-max-w')-theme('spacing.column')-72px)]">
            <h2 className="etta-caps-header mb-[20px]">Suggested Searches</h2>

            <div className="show-more-less etta-show-more-less">
              <ul
                data-max-num-to-show="10"
                className="show-more-less__list show-more-less__list--hide-after-10-with-animations
                 show-more-less__list--hide-after-10"
              >
                
                  {
                    JobDataNames.map((job ,index) => (
                       <li key={index} >
                            <Link to={job.link} className="pill"  >
                            {job.title}
                            </Link> 
                        </li>
                    ))
                  }
            
              </ul>

              {/* <button
                className="show-more-less__button show-more-less__more-button"
                aria-expanded="false"
                aria-label="Show more Suggested Searches"
                data-tracking-control-name="homepage-basic_pill-list-module_etta-show-more-less_show_more"
              >
                Show more
                <i
                  className="show-more-less__button--chevron lazy-loaded"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    preserveAspectRatio="xMinYMin meet"
                    focusable="false"
                    className="lazy-loaded"
                  >
                    <path
                      d="M8 9l5.93-4L15 6.54l-6.15 4.2a1.5 1.5 0 01-1.69 0L1 6.54 2.07 5z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </i>
              </button>

              <button
                className="show-more-less__button show-more-less__less-button show-more-less__button--hide"
                aria-expanded="false"
                aria-label="Show less Suggested Searches"
                data-tracking-control-name="homepage-basic_pill-list-module_etta-show-more-less_show_more"
              >
                Show less
                <i
                  className="show-more-less__button--chevron lazy-loaded"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    preserveAspectRatio="xMinYMin meet"
                    focusable="false"
                    className="lazy-loaded"
                  >
                    <path
                      d="M8 7l-5.9 4L1 9.5l6.2-4.2c.5-.3 1.2-.3 1.7 0L15 9.5 13.9 11 8 7z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </i>
              </button> */}
            </div>
          </div>
        </section>
    </div>
  );
};

export default Hero;
