import React ,{useEffect}from 'react'
import EmptyCart from './EmptyCart'
import { useDispatch,useSelector } from 'react-redux';
import CartItem from './CartItem';
import service from '../Services/baseUrl';

import './abc.css'
function Cart() {
  const cart=useSelector(state=>state.reducer)
  

  const dispatch=useDispatch()
  const update=useSelector(state=>state.updates)

  useEffect(() => {
 

    service.post('getCart',{
      id:1
    }).then(cart=>{console.log(cart.data.cart)
      
      dispatch({type:'cartitem',payload:cart.data.cart})
    
    })
  }, [update]);
  return (
    <div 
    // className={`notWidthc ${widthc && 'widthc'}`}
    // style={{width:'30%'}}
    >
    {
      cart.length==0?<EmptyCart/>:<CartItem cart={cart}/>
    }
      
      
 
    </div>
  )
}

export default Cart