import React from 'react'
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Mybook=()=> {
  const [itemdata, setitem]= useState([]);

  useEffect(()=>{
    axios({
          method:"GET",
          url:"http://localhost:3001/mybook/"
    }).then((data)=>{
      //console.log(data)
      setitem(data.data.item.reverse())
      console.log(data.data);
    }).catch((err)=>{
      console.log(err)
    })
}, [])
  return (
    <>
    <Navbar></Navbar>
    {itemdata.map((data)=>{
          return(
            <>
            <div key={data._id} className="card" style={{width: "25rem",margin:"20px",border:"2px solid black", padding:"10px solid black",display:"inline-block"}}>
                <img style={{height:"200px"}} src={data.item_image} class="card-img-top" alt="unsplash"/>
                <div className="card-body">
                    <h5 className="card-title">{data.item_name}</h5>
                    <p className="card-text"><strong>Price: </strong>{data.item_price}</p>
                </div>
            </div>
            </>
          )
        })}
        
    </>
  )
}

export default Mybook