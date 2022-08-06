import {
    useParams,
    useNavigate,
    useLocation,
    } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import typeDataJson from './evictionTypesData.json';
import './evictionType.css';


const Type = () => {
  let { typeId } = useParams();
  const [typeData, setTypeData] = useState([]);

  useEffect(() => {
    setTypeData(typeDataJson.find((type) => String(type.typeId) === typeId));
  }, [typeId])

  console.log(typeData);
  const rights = typeData['Renter Rights'];
  return (
      <main class='type' style={{ padding: "1rem" }}>
          <h2 class='type-title'>{typeData.Cause}</h2>
          <h4 class='type-description'>{typeData.Description}</h4>
          <div>
              <p>{typeData['Landlord Needs']}</p>
          </div>
          <h4>You may have a defense to eviction if any of the following apply:</h4>
          <div>
              {rights.map((right) => (
                  <div>
                      <h1>{right.Defense}</h1>
                      <p>{right.Description}</p>
                  </div>
              ) )}
          </div>
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