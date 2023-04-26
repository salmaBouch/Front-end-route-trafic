import React from "react";
import backgroundImage from "../assets/voiture.gif";
import { Link } from "react-router-dom";

export default function Home() {
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
    textShadow: "2px 2px white",
    color: "#8BD0E0",
    fontFamily: "cursive"
  };
  const div = {
    marginTop: "300 px",
    padding: "10 px",
    paddingTop:'150px'
  };

  const h2 = {
    fontSize: 65,
    color: "#1891AC",
    marginTop: " 10px",
    fontFamily: "cursive"
  };
  const body ={
    width: 1520,
    height: 2000,
  }
  return (
    <div style={body}>
      <div className="container-fluid" style={styleBackground}>
        
        <div >
          <div style={div}>
            <h1 style={h2}>AutoZEN </h1>
          </div>
          <div>
            <h1 style={h1}>your road buddy</h1>
          </div>

          <div>

            <Link to="Sign">
              <button type="button" class="btn btn-secondary btn-lg">
                Live the experience
              </button>
            </Link>
          </div>
        </div>
        </div>

<br/>
<br/>

    <div className="position-relative" >
  <div className="position-absolute top-0 start-0 " style={{width:"600px" , marginLeft:"150px", padding:"10px"}}>

  <p style={{textAlign:"justify",fontFamily: "cursive"}}>
  Hey there, fellow drivers! Are you tired of sitting in traffic and wasting precious 
  time on the road? Say hello to AutoZEN, the platform that will revolutionize the way 
  you travel.Our advanced technology and real-time updates help you avoid traffic jams 
  and get to your destination faster.With AutoZEN, you can enjoy a more relaxed and efficient
   driving experience. So why wait? Join the AutoZEN community 
  today and start enjoying the journey as much as the destination!
  </p>

  </div>
  <div class="position-absolute top-0 start-50 translate-middle-x">
    
  </div>
</div>


        
      
    </div>
  );
}
