import React from "react";
import { Row, Col } from "react-bootstrap";
import { Plus, Dash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from 'react-redux'
import service from "../Services/baseUrl";
function CartItem() {
    const update=useSelector(state=>state.updates)
    const cart=useSelector(state=>state.reducer)
    const dispatch=useDispatch()
  
    const addtocart=(restaurentId,foodId,food)=>{
      
        service.post('/addCart',{id:1,restaurentId,foodId,food})
        dispatch({type:'update',payload:!update})
      }
      const removefromcart=(restaurentId,foodId)=>{
      
        service.post('/removecart',{id:1,restaurentId,foodId})
        dispatch({type:'update',payload:!update})
      }
  return (
    <div
      className="p-3"
      style={{ height: window.innerHeight, overflow: "scroll" ,width:'100%'}}
    >
      <h3>Cart</h3>
      {cart.map((item) => (
        <Row>
          <Col>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={item.food.image}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h6 class="card-title">{item.food.name}</h6>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      className="border w-50"
                    >
                      <Plus className="fs-4 text-success shadow-lg hov" onClick={()=>addtocart(item.restaurentId,item.foodId,item)} />
                      <p class="card-text m-1">
                        <small class="text-muted fs-6">{item.number}</small>
                      </p>
                      <Dash className="fs-4 text-danger shadow-lg hov" onClick={()=>removefromcart(item.restaurentId,item.foodId)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default CartItem;
