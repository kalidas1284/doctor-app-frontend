import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
  import './Footer.css'

function Footer() {
  return (
    <div>
    
    <MDBFooter bgColor='' className='Footer text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className='text-light'>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-light'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-light'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-light'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-light'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-light'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-light'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase text-light fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3 text-light" />
                V Cure Medics
              </h6>
              <p className='text-light'>
              V Cure Medics is a registered start up company empanelled with 2000 plus doctors and 5 lacs patients lives touched.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase text-light fw-bold mb-4'>V Cure</h6>
              <p>
                <a href='#!' className=' text-light'>
                  About 
                </a>
              </p>
              <p>
                <a href='#!' className=' text-light'>
                Guiding Principles
                </a>
              </p>
              <p>
                <a href='#!' className=' text-light'>
                Careers
                </a>
              </p>
              <p>
                <a href='#!' className=' text-light'>
                Blog
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>For patients</h6>
              <p>
                <a href='#!' className='text-light'>
                Ask free health questions
                </a>
              </p>
              <p>
                <a href='#!' className=' text-light'>
                Search for doctors
                </a>
              </p>
              <p>
                <a href='#!' className=' text-light'>
                Search for clinics
                </a>
              </p>
              <p>
                <a href='#!' className=' text-light'>
                  Read health articles
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>Contact</h6>
              <p className='text-light'>
                <MDBIcon icon="home" className="me-2 text-light" />
                New York, NY 10012, US
              </p>
              <p className='text-light'>
                <MDBIcon icon="envelope" className="me-3 text-light" />
                Vcuremedics@gmail.com
              </p>
              <p className='text-light'>
                <MDBIcon icon="phone" className="me-3 text-light" /> + 01 234 567 88
              </p>
              <p className='text-light'>
                <MDBIcon icon="print" className="me-3 text-light" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-light' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold text-light' href='/'>
          Vcuremedics.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer