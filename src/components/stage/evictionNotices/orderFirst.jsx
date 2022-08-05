import React from "react";
import { Outlet } from "react-router-dom";
import order1 from './order1.jpeg';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import './orderfirst.css'; 


import {getOrderFirstInfo } from './photoData'; 


const OrderFirst = () => {
  let orderInfo = getOrderFirstInfo(); 

  return (
    // <div>
      <div class="my-container">
      <img
          src={order1}
          alt="third"
            />
      <div>
        {orderInfo.map((info) => (
          <OverlayTrigger
                trigger="hover"
                key={info.order_id}
                placement={info.placement}
                overlay={
            <Popover id={info.title}>
              <Popover.Header as="h3">{info.title}</Popover.Header>
              <Popover.Body>
                <strong>{info.sub_title}</strong> Check this info.
              </Popover.Body>
            </Popover>
          }
        >
          <Button id={`btn-${info.order_id}`} variant="secondary">{info.order_id}</Button>
        </OverlayTrigger>
          
        ))}

      </div>
      
    </div>
  );
}

export default OrderFirst;
