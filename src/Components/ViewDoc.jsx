import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Row,Col} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import './ViewDoc.css'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardLink,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
import DocDay from './DocDay';
import DocReview from './DocReview';


function ViewDoc() {

    const [ViewDoc,SetViewDoc]=useState({})

    //useParams used to get path parameter from the url
//    const paraId= useParams()
//    console.log(paraId.id);//object ->1,2,3...

const {id}= useParams()
console.log(id);//object ->1,2,3...



   //API Call to get particular doctors card using the path parameter
   const base_url='https://doctor-back-end.onrender.com/doctors'
   const fetchDoc=async()=>{
    // http://localhost:3001/doctors/3
    const result=await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    SetViewDoc(result.data)
   }
   console.log(ViewDoc);

   useEffect(()=>{
fetchDoc()
   },[])

   return (
    
    <div className='image '>
      <div className='outerDiv'>
        <div className='innerDiv col-4 rounded p-4'>
        <h2 className='fw-bold mb-4 text-light'>
    
    {ViewDoc.hospital}
  </h2>
  <h4 className='text-light'>Name: {ViewDoc.name}</h4>
  <h4 className='text-light'>Specialized In: {ViewDoc.specialty}</h4>
  <h5 className='text-light'>Phone: {ViewDoc.phone}</h5>
        </div>

        <div className='day col-4 p-4 mt-4 rounded'>
        <p className='text-light'>Address: {ViewDoc.address}</p>
        <p className='text-light'>Email : {ViewDoc.email}</p>
        <div>
    <p  className='text-light'>Consultation Time and Date:</p>
        <p className='text-light'>
        <p className='text-light'> {ViewDoc.available_hours}</p>
          {
            ViewDoc.available_days?.map(item=>(
              <p style={{display:'inline'}}> | {item} | </p>
            ))
          }
        </p>
        </div>
        <p className='text-light'><DocReview RR={ViewDoc.reviews}/></p>
        
        </div>

        

        
      </div>
    </div>
  )
}

export default ViewDoc




