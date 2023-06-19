import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import { StarFill } from "react-bootstrap-icons"; 
import { useDispatch,useSelector } from 'react-redux';
import './RestaurentDetails.css'
import RestFoodCategory from './RestFoodCategory';
import FoodList from './FoodList';
import Cart from './Cart';
import service from '../Services/baseUrl';
import Header from './Header';
function RestaurentDetails() {
    const dispatch=useDispatch()
    const update=useSelector(state=>state.updates)
 
    const [restaurent,setRestaurent]=useState( useLocation().state.restaurent)
    const [res,setRes]=useState(restaurent.food)
    const [catt,setCatt]=useState(restaurent.food)
    const [cart, setCart] = useState([])
    
    const rating=[1,2,3,4,5]
    const cat=(id,category)=>{
        if(category=="all") {setCatt(restaurent.food)
             console.log("caata",catt);
            }
            else setCatt(res.filter(item=>{return item.category==category}))

        // service.post('foodcategory',{
        //     id,category
        // }).then(food=>{
           
        //     setRes(food.data.fud)
        // })
    }
    const [shrink, setShrink] = useState(false)
    useEffect(()=>{
     

        window.addEventListener('scroll',()=>{
            if(window.scrollY>5) setShrink(true)
            else setShrink(false)
        })
    },[res,update])
    
  return (
    <div >

        <Row
       style={{position:'sticky',top:0,zIndex:1}}
         >
            <Col>
                {
                    <Row 
                     className={`${shrink && 'bg-dark ps-5 about' } ${!shrink && 'bg-dark p-5 about ' }`}
                    // className={!shrink?'bg-dark pt-5 pb-5':'bg-dark pt-1 pb-1'}
                     >
                        <Col sm={12} md={4} lg={4} xl={4} className='  '>
                            <img src={restaurent.image}  style={{width:250}}/>
                        </Col>
                        <Col sm={12} md={8} lg={8} xl={8} className=' text-light  '>
                            <h2 className='fs-2'>{restaurent.name}</h2>
                            <p style={{color:'gray'}}>{restaurent.location}</p>
                             <h6>Rating</h6>
                             <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                             {
                                rating.map(rating=>(

                                    <StarFill  className={`rating ${rating<restaurent.rating && 'ifrating'}`}/>
                                ))
                            }
                            <h5 className='m-2 ifrating' >4.4</h5>
                             </div>

                                
                        </Col>
                       
                    </Row>
                }
            </Col>
        </Row>
     
        {/* <Row >
            <Col.Collapse sm={4} md={3} lg={3} xl={3} >
            <RestFoodCategory fn={cat} id={restaurent.id} />
                
            </Col.Collapse>
            <Col sm={4} md={6} lg={6} xl={6} >
            <FoodList foodList={catt} id={restaurent.id} />
            </Col>
            <Col sm={4} md={3} lg={3} xl={3} >
            <Cart/>
            </Col>
        </Row> */}
        <Row>
            <Col sm={4} md={3} lg={3} xl={3}>
            <RestFoodCategory fn={cat} id={restaurent.id} />
            </Col>
            <Col sm={4} md={6} lg={6} xl={6} >
            <FoodList foodList={catt} id={restaurent.id} />
            </Col>
            <Col>
            <Cart/>
            </Col>
        </Row>

    </div>
  )
}

export default RestaurentDetails