import React, { useState } from 'react'
import Register from './Register'
import { Row,Col } from 'react-bootstrap';
import SignIn from './SignIn';
import { XSquare } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

function SignInReg({show}) {
    const [select,setSelect]=useState(false)
  return (

    <div style={{position:'fixed',top:0,right:0,zIndex:3}}>
    <Row ><Col sm={12} md={8} lg={6} xl={4} className='bg-success' style={{zIndex:5,position:'relative',top:0,right:0,height:window.innerHeight,width:window.innerWidth/4}}>
    <XSquare className=' fs-3 position-absolute text-light top-0 mt-2 end-0 me-3 ' style={{cursor:'grab'}} onClick={()=>show()} />
    <Row>
        <Col className='d-flex mt-5 '>
        {/* <Button variant="outline-light m-3">Sign In</Button>{' '} */}
        <Button variant="outline-light m-3" onClick={()=>setSelect(!select)}>{select?'SignIn':'Register'}</Button>{' '}
        </Col>
    </Row>
    {
        select?<Register/>:<SignIn/>
    }
    
        
    </Col></Row>

    </div>
  )
}

export default SignInReg