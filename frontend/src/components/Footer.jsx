import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <MDBFooter bgColor="black" className=" text-center text-lg-start text-muted">
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container">
      <div className="me-5 d-none d-lg-block">
        <span style={{color:"white",fontSize:"20px"}}>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href="" className="me-4 text-reset">
          <MDBIcon color="white" fab icon="facebook-f" style={{fontSize:"30px"}}/>
        </a>
        <a href="" className="me-4 text-reset">
          <MDBIcon color="white" fab icon="twitter"style={{fontSize:"30px"}} />
        </a>
        <a href="" className="me-4 text-reset">
          <MDBIcon color="white" fab icon="google"style={{fontSize:"30px"}} />
        </a>
        <a href="" className="me-4 text-reset">
          <MDBIcon color="white" fab icon="instagram"style={{fontSize:"30px"}} />
        </a>
        <a href="" className="me-4 text-reset">
          <MDBIcon color="white" fab icon="linkedin" style={{fontSize:"30px"}}/>
        </a>
        <a href="" className="me-4 text-reset">
          <MDBIcon color="white" fab icon="github" style={{fontSize:"30px"}} />
        </a>
      </div>
    </section>

    <section className="">
      <MDBContainer className="text-center text-md-start mt-5">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4" style={{fontSize:"26px",color:"white"}} >
              <MDBIcon color="white" icon="gem" className="me-3" />Sri lankan Railway
            </h6>
            <p>To trave is to take a journey into yourself</p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4"  style={{fontSize:"18px",color:"white"}}>
            <h6 className="text-uppercase fw-bold mb-4">Links</h6>
            <p>
              <a as={Link} to="/aboutUs" className="text-reset">
                Train
              </a>
            </p>
            <p>
              {/* <a href="#!" className="text-reset">
                About Us
              </a> */}
              <Link to="/aboutUs" className="text-reset">
                About Us
              </Link>
            </p>
            <p>
              <Link to="/aircraftDetails" className="text-reset">
                About Us
              </Link>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4" style={{fontSize:"18px",color:"white"}}>
            <h6 className="text-uppercase fw-bold mb-4"> More</h6>
            <p>
              <a href="#!" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Settings
              </a>
            </p>

            <p>
              <a href="#!" className="text-reset">
                Help
              </a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4" style={{fontSize:"18px",color:"white"}}>
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <MDBIcon color="secondary" icon="home" className="me-2" style={{fontSize:"30px"}}  />
              Srilanka Jaffna
            </p>
            <p>
              <MDBIcon color="secondary" icon="envelope" className="me-3" style={{fontSize:"30px"}} />
              SrilankanRailway@gmail.com
            </p>
            <p>
              <MDBIcon color="secondary" icon="phone" className="me-3" style={{fontSize:"30px"}}  /> 0769007974
            </p>
            <p>
              <MDBIcon color="secondary" icon="print" className="me-3" style={{fontSize:"30px"}}  /> 0769007974
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
      © 2024 Copyright:
      <a className="text-reset fw-bold" style={{fontSize:"30px"}}  href="https://mdbootstrap.com/">
        SriLankanRailway.com
      </a>
    </div>
  </MDBFooter>
  )
}

export default footer