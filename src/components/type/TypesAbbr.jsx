import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { OffcanvasBody } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';



const TypesAbbr = ({typeDataJson}) => {

    let types = typeDataJson.evictionTypes;
    const [currentType, setCurrentType] = useState({'renterRights':[]});
    const [displayTypes, setDisplayTypes] = useState({1:false, 2:false, 3:false, 4:false});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault();
        setShow(true);
        setDisplayTypes({1:false, 2:false, 3:false, 4:false});
        displayTypes[e.target.target] = true;
        setCurrentType(types.find((type) => type.typeId === e.target.target));
    }

    const displayType = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setDisplayTypes({1:false, 2:false, 3:false, 4:false});
        displayTypes[e.target.target] = true;
        setCurrentType(types.find((type) => type.typeId === e.target.target));
    }

    const rights = currentType.renterRights.map((right) => (
        <Accordion.Item eventKey={right.Defense}>
            <Accordion.Header>
                {right.Defense}
            </Accordion.Header>
            <Accordion.Body>
                {right.Description}
            </Accordion.Body>
        </Accordion.Item>
        ))
    
    const getDropDown = types.map((type) => {
        return (
            <Dropdown.Item target={type.typeId} onClick={handleShow}>{type.cause}</Dropdown.Item>
        )
    })

    return (
        <>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {typeDataJson.button_title}
            </Dropdown.Toggle>
                <Dropdown.Menu>
                    {getDropDown}
                </Dropdown.Menu>
        </Dropdown>
        <Offcanvas placement='start' scroll={true} backdrop={true} show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {typeDataJson.button_title}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {types.map((type) => (
                                <Dropdown.Item target={type.typeId} onClick={displayType}>{type.cause}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <OffcanvasBody>
                            <p style={{display: displayTypes[1] ? 'none': ''}}>
                                <main class='type' style={{ padding: "1rem" }}>
                                    <h4 class='type-title'>{currentType.cause}</h4>
                                    <h6 class='type-description'>{currentType.description}</h6>
                                    <div>
                                        <p>{currentType.landlordNeeds}</p>
                                    </div>
                                    <div>
                                        {/* {rights} */}
                                        <Accordion>
                                            {rights}
                                        </Accordion>
                                    </div>
                                </main>
                            </p>
            </OffcanvasBody>
        </Offcanvas>
    
    </>
    );
}

export default TypesAbbr;