import React from "react";
import Card from "react-bootstrap/Card";
import './Restaurent.css'
import { StarFill } from "react-bootstrap-icons"; 
import { Row,Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SignInReg from "./SignInReg";
function Restaurent({restaurent}) {
    console.log(restaurent,"cccccccccc");
    const rating=[1,2,3,4,5]
    const navigate=useNavigate()
  return (
    
    <div   onClick={()=>navigate('/restaurentDetails',{state:{restaurent}})} style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 10,
      }}>

   
      <Card style={{ width: "18rem",border:'none' }} className="mb-2 card">
      <Row>
      <Col sm={12}>
      <Card.Img variant="top" src={restaurent.image} />
      </Col>
      </Row>

       
        <Card.Body>
          <Card.Title>{restaurent.name}</Card.Title>
          <div style={{display:'flex',flexDirection:'row'}}>

         
          {
            rating.map(rate=>(
                <StarFill  className={`rating ${rate<restaurent.rating && 'text-success'}`}/>
               
            ))
          }
          </div>
          {/* <Card.Text>{restaurant.neighborhood}</Card.Text> */}
        </Card.Body>
      </Card>
      </div>
   
  );
}

export default Restaurent;
