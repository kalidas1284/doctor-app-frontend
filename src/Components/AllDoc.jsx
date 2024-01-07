import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import DocCard from './DocCard';



function AllDoc() {

    const base_url='https://doctor-back-end.onrender.com/doctors'
//to hold array of doctor data
    const [AllDocData,SetAllDocData]=useState([])

    //API Fetching 
    const fetchData=async()=>{
        const result=await axios.get(base_url)
        console.log(result.data);
        SetAllDocData(result.data)
    }
    console.log(AllDocData);
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
<Row>
{
    AllDocData.map(item=>(
        <Col sm={12} md={6} lg={4} xl={3}>
 <DocCard doctors={item}/>
        </Col>
    ))
}
</Row>
    </div>
  )
}

export default AllDoc