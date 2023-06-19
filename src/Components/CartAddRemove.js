import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Plus,Dash } from 'react-bootstrap-icons'
import service from '../Services/baseUrl'
function CartAddRemove({food,id}) {
  const b=useSelector(state=>state.reducer)
    const update=useSelector(state=>state.updates)
    const [length, setLength] = useState(0)
    const [up,setUp]=useState(0)
    const dispatch=useDispatch()
   
    useEffect(()=>{
      // console.log("foodid",food.id);
      if(b.length==0) setLength(0)
      for(let i of b){
        if(i.foodId!=food.id) 
          setLength(0)
         
       
      
      }
 
     b.forEach(item=>(item.foodId==food.id)?setLength(item.number):null)
        
    },[b,update,length])
    const addtocart=()=>{
      service.post('/addCart',{id:1,restaurentId:id,foodId:food.id,food})
      dispatch({type:'update',payload:!update})
    }
    const removefromcart=()=>{
      dispatch({type:'update',payload:!update})
     
      service.post('/removecart',{id:1,restaurentId:id,foodId:food.id}).then(result=>result.data.number==0?(setLength(up),
      dispatch({type:'update',payload:!update})):null)
      
     
    }
  return (<>
  <Plus className="fs-3 text-success m-2 shadow-lg hov" onClick={()=>addtocart()}/>

      <div>{length==0?up:length}</div>
  <Dash className="fs-3 text-danger m-2 shadow-lg hov" onClick={()=>removefromcart()} />
  </>
  
  )
}

export default CartAddRemove