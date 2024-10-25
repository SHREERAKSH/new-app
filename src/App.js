import { useState,useRef } from 'react';
import { Provider } from 'react-redux';
import store from './reduxContainer/Store';
import BookContainer from './reduxContainer/BookContainer';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Info from './components/Info';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer/Footer';
import AddTodo from './components/AddTodo';
import Accordion from './components/Accordion';
export default function Counter() {
  
  const items=[{
    id:1,
    title:'Section1',
    content:'Content for section 1',

    },
    {
    id:2,
    title:'Section2',
    content:'Content for section 2',
},{
id:3,
    title:'Section3',
    content:'Content for section 3'
   }]
  return (
    < div style={{backgroundColor:'black'}}>
  //   <Provider store={store}>
  
  //  <Router>
  //  <Header/>
   
  
   
  
  //  <Routes>
  //   <Route path='/' element={<Home/>}/>
  //    <Route path='/about' element={<About />} />
  //    <Route path='/contact' element={<Contact />} />
  //    <Route path='/info' element={<Info />} />
  //  </Routes>
  //  </Router>

   
  //  </Provider>

  //  <div style={{color:'white'}}>  <Accordion items={items}/></div>
 

    </div >
  )
 
}