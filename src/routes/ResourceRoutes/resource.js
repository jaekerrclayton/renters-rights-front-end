import React from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { getResource, deleteResource } from "./data";

export default function Resource() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let resource = getResource(parseInt(params.resourceId, 10));

  return (
    <main style={{ padding: "1rem" }}>
      <h2>{resource.name}</h2>
      <h2>Total Due: {resource.amount}</h2>
      <p>
        {resource.name}: {resource.number}
      </p>
      <p>Due Date: {resource.due}</p>
      <p>
        <button
          onClick={() => {
            deleteResource(resource.number);
            navigate("/resources" + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}