import React, { useState } from 'react'
import ViewDoc from './ViewDoc';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import props from 'react'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import './DocReview.css'

function DocReview({RR}) {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    console.log(RR);
  return (
    <div>

<Button variant="primary" onClick={handleShow} className="btn  btn-primary">
       <h5 className='text text-light '>Review</h5> 
      </Button>
      <Offcanvas className='canvas' show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Review</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {
      RR?.map(item=>(
        <MDBListGroup style={{ minWidth: '22rem' }} light >
        <MDBListGroupItem>Name: {item.patient_name}</MDBListGroupItem>
        <MDBListGroupItem>Date: {item.date}</MDBListGroupItem>
        <MDBListGroupItem>Comments: {item.comments}</MDBListGroupItem>
        <MDBListGroupItem>Rating: {item.rating}</MDBListGroupItem>
        
      </MDBListGroup>
      ))
  }
    
        </Offcanvas.Body>
      </Offcanvas>
    
  


    </div>
  )
}

export default DocReview