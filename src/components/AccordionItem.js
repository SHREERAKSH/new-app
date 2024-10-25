import React from 'react';
import './Accordion.css'
export default function AccordionItem({title,content,isOpen,onClick}) {
    return(
        <>
        <div className='accodion-header' onClick={onClick}>
<h2>{title}</h2>
<span >{isOpen?'-':'+'}</span>
{isOpen&& <div>{content}</div>}
        </div>
        </>
    )
}