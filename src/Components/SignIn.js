import React, { useState } from 'react'
import { Row ,Col} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
function SignIn() {
  const [uname, setUname] = useState() 
  const [password, setPassword] = useState()
  return (
<Row>
    <Col className='mt-4 p-4 text-center'>
    
    
    <h2 className='fw-bold ' >Sign In</h2>
   
        <InputGroup className="mb-3 mt-3">
        <Form.Control
          placeholder="Email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onKeyUp={(e)=>setUname(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Password"
          type='password'
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onKeyUp={(e)=>setUname(e.target.value)}
        />
      </InputGroup>
      <Button variant="outline-light">Sign In</Button>{' '}
    </Col>
</Row>
  )
}

export default SignIn