import React from "react";
import {NavLink} from "react-router-dom"; 



function Footer() {
  return (
    <div className="footer">
      <footer class="py-sm-0 bg-dark fixed-bottom">
        {/* <div class="container"> */}
          <p class="m-0 text-center text-white">
              {/* <p>some text</p> */}
            <NavLink className="nav-link" to="/resources/1">
                Legal Help : Contact a Lawyer
            </NavLink>               

          </p>
        {/* </div> */}
      </footer>
    </div>
  );
}

export default Footer;
