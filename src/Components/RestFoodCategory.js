import React, { useEffect ,useState} from 'react'
import service from '../Services/baseUrl'
import { useDispatch, useSelector } from 'react-redux'
import { Row,Col } from 'react-bootstrap'
import './abc.css'
function RestFoodCategory({id,fn}) {
    const [category, setCategory] = useState([])
    const update=useSelector(state=>state.updates)
    const dispatch=useDispatch()
    useEffect(()=>{
        service.post('getRestCat',{
           id
        }).then(category=>{
            // console.log(category.data.category);
            setCategory(category.data.category)})
            dispatch({type:'update',payload:!update})
            
    },[])
  return (
    <Row style={{height:window.innerHeight,overflow:'scroll'}} className='' >
        <Col style={{display:'flex',flexDirection:'column'}} className='p-4 '>
       <h3>Category</h3>
       <button className='btn btn-success  m-2 '   onClick={()=>fn(id,'all')}>ALL CATEGORY</button>
            {
                category.map(cat=>(
                    <button className='btn btn-success  m-2' style={{fontSize:15}} onClick={()=>fn(id,cat)}>{cat.toUpperCase()}</button>
                ))

                
            }
          

            
        </Col>
    </Row>
  )
}

export default RestFoodCategory