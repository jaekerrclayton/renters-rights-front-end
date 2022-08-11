import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import typeDataJson from '../data/english_data/evictionTypesData.json';
import Defense from './Defense';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { OffcanvasBody, OffcanvasHeader } from 'react-bootstrap';



const TypesAbbr = () => {

    let types = typeDataJson;
    const [currentType, setCurrentType] = useState({'renterRights':[]});
    const [displayTypes, setDisplayTypes] = useState({1:false, 2:false, 3:false, 4:false});


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const displayType = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setDisplayTypes({1:false, 2:false, 3:false, 4:false});
        displayTypes[e.target.value] = true;
        setCurrentType(types.find((type) => type.typeId === e.target.value));

    }

    const rights = currentType.renterRights.map((right) => (
        <div>
            <b>You may have a defense to eviction if any of the following apply:</b>
            <h4>{right.Defense}</h4>
            <p>{right.Description}</p>
        </div>))

    return (
        <>

        <Button variant="secondary" onClick={handleShow}  className="me-2">Causes for Eviction</Button>
        <Offcanvas placement='bottom' scroll={true} backdrop={true} show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                {types
                    .map((type) => ( 
                        <Button variant="secondary" value={type.typeId} onClick={displayType}>
                            {type.cause}
                        </Button>
                    ))}
                </Offcanvas.Title>
            </Offcanvas.Header>
            <OffcanvasBody>
         
            {/* <nav style={{
                    borderRight: "solid 1px",
                                padding: "1rem",
                            }}>
                            {types
                                .map((type) => ( 
                                    <button value={type.typeId} onClick={displayType}>
                                        {type.cause}
                                    </button>
                                ))}
                        </nav> */}
           
                            <p style={{display: displayTypes[1] ? 'none': ''}}>
                                <main class='type' style={{ padding: "1rem" }}>
                                    <h4 class='type-title'>{currentType.cause}</h4>
                                    <h6 class='type-description'>{currentType.description}</h6>
                                    <div>
                                        <p>{currentType.landlordNeeds}</p>
                                    </div>
                                    <div>
                                        {rights}
                                    </div>
                                </main>
                            </p>

            </OffcanvasBody>


        </Offcanvas>
      
    </>
    );
}

export default TypesAbbr;