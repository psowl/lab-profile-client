import React from "react";
import {Link} from "react-router-dom";

const Home = (props) => {
  return (
    <ul>
    <li><Link to='/signup' style={{textDecoration: 'none'}}>Signup</Link></li>
  
    <li><Link to='/login' style={{textDecoration: 'none'}}>Login</Link></li>
    </ul>
  )
}


export default Home;