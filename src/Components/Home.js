import React ,{useState}from "react";
import backgroundImage from "../assets/voiture.gif";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import voiture3 from "../assets/voiture3.jpg"
import voiture1 from "../assets/voiture1.jpg"
import Form from 'react-bootstrap/Form';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import mail from '../assets/mail.png';
import endroit from '../assets/endroit.png'
import appel from '../assets/appel.png'
export default function Home() {
  // ///////////////////////////////Styles///////////////////////////////
  const styleBackground = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: 1520,
    height: 750,
  };
  const h1 = {
    fontSize: 75,
    // textShadow: "2px 2px white",
    color: "#8BD0E0",
  };
  const div = {
    marginTop: "300 px",
    padding: "10 px",
    paddingTop: "150px",
  };

  const h2 = {
    fontSize: 65,
    color: "#1891AC",
    marginTop: " 10px",
  };
  const body = {
    width: 1520,
    height: 2000,
  };

  //////////////////////////////////NOTICE-LOCALSTORAGE////////////////////////////////////////////////
  
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [recommendations, setRecommendations] = React.useState("");
  const [city, setCity] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [form, setForm] = React.useState("");

 
  function handleSubmit(event) {
    event.preventDefault();

    let data = {
      email: email,
      password: password,
      address: address,
      recommendations:recommendations,
      city: city,
      rating : rating
    };
    setForm(data);
    let formId = JSON.parse(localStorage.getItem("formId") || "1");
    data.id = formId;
    let form= JSON.parse(localStorage.getItem("form") || "[]");
    form.push(data);
    console.log(form);
    localStorage.setItem("form", JSON.stringify(form));
    localStorage.setItem("formId", JSON.stringify(formId + 1));
    // Vérifier si les données ont été stockées correctement
    console.log("Data stored in localStorage:", data);
   
  }
  
   // Fonction pour mettre à jour le champ de formulaire Email
   const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Fonction pour mettre à jour le champ de formulaire Password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleRecommendationsChange = (event) => {
    setRecommendations(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };
  
  
  return (
    <div>
      <Container fluid>
        <Row>
          <Navbar bg="light" variant="light" fixed="top" className="fixed-top">
            <Nav className="me-auto" >
              <img
                src={logo}
                width="100"
                height="50"
                className="d-inline-block align-top"
                style={{ marginLeft: "50px", marginRight: "600px" }}
              />

              <Nav.Link href="#home" style={{ paddingInline: "50px" }}>
                {" "}
                <b>Home</b>
              </Nav.Link>
              <Nav.Link href="#about" style={{ paddingInline: "50px" }}>
                <b>About Us</b>
              </Nav.Link>
              <Nav.Link href="#service" style={{ paddingInline: "50px" }}>
                <b>Services</b>
              </Nav.Link>
              <Nav.Link href="#notice" style={{ paddingInline: "50px" }}>
                <b>Notice</b>
              </Nav.Link>
            </Nav>
          </Navbar>
        </Row>
        {/* ********************************************************************************* */}
        <Row  id="home">
          <div>
            <Card className="bg-dark text-white" style={{marginTop:"87px"}}>
              <Card.Img
                src={backgroundImage}
                alt="Card image"
                style={{ width: "1500px", height: "665px" }}
              />
              <Card.ImgOverlay>
                <div>
                  <div style={div}>
                    <h1 style={h2}>
                      <b>AutoZEN </b>
                    </h1>
                  </div>
                  <div>
                    <h1 style={h1}>your road buddy</h1>
                  </div>

                  <div>
                    <Link to="Sign">
                      <button
                        type="button"
                        class="btn btn-secondary btn-lg"
                        styel={{ marginTop: "50px" }}
                      >
                        Live the experience
                      </button>
                    </Link>
                  </div>
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>
        </Row>
        {/* ************************************************************************************ */}

        <Row style={{ padding: "40px" }} id='about'>
          <Col sm style={{ textAlign: "justify" }}>
            <h1 style={{ color: "#8BD0E0" }}>
              <b>About Us</b>
            </h1>
            <p style={{ fontSize: "20px" }}>
              Hey there, fellow drivers! Are you tired of sitting in traffic and
              wasting precious time on the road? Say hello to AutoZEN, the
              platform that will revolutionize the way you travel.Our advanced
              technology and real-time updates help you avoid traffic jams and
              get to your destination faster.With AutoZEN, you can enjoy a more
              relaxed and efficient driving experience. So why wait? Join the
              AutoZEN community today and start enjoying the journey as much as
              the destination!
            </p>
          </Col>
          <Col sm>
            <img src={logo} width="450" height="350" />
          </Col>
        </Row>

        {/* **************************************************************************** */}

        <Row id='service'>
          
          <h1
            style={{
              textAlign: "justify",
              marginLeft: "25px",
              color: "#8BD0E0",
              padding: "20px",
            }}
          >
            <b>Our services</b>
          </h1>

          <Col sm > <div style={{marginLeft:"250px"}}>
            <Card style={{ width: "25rem", height: "30rem" }}>
              <Card.Img variant="top" src={voiture3} style={{height:"250px"}}/>
              <Card.Body>
                <Card.Title style={{marginTop:"35px" ,fontSize:"18px"}} ><b>Real-Time Traffic Predictions</b></Card.Title>
                
              </Card.Body>
              <ListGroup className="list-group-flush" style={{marginTop:"25px"}}>
                <ListGroup.Item> Our platform takes into account your preferred travel time, 
                  route preferences, and other factors to suggest a personalized route that is 
                  tailored to your needs.
                  </ListGroup.Item>
               
              </ListGroup>
              
            </Card>
            </div>
          </Col>

         
          <Col sm > <div style={{marginRight:"250px"}}>
            <Card style={{ width: "25rem", height: "30rem" }}>
              <Card.Img variant="top" src={voiture1} style={{height:"250px"}} />
              <Card.Body>
                <Card.Title style={{marginTop:"35px",fontSize:"15px"}} ><b >Personalized Route Recommendations</b></Card.Title>
                
              </Card.Body>
              <ListGroup className="list-group-flush" style={{marginTop:"25px"}}>
                <ListGroup.Item>With our cutting-edge technology, we can predict traffic conditions at any time of day and suggest the fastest route to your destination.</ListGroup.Item>
               
              </ListGroup>
              
            </Card>
            </div>
          </Col>
        </Row>
        
        <Row style={{paddingTop:"50px"}} id='notice'>
        <h1
            style={{
              textAlign: "justify",
              marginLeft: "25px",
              color: "#8BD0E0",
              padding: "20px",
            }}
          >
            <b>Your notice</b>
          </h1>
          <div style={{width:"1000px" , height:"500px",marginLeft:"250px"}}>
        <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={email}
            onChange={handleEmailChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  name="password" value={password}
            onChange={handlePasswordChange}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" value={address} name="address"
          onChange={handleAddressChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Recommendations</Form.Label>
        <Form.Control as="textarea" rows={3} name="recommendations"
          value={recommendations}
          onChange={handleRecommendationsChange} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control  name="city"
            value={city}
            onChange={handleCityChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Rating</Form.Label>
          <Form.Select  name="rating"
            value={rating}
            onChange={handleRatingChange}>
            <option>Excellent</option>
            <option>Good</option>
            <option>Fair</option>
            <option>Poor</option>
          </Form.Select>
        </Form.Group>

        
      </Row>

      

      <button
                        type="submit"
                        class="btn btn-secondary btn-lg"
                        styel={{ marginTop: "50px" }}
                      >
                        Send
                      </button>
    </Form>
    </div>
        </Row>
        
      </Container>
      <footer>
      <MDBFooter style={{backgroundColor:"#1891AC"}} className='text-center text-lg-start text-muted'>
      
       

        
      

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5' style={{paddingTop:"10px"}}>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              
              <img src={logo1}/>
            </MDBCol>

           

            

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:"white"}}>Contact</h6>
              <p style={{color:"white"}}>
               
                <img src={endroit} style={{width:"31px",height:"31px"}}/>
                enet'COM,technopole Sfax,Tunisia.
              </p>
              <p style={{color:"white"}}>
              <img src={mail} style={{width:"30px",height:"31px"}}/>
              yassinesalmapfa@gmail.com
              </p>
              <p style={{color:"white"}}>
              <img src={appel} style={{width:"30px",height:"30px"}}/> + 216 21189862
              </p>
              <p style={{color:"white"}}>
              <img src={appel} style={{width:"30px",height:"30px"}}/> + 216 53992378 
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' ,color:"white"}}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href=''>
        yassinesalmapfa@gmail.com
        </a>
      </div>
    </MDBFooter>
      </footer>
    </div>
  );
}
