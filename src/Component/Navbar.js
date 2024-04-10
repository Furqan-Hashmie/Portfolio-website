import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg nav-bg">
  <div class="container-fluid">


 <Link className='navbar-brand'> <img src="/Images/my pic.png" className=" profile" alt="..."></img></Link>
 <Link className='navbar-brand fs-4 fw-bold'> Furqan Hashmi</Link>

  
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav m-auto">
        <li class="nav-item">
          <Link className="nav-link active color" aria-current="page" to={"/"} >Home</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link active color" aria-current="page" to={"/about"} >About</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link active color" aria-current="page" to={"/services"} >Services</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link active color" aria-current="page" to={"/resume"} >Resume</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link active color" aria-current="page" to={"/skills"} >Skills</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link active color" aria-current="page" to={"/certificate"} >Certificate</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link active color" aria-current="page" to={"/projects"} >Projects</Link>
        </li>
    
    
  
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar