import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert'; 

const ResourcesAbbr = ({resourceData}) => {
    let resources = resourceData.resources;
    const [currentResource, setCurrentResource] = useState(resources[0]);
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
            <h6>{resource.title}</h6>
            <p>{resource.about}</p>
            <p>{resourceData.phone}: {resource.phone_number}</p>
            <p>{resourceData.email}: {resource.email}</p>
        </div>))

    return (

        <Container>

            <Alert className="text-box" variant="success">
                    <Alert.Heading>{resourceData.title}</Alert.Heading>
                    <hr />

                <p>
                <nav>
                    {resources
                        .map((resource) => ( 
                            <button  className='button' value={resource.resourceId} onClick={displayResource}>
                                {resource.type}
                            </button>
                        ))}
                </nav>
    
                </p>
                <hr />
        
                <p style={{
                        maxHeight: 'calc(75vh - 210px)',
                        overflowY: 'auto'
                    }}>
                <div>
                    <main class='type' style={{ padding: "1rem" }}>
                        <h4 class='type-title'>{currentResource.title}</h4>
                        <div>
                            {resourceList}
                        </div>
                    </main>
                </div>
                </p>

        </Alert>
        </Container>

    );
}

export default ResourcesAbbr;