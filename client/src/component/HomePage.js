import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from "axios";

const HomePage=()=> {
  let [itemdata, setitem]= useState([]);
  let [item, setitemdata]= useState([]);


  useEffect(()=>{
    axios({
          method:"GET",
          url:"http://localhost:3001/item/"
      }).then((data)=>{
      //console.log(data)
        setitem(data.data.item.reverse())
        setitemdata(data.data.item.reverse())
        console.log(data.data);
      }).catch((err)=>{
        console.log(err)
      })
}, [])
const handleRent=(item)=>{
  console.log(item)
  axios({
    method:"POST",
    url:"http://localhost:3001/mybook/add",
    headers:{

    },
    data:item
  }).then((data)=>{
    console.log(data)
  }).catch((err)=>{
    console.log(err)
  })
}
const handlefilter=(category)=>{
  itemdata=item;
  if(category!==""){
    const thisData=itemdata.filter((curr)=>{
      return curr.item_category===category;
    });
    setitem(thisData)
  }
  else{
    setitem(item)
  }
  
}
  return (
    <>
        <Navbar></Navbar>
        <div style={{position:"relative", left:"32%"}}>
          <div className="btn-group" style={{margin:"20px"}} role="group" aria-label="Basic mixed styles example">
            <button type="button" style={{margin:"10px",fontFamily:"cursive",borderRadius:"3px"}}  className="btn btn-dark" onClick={()=>{handlefilter("fiction")}}>FICTION</button>
            <button type="button" style={{margin:"10px",fontFamily:"cursive",borderRadius:"3px"}} className="btn btn-dark" onClick={()=>{handlefilter("Fantacy")}}>FANTACY</button>
            <button type="button" style={{margin:"10px",fontFamily:"cursive",borderRadius:"3px"}} className="btn btn-dark" onClick={()=>{handlefilter("Educational")}}>EDUCATIONAL</button>
            <button type="button" style={{margin:"10px",fontFamily:"cursive",borderRadius:"3px"}} className="btn btn-dark" onClick={()=>{handlefilter("")}}>ALL</button>
         </div>
         </div>
        {itemdata.map((data)=>{
          return(
            <>
            <div  key={data.object_id} className="card" style={{width: "25.5rem",margin:"20px",border:"2px solid black", padding:"10px solid black",display:"inline-block"}}>
                <img style={{height:"200px", padding:"5px"}} src={data.item_image} className="card-img-top" alt="unsplash"/>
                <div className="card-body">
                    <h5 className="card-title">{data.item_name}</h5>
                    <p className="card-text"><strong>Price:</strong> $ {data.item_price}</p>
                    <p className="card-text"><strong>Category:</strong> {data.item_category}</p>
                </div>
                <div className="card-body">
                    <button className="btn btn-danger" style={{backgroundColor:"green", margin:"5px"}} onClick={()=>{handleRent(data)}}>Rent This Book</button>
                    <button className="btn btn-danger" style={{backgroundColor:"green"}}>Read Description</button>
                </div>
            </div>
            </>
          )
        })}
        
        
        
    </>
  )
}

export default HomePage