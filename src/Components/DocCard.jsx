import React from 'react'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './DocCard.css'
import Card from 'react-bootstrap/Card';

function DocCard({doctors}) {
    console.log(doctors);
  return (
    

      <div className='div'>
    <div className='card mx-2 my-4' >
      <div>
          <Link to={`view/${doctors.id}`}>
          <Card className='cards  my-4 ' style={{ width: '16rem' ,height:'200px'}}>
                <Card.Body>
                    <Card.Title className='text-light'>{doctors.hospital}</Card.Title>
                    <br></br>
                    <Card.Subtitle className="mb-2  text-light">{doctors.name}</Card.Subtitle>
                    <Card.Text className='text-light'>Specialized In : {doctors.specialty}</Card.Text>
                    <Card.Text  className='text-light'><i class="fa-solid fa-star text-warning"></i> {doctors.rating}</Card.Text>
                    
                </Card.Body>
            </Card>
     </Link>
     </div>
    </div>
    </div>
    
  )
}

export default DocCard

