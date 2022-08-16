import React from "react";
import {NavLink} from "react-router-dom"; 


const Footer = ({translations}) => {
  return (
    <div className="footer">
      <footer class="py-sm-0 fixed-bottom">
        {/* <div class="container"> */}
          <p class="m-1 text-center">
              {/* <p>some text</p> */}
            <NavLink className="nav-link" to="/resources">
                {translations.footer}
            </NavLink>               

          </p>
        {/* </div> */}
      </footer>
    </div>
  );
}

export default Footer;
