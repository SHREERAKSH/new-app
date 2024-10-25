import { useDispatch, useSelector } from "react-redux"

import purchase_book from './BookAction'
export default function BookContainer(){
const noOfBook=useSelector(state=>state.NumberOfBooks)
const dispatch=useDispatch()
    return(
        <>

        <p>book container
        </p>
        <h2>no of books-{noOfBook}</h2>
        <button onClick={()=>(dispatch(purchase_book()))}>buy book</button>
        </>
    )
}