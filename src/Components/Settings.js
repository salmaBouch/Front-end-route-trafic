import React, {useState, useEffect}from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import backgroundImage from "../assets/voiture.gif";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import mail from '../assets/mail.png';
import endroit from '../assets/endroit.png'
import appel from '../assets/appel.png'
import logo1 from "../assets/logo1.png";

export default function Settings() {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("")


const handleFormSubmit = (event) => {
  event.preventDefault();

  // Récupérer l'ID de l'utilisateur à partir du local storage
  const userId = 1;

  // Récupérer les données utilisateur à partir du local storage
  let user = JSON.parse(localStorage.getItem("user")) || [];
  
  // Rechercher l'utilisateur par son ID
  const userIndex = user.findIndex((user) => user.id === userId);

  // Mettre à jour les données utilisateur avec les nouvelles valeurs
  if (userIndex !== -1) {
    user[userIndex].name = name;
    user[userIndex].email = email;
    user[userIndex].password = password;

    // Enregistrer les données utilisateur mises à jour dans le local storage
    localStorage.setItem("user", JSON.stringify(user));

    // Afficher une notification de succès
    alert("Les modifications ont été enregistrées avec succès !");
  }
};


  // Récupérer l'ID de l'utilisateur que vous souhaitez récupérer les données
let userId = 1;
console.log(userId);


// Mettre à jour les state avec les valeurs de userData
useEffect(() => {
  // Récupérer les données utilisateur à partir du localstorage
let user = JSON.parse(localStorage.getItem("user") || "[]");
console.log(user);
// Rechercher l'utilisateur par son ID
let userData = user.find((u) => u.id === userId);

  // Utiliser les données utilisateur récupérées du localstorage
console.log("Data retrieved from localStorage:", userData);
  if (userData) {
    setName(userData.name);
    setEmail(userData.email);
    setPassword(userData.password);
  }
}, []);
const handleDeleteUser = () => {
  const userId = 4;
  let user = JSON.parse(localStorage.getItem("user")) || [];
  const userIndex = user.findIndex((user) => user.id === userId);
  if (userIndex !== -1) {
    user.splice(userIndex, 1);
    localStorage.setItem("user", JSON.stringify(user));
    alert("L'utilisateur a été supprimé avec succès !");
  }
};

///////////////////////////////////////////////////////////////////////////////////////////////////
 return (
    <div>

<container >

<Row  id="home">
          <div>
            <Card className="bg-dark text-white" style={{marginTop:"40px"}}>
              <Card.Img
                src={backgroundImage}
                alt="Card image"
                style={{ width: "1500px", height: "650px" }}
              />
              <Card.ImgOverlay>
                
                  <div style={{marginTop:"200px"}}>
                    <h1 >
                      <b style={{fontSize:"75px",color: "#8BD0E0"}}>Modify your Compte</b>
                    </h1>
                 
                  
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>
        </Row>

<Row>
<Form style={{marginTop:"100px"}} onSubmit={handleFormSubmit}>
    <Form.Group className="mb-3" > 
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"   name="email"  value={email} onChange={(e) => setEmail(e.target.value)}  />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password"   value={password} onChange={(event) => setPassword(event.target.value)} />
      </Form.Group>
     
      <Button variant="primary" type="submit">
      Save Changes
      </Button>
      <Button variant="primary"  style={{marginLeft:"10px"}} onClick={handleDeleteUser}>
      Delete Compte
      </Button>
    </Form>


</Row>
<footer>
      <MDBFooter style={{backgroundColor:"#1891AC"}}className='text-center text-lg-start text-muted' >
      
       

        
      

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




</container>
















   

    </div>
  )
}
