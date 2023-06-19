import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {useNavigate} from "react-router-dom"
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
  Search,
  Percent,
  InfoCircle,
  PersonFill,
  BagCheckFill,
} from "react-bootstrap-icons";
import { Col, Image, Row } from "react-bootstrap";
import SignInReg from "./SignInReg";

function Header() {
const navigate=useNavigate()
const [sign, setSign] = useState(false)
const show=()=>{
  setSign(!sign)
}
  return (
   
        // <>
    // <Navbar bg="success" expand="lg">
    //          <Nav.Link  className="me-4">
    //          <Button onClick={()=>navigate('cart',{state:{widthc:true}})}>clickk</Button>
    //     </Nav.Link>

    // </Navbar>
     
    // </>
    <div >

    
    <Navbar bg="success" key={false}   expand="lg" style={{position:'sticky',top:0}}>
    
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={require("../Assets/foodlg.png")} height={40} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >

            <Form className="d-flex h-75 p-2 me-4">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </Form>
            <Nav.Link href="#action1" className="me-4 ">
            <Button variant="outline-light" className="fs-5">offer</Button>
            </Nav.Link>
            <Nav.Link href="#action2" className="me-4">
            <Button variant="outline-light" className="fs-5">help</Button>
            </Nav.Link>
            <Nav.Link href="#action1" className="me-4 ">
            <Button variant="outline-light" className="fs-5" onClick={()=>setSign(!sign)}>Sign In</Button>
            </Nav.Link>
            <Nav.Link  className="me-4">
            <Button variant="outline-light" className="fs-5" onClick={()=>navigate('cart')}>Cart</Button>
            </Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    {
      sign?<SignInReg show={show}/>:''
    }
    </div>
  );
}

export default Header;
