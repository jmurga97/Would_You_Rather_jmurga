import React from 'react'
import { BsFillXOctagonFill } from "react-icons/bs";

export default function Page404() {
    return (
        <div className='centrar div-404 orange-text container'>
            <BsFillXOctagonFill className='icon-404'/>
            <h1 className='title-404'>ERROR 404</h1>
            <p>Your question couldn't be found</p>
        </div>
    )
}
