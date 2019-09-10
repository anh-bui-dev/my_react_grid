import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Job from './job';

class Popup extends Component {
    // Initialization
    constructor(props) {
        super(props);
    }
    
    render() {
        const { title, detail, openPopup, handlePopup } = this.props;
        return (
            <div id='popup'>
                <Modal show={openPopup} onHide={handlePopup}>
                    <Modal.Header closeButton>
                        <Modal.Title><h4>{title}</h4></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Job detail={ detail } />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='red-button' onClick={handlePopup}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Popup;