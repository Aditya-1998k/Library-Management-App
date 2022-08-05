import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Login=()=> {
  return (
    <>
    <Navbar></Navbar>
      <div style={{textAlign:"center", margin:"10px"}}>
      <h1 style={{fontFamily:"cursive", margin:"20px"}}>Be the Part of Our FamilY</h1>
      </div>
        <form style={{position:"relative", left:"38%",top:"60%",bottom:"20%"}}>
            <div className="row mb-3">
              <label for="inputEmail3" className="col-sm-1 col-form-label"><strong>Email:</strong></label>
              <div className="col-sm-2">
                <input type="email" className="form-control" id="inputEmail3"/>
              </div>
            </div>
            <div className="row mb-3">
              <label for="inputPassword3" className="col-sm-1 col-form-label"><strong>Password</strong></label>
              <div className="col-sm-2">
                <input type="password" className="form-control" id="inputPassword3"/>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{margin:"10px"}}>Sign in</button>
            <button type="submit" className="btn btn-primary" style={{margin:"10px"}}><Link style={{textDecoration:"none", color:"white"}} to="/signup">SIGNUP</Link></button>
    </form>
    </>
  )
}

export default Login