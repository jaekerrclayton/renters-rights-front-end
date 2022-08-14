import React from "react";
import {NavLink} from "react-router-dom"; 



function Footer({translations}) {
  return (
    <div className="footer">
      <footer id="nav-nav" class="py-sm-0 fixed-bottom">
        {/* <div class="container"> */}
          <p class="m-0 text-center">
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
