import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header=()=>{
const[change,setChange]=useState("")

    return(
        <>
        <div className=''>
<div className='row main'   style={{borderRadius:'4px',backgroundColor:'gold',marginTop:'10px',}} >
   
     

    <div className='col-6' style={{fontSize:'30px'}}>
<p>WELCOME!</p>
    </div>
    <div className='col-6' >
        <div className='row' style={{color:'purple',fontSize:'20px'}}>
            <div className='col'>
             <Link to="/contact" style={{textDecoration:'none',color:'white'}}>Contact</Link>

            </div>
            <div className='col'>
          <Link to="/about" style={{textDecoration:'none',color:'white'}}>About</Link> 
            </div>
            <div className='col'>
          <Link to="/info" style={{textDecoration:'none',color:'white'}}>Info</Link>
            </div>
        </div>
    </div>
   
</div>

     </div>
        </>
    )
}
export default Header