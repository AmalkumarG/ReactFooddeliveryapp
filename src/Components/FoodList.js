import React, { useEffect, useState } from "react";
import { Plus, Dash } from "react-bootstrap-icons";
import "./FoodList.css";
import service from "../Services/baseUrl";
import CartAddRemove from "./CartAddRemove";
import { useDispatch,useSelector } from 'react-redux';
function FoodList({ foodList,id }) {
  const update=useSelector(state=>state.updates)
  const carts=useSelector(state=>state.reducer)
  const [cartLength, setCartLength] = useState(0);
  const [cart, setCart] = useState([])
  const dispatch=useDispatch()
  useEffect(() => {
    console.log(cartLength);
    service.post('getCart',{
      id:1
    }).then(cart=>{console.log(cart.data.cart)
      
      setCart(cart.data.cart)
      dispatch({type:'cartitem',payload:cart.data.cart})
    
    })
  }, [cartLength,update,foodList]);
  
  return (
    <div
      style={{ height: window.innerHeight}}
      className="foodList "
    >
      {foodList.map((food) => (
        <div class="card mb-3 mt-3 pe-4">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={food.image}
                class="img-fluid rounded-start h-100"
                alt="..."
              />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">{food.name}</h5>
                <p class="card-text">{food.description}</p>
                <p class="card-text">
                  <small class="text-muted">{food.type}</small>
                </p>
              </div>
            </div>
            <div className="col-md-2 ">
              <div className="d-flex justify-content-center align-items-center h-100 ">
                <div className="d-flex justify-content-center align-items-center  border border-dark rounded shadow-lg">
                  {/* <Plus className="fs-3 text-success m-2 shadow-lg hov" onClick={()=>addtocart(food)}/> */}
                  <CartAddRemove cart={cart} food={food} id={id} />
                  {/* <Dash className="fs-3 text-danger m-2 shadow-lg hov" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodList;
