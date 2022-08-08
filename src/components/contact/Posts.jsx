import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div>
      <div class="container">
        <Link to="/blog/this-is-a-post-title">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src=""
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">POSTSSS FILE</h1>
              <p>
                some text : but this is referring how how all posts should show up 
                --- like alist of al the Posts
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;
