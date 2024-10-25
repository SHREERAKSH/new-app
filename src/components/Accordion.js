import React, { useState } from 'react';
import './Accordion.css'
import AccordionItem from './AccordionItem';
export default function Accordion({items}) {
    const [openIndex,setOpenIndex]=useState(null);

    const handleClick=(index)=>{
   setOpenIndex(openIndex===index?null:index)
    }
    return(
        <>
        {items.map((item,index)=>{
           return (<AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex===index}
            onClick={()=>handleClick(index)}
            />)
        })}
        </>
    )
}