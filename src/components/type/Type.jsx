import {
    useParams,
    useNavigate,
    useLocation,
    } from "react-router-dom";
import React from 'react';
import { getType } from './typeData';
import './evictionType.css';

const Type = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let type = getType(parseInt(params.typeId, 10));

    return (
        <main class='type' style={{ padding: "1rem" }}>
            <h2 class='type-title'>cause : {type.cause}</h2>
            <h4 class='type-description'>description: {type.description}</h4>
            <div>
                <p>landlordNeeds: {type.landlordNeeds}</p>
            </div>
            <h4>You may have a defense to eviction if any of the following apply:</h4>

            <div>
                {type.renterRights.map((right) => (
                    <div>
                        <h1>Defense: {right.defense}</h1>
                        <p>{right.description}</p>
                    </div>
                ) )}
            </div>

            {/* {type.renterRights.map((nestedInfo) => {

                <h1>DEFENSE: {nestedInfo}</h1>
                 */}
                
            {/* } )} */}
                {/* <p>rentersRights: {type.rentersRights}</p> */}
        </main>
    );
}

/* <div>
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
    </div> */

// renterRights: [
//     {defense: "Res Judicata",
//     description: "Landlords may not bring a second lawsuit about the same lease violation incident according to the doctrine of res judicata."
//     }]

export default Type; 