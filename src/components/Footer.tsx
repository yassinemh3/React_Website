
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css'
function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                <div className="logo1"></div>
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-white fw-bold mb-4'>Explore</h6>
              <p>
                <a href='#home' className='text-white'>
                  Acceuille
                </a>
              </p>
              <p>
                <a href='#service' className='text-white'>
                  Services
                </a>
              </p>
              <p>
                <a href='#about' className='text-white'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#contact' className='text-white'>
                  Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-white fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-white'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-white fw-bold mb-4'>Address</h6>
              <p className='text-white '>
                <MDBIcon icon="home" className="me-2" />
                 Monastir
              </p>
              <p className='text-white '>
                <MDBIcon icon="envelope" className="text-white me-2" />
                
                 cck@topnet.com
              </p>
              <p className='text-white '>
                <MDBIcon icon="phone" className="text-white me-2" /> 
                 +(216) 26226651
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-white text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright
        <a className='text-white fw-bold'>
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer