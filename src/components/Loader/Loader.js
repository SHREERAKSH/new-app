import React,{useState} from 'react';
import shree from  '../../assets/shree.jpeg' ;
import './Loader.css'
import Info from '../Info';
import Footer from '../Footer/Footer';
const Loader=()=>{

    const[file,setFile]=useState(null);

    const handleFileDownload=()=>{
if(!file){
    alert('no file to download');
    return;
}

const url=URL.createObjectURL(file);
const link=document.createElement('a');
link.href=url;
link.setAttribute('download',file.name);
document.body.appendChild(link);
link.click();

    }
 
    return(
        <>
        <div className='row'>
<div className='col' style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
<div className='text-center anime' style={{fontSize:'28px',color:'white'}}>I AM SHREERAKSHA,<span style={{color:'red'}}>FRONTEND DEVLOPER</span></div>

    <div style={{display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', marginTop:'50px'}}>   <img  style={{borderRadius:'50%',height:'430px',alignItems:'center',textAlign:'center',}}  src={shree} alt='img'/> </div> 
<div>      <span style={{color:'white',marginLeft:'30px'}}>Hello,Please find my Resume and other details.
Below are attached profile,there is a option for resume upload and download,please see through it.</span></div>
</div>

<div className='col' style={{border:'1px solid white'}}>
<h1 style={{color:'white',textAlign:'center'}}>PROFILE</h1>
<Info/>
<div>
    <h3 style={{color:'red'}}>Resume</h3>
    <input type="file" onChange={(e)=>{setFile(e.target.files[0])}}/>
    <button onClick={handleFileDownload}>Download Resume</button>

</div>
<div style={{margin:'20px',color:'white'}}>
<h3 >HOBBIES</h3>
<ul>
    <li>
        Reading newpapaer
    </li>
    <li>
       singing
    </li>
    <li>
        listening songs
    </li>
</ul>
</div>
</div>



        </div>
        <Footer/>
        </>
    )
}
export default Loader