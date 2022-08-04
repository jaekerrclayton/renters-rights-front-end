import React from "react";
import { Outlet } from "react-router-dom";
import order2 from '../stage/evictionNotices/order2.jpeg';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import './blog.css'; 





function Blog() {
  return (
    <div>
      <div class="my-container">
      <img
          src={order2}
          alt="third"
            />
      <OverlayTrigger
          trigger="click"
          key='right'
          placement='right'
          overlay={
            <Popover id={`popover-positioned-right`}>
              <Popover.Header as="h3">Popover-right</Popover.Header>
              <Popover.Body>
                <strong>Holy guacamole!</strong> Check this info.
              </Popover.Body>
            </Popover>
          }
        >
          <Button class="btn" variant="secondary">Popover on right</Button>
        </OverlayTrigger>
      </div>

<div>
      {['top', 'right', 'bottom', 'left'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
              <Popover.Body>
                <strong>Holy guacamole!</strong> Check this info.
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary">Popover on {placement}</Button>
        </OverlayTrigger>
      ))}
    </div>
        <h1 className="text-center mt-5">Any Articles / Updates</h1>
      
        <Outlet />
      
    </div>
  );
}

export default Blog;
