import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar=()=> {

  let newTime=new Date().toLocaleTimeString();
  const [time, settime]=useState(newTime);
  const updateTime=()=>{
    newTime=new Date().toLocaleTimeString();
    settime(newTime)
  }
  setInterval(updateTime, 1000)

  return (
    <>
        <nav className="navbar bg-dark" style={{margin:"2px"}}>
              <div className="container-fluid">
                <h3 className="navbar-brand" style={{color:"white", fontFamily:"cursive"}}>VIDYA BHAWAN</h3>
                <form className="d-flex" role="search">
                  <button style={{margin:"5px"}} className="btn btn-outline-success" type="submit" ><Link style={{textDecoration:"none", color:"white",fontFamily:"cursive"}} to="/home">HOME</Link></button>
                  <button style={{margin:"5px"}} className="btn btn-outline-success" type="submit"><Link style={{textDecoration:"none", color:"white",fontFamily:"cursive"}} to="/mybook">MYBOOK</Link></button>
                  <button style={{margin:"5px"}} className="btn btn-outline-success" type="submit"><Link style={{textDecoration:"none", color:"white", fontFamily:"cursive"}} to="/logout">LOGOUT</Link></button>
                  <button style={{margin:"5px",color:"white",fontFamily:"cursive"}} className="btn btn-outline-success" type="submit" >{time}</button>
                </form>
              </div>
        </nav>
    </>
  )
}

export default Navbar;