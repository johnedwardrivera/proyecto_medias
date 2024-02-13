import './App.css'; 
import Home from "./components/Home/Home" 
import Navbar from './components/Navbar/Navbar' 
import Producto from './components/Producto/Producto';
import { Routes, Route, } from "react-router-dom"  
import 'bootstrap/dist/css/bootstrap.min.css' 



function App() {
  return ( 

    <div className="App"> 
     <Routes>
      <Route path='/' element={<>< Navbar/> <Home/></>}></Route> 
      <Route path='/home' element={<>< Navbar/> <Home/></> }></Route> 
      <Route path='/producto' element={<>< Navbar/> <Producto/></> }></Route>
     </Routes>
    </div>   
   
    
  );
}

export default App;
