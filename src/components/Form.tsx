import { useState } from "react";
import emailjs from '@emailjs/browser';
import "./Form.css";
import { HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    phone:"",
    company_name: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });
  const contactConfig = {
    YOUR_EMAIL: "mahfoudhyassine3@gmail.com",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_5no10da",
    YOUR_TEMPLATE_ID: "template_s9ohiqs",
    Public_Key: "ZtpMNxNXJDi0t1ZRR",
};
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setFormdata({ loading: true, email: "",
    name: "",
    message: "",
    show: false,
    alertmessage: "",
    variant: "", 
    phone:"",
    company_name: "",});

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
      phone: formData.phone,
      company_name: formData.company_name,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.Public_Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! ,Thankyou for your messege",
            variant: "success",
            show: true,
            email: "",
            name: "",
            message: "", 
            phone:"",
            company_name: "",
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Faild to send!,${error.text}`,
            variant: "danger",
            show: true,
            email: "",
            name: "",
            message: "",
            loading: false,
            phone:"",
            company_name: "",
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (<div className="form">
    <HelmetProvider>
      <Container>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              //show={formData.show}
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.show ? "d-block" : "d-none"
              }`}
              onClose={() => setFormdata({ 
                email: "",
                name: "",
                message: "",
                loading: false,
                alertmessage: "",
                variant: "",
                show: false ,
                phone:"",
                company_name: "",})}

              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="9" md="2" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form">
              <Row>
                
                <Col lg="6" className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <label htmlFor="Email">Email</label>
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="phone"
                    value={formData.phone || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <label htmlFor="company_name">Company Name</label>
                  <input
                    className="form-control"
                    id="company_name"
                    name="company_name"
                    placeholder="company_name"
                    value={formData.company_name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="BtnSubmit" >
                    {formData.loading ? "Sending..." : "Envoyez"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider></div>
  );
};
export default ContactUs