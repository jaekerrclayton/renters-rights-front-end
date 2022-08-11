import React from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
// import { getResource, deleteResource } from "./resourcedata";
import resourceData from '../data/english_data/resourceData.json'; 


const getResource = (resourceId) =>  {
  return resourceData.find(
    (resource) => resource.resourceId === resourceId
  );
};



const Resource = () => {

  


  // export function getResource(number) {
  //   return resources.find(
  //     (resource) => resource.number === number
  //   );
  // };
  



      let navigate = useNavigate();
      let location = useLocation();
      let params = useParams();
      let resource = getResource(parseInt(params.resourceId, 10));
      // let contacts = resource.resource_list; 

      return (
        <main>
          <h2>{resource.type}</h2>
          <p>{resource.about_resource}</p>
          {resource.resource_list.map((contact) => (
            <ul>
              <h6>{contact.title}</h6>
              <p>{contact.phone_number}</p>
              <p>{contact.email}</p>
              <p>{contact.summary}</p>
              <p>{contact.about}</p>
            </ul>
          ))}
          {/* <h4>
            {resource.amount}
          </h4> */}
    
          <p>
            {/* <button
              onClick={() => {
                deleteResource(resource.number);
                navigate("/resources" + location.search);
              }}
            >
              Delete
            </button> */}
          </p>
        </main>
      );
}

export default Resource; 