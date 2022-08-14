import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
// import resourceData from '../data/english_data/resourceData.json'; 

const ResourcesAbbr = ({resourceData}) => {
    console.log(resourceData.resources[0]);
    let resources = resourceData.resources;
    const [currentResource, setCurrentResource] = useState(resources[1]);
    const [displayResources, setDisplayResources] = useState({1:true, 2:false, 3:false, 4:false});

    const displayResource = (e) => {
        e.preventDefault();
        let id = e.target.value
        console.log(id);
        setDisplayResources({1:true, 2:false, 3:false, 4:false})
        displayResources[id] = true;
        setCurrentResource(resources.find((resource) => resource.resourceId === Number(id)));
        console.log(currentResource);
    }

    const resourceList = currentResource['resource_list'].map((resource) => (
        <div>
            <h4>{resource.title}</h4>
            <p>{resource.about}</p>
            <p>{resourceData.phone}: {resource.phone_number}</p>
            <p>{resourceData.email}: {resource.email}</p>
        </div>))

    return (
        <main>
            <h2>{resourceData.title}</h2>
            <Row>
                <nav>
                    {resources
                        .map((resource) => ( 
                            <button  className='button' value={resource.resourceId} onClick={displayResource}>
                                {resource.type}
                            </button>
                        ))}
                </nav>
            </Row>
            <Row>
                <div>
                    <main class='type' style={{ padding: "1rem" }}>
                        <h4 class='type-title'>{currentResource.title}</h4>
                        <div>
                            {resourceList}
                        </div>
                    </main>
                </div>
            </Row>
        </main>
    );
}

export default ResourcesAbbr;