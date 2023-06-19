
import './App.css';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import RestaurentDetails from './Components/RestaurentDetails';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
function App() {
  return (
    <div className="App" >
   
    <BrowserRouter>
    {/* <div style={{position:'sticky',top:0,zIndex:3}}> */}
        <Header/>
    {/* </div> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restaurentDetails' element={<RestaurentDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
