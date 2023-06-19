import React, { useState } from 'react'
import { Row ,Col} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
function Register() {
  const [uname, setUname] = useState() 
  const [email, setEmail] = useState()
  const [phoneNum, setPhoneNum] = useState()
  const [password, setPassword] = useState()
  
  return (
    <Row>
    <Col className='mt-4 p-4 text-center'>
    
    
    <h2 className='fw-bold ' >Register</h2>
   
        <InputGroup className="mb-3 mt-3">
        <Form.Control
          placeholder="Username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onKeyUp={(e)=>setUname(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3 mt-3">
        <Form.Control
          placeholder="Email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onKeyUp={(e)=>setEmail(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3 mt-3">
        <Form.Control
          placeholder="Phone Number"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onKeyUp={(e)=>setPhoneNum(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Password"
          type='password'
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onKeyUp={(e)=>setPassword(e.target.value)}
        />
      </InputGroup>
      <Button variant="outline-light" onClick={()=>console.log(uname,email,phoneNum,password)}>Register</Button>{' '}
    </Col>
</Row>
  )
}

export default Register