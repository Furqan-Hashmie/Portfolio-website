
import { Link } from 'react-router-dom'

const Home = () => {
  
  return (
    <div className='container bg'>
        <div className='row d-flex'>
          <div className='col'> 
 <div className='mt'>
             <h5 className='l1 '>Hello !</h5>
             <h1 className='l2 fw-bold'> I'm a web</h1>
             <h1 className='l3 fw-bold'>designer &</h1>
             <h1 className='l4 fw-bold'>developer</h1>
         </div>
      <div className='all-btn'>
      <button className='btn btn-outline-warning me-3 fw-bold btn' onClick={window.scrollTo()}>Contact Us</button>
      <a href='https://www.fiverr.com/fhdeveloper?up_rollout=true'><button className='btn btn-outline-warning me-3 fw-bold btn'>Hire me</button></a>
      <Link to={"/resume"} className='resume-link'>  <button className='btn btn-outline-warning me-3 fw-bold btn'>My CV</button></Link>
      </div>
          </div>
         <div className='col'>
         <img src='Images/my_pic_2-removebg-preview.png' className='image'></img>            
          </div>
        </div>
    </div>
  )
}

export default Home