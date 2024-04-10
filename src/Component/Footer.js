import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-top'>
   <div className="container">
  <footer className="py-5">
    <div className="row footer-color d-flex">
      <div className="col-6 col-md-2 mb-3 mx-5 ">
      <Link to={"/about"} className='link-about'>
      <h5 className='head'>About</h5>
        <ul className="nav flex-column botom">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary footer-color">Furqan Hashmi</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary footer-color">~ Making everything real that you can imagine :</a></li>
       
      
        </ul>
      </Link>
      </div>
      <div className="col-6 col-md-2 mb-3 mx-4">
        <h5 className='head'>Links</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to={"/"} className="nav-link p-0 text-body-secondary footer-color">Home</Link></li>
          <li className="nav-item mb-2"><Link to={"/services"} className="nav-link p-0 text-body-secondary footer-color">Services</Link></li>
          <li className="nav-item mb-2"><Link to={"/resume"} className="nav-link p-0 text-body-secondary footer-color">Resume</Link></li>
          <li className="nav-item mb-2"><Link to={"/skills"} className="nav-link p-0 text-body-secondary footer-color">Skills</Link></li>
          <li className="nav-item mb-2"><Link to={"/projects"} className="nav-link p-0 text-body-secondary footer-color">Projects</Link></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3 mx-4 ">
       <Link to={"/services"} className='link-services'>
       <h5 className='head'>Services</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary footer-color">Web Design</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary footer-color">Web Development</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary footer-color">Business Strategy</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary footer-color">Data Analysis</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary footer-color">Graphic Design</a></li>
        </ul>
       </Link>
      </div>
      <div className="col-6 col-md-2 mb-3 mx-5">
        <h5 className='head' >Contacts Us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary footer-color">E-mail :</a></li>
          <li className="nav-item mb-2 mx-5"><a href="#" className="nav-link p-0 text-body-secondary footer-color">furqanhashmi349@gmail.com</a></li>
          <li className="nav-item mb-3"><a href="#" className="nav-link p-0 text-body-secondary footer-color"> Mobile :</a></li>
          <li className="nav-item mx-5"><a href="#" className="nav-link p-0 text-body-secondary footer-color"><i className='bi bi-phone'></i> 03134122910</a></li>
        </ul>
      </div>
    </div>
    </footer>
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
   <footer>
      <div className='row'>
        <div>
        <div className=" d-flex">
    <div className='navbar'>
    <ul className=' footer-li d-flex'>
      <li className='mx-4'><a rel="noreferrer"   class="fa_social fa-facebook" target="blank"><h1><i class="bi bi-facebook"></i></h1></a></li>
      <li className='mx-4'><a rel="noreferrer" class="fa_social fa-twitter" target="_blank"><h1><i class="bi bi-twitter"></i></h1></a></li>
      <li className='mx-4'><a rel="noreferrer" href='https://www.linkedin.com/in/furqan-hashmi/' class="fa_social fa-linkedin" target="_blank"><h1><i class="bi bi-linkedin"></i></h1></a></li>
     <li className='mx-4'><a rel="noreferrer" class="fa_social fa-youtube-square" target="_blank"><h1><i class="bi bi-youtube"></i></h1></a></li>
     <li className='mx-4'><a rel="noreferrer" class="fa_social fa-instagram" target="_blank"><h1><i class="bi bi-instagram"></i></h1></a></li>


      </ul>
    </div>
    </div>
        </div>
      </div>
  </footer>
    </div>

</div>

    </div>
  )
}

export default Footer