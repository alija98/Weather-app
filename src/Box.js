import React,{useState,useRef} from 'react'

function Box() {
    const [day,setDay]=useState("day");
    return (
        <div className="box">
            <h1>{day}</h1>
        </div>
    )
}

export default Box
