import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch,useSelector } from 'react-redux';
import service from "../Services/baseUrl";
import Restaurent from "./Restaurent";
import OfferSlider from "./OfferSlider";
import Header from "./Header";
function Restaurents() {
  const dispatch=useDispatch()
  const update=useSelector(state=>state.updates)
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
 
    service.get("/allProducts").then((result) => {
      console.log(result);
      setAllProducts(result.data.restaurents);
    });
    // service.post('getCart',{
    //   id:1
    // }).then(cart=>{console.log(cart.data.cart)
      
      
    //   dispatch({type:'cartitem',payload:cart.data.cart})
    
    // })
  }, [update]);
  console.log(allProducts, "ddddddddd");
  return (
    <div >
  
     
      <Row className="me-0 ps-2"  >
     
      <OfferSlider/>
      <h2 className="p-4 fs-1 text-success">{allProducts.length} Restaurents</h2>
        {allProducts.map((rest) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Restaurent restaurent={rest}/>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Restaurents;
