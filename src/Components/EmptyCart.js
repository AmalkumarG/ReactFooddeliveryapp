import React from 'react'
import { Row,Col } from 'react-bootstrap'

function EmptyCart() {
  return (

    < >

<Row >
      <Col sm={12} md={12} lg={12} xl={12} style={{display:'flex',flexDirection:'column',justifyContent:'center'}} className='w-100'>
      <h2 className='text-secondary'>Cart Empty</h2>
      <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2' height={200} width={300} className='mt-4  '/>
      </Col>
    </Row>
    </> 
  )
}

export default EmptyCart