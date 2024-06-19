
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
      <Link to="https://drive.google.com/file/d/1AQehjHN6FK6LqOL_2z-ocp2873jly5D0/view" target="_blank"><button className='btn btn-outline-warning me-3 fw-bold btn'>Certificate</button></Link>
      <Link to="https://drive.google.com/file/d/1fC0XbJSGwCiDyqFG-z9fKls975HXV40M/view" target="_blank" className='resume-link'> <button className='btn btn-outline-warning me-3 fw-bold btn'>Resume</button></Link>
      <Link to="https://drive.google.com/file/d/1AQehjHN6FK6LqOL_2z-ocp2873jly5D0/view" target="_blank"><button className='btn btn-outline-warning me-3 fw-bold btn'>Certificate</button></Link>
      </div>
          </div>
         <div className='col'>
         <img src='/Images/userpng.png' alt='img' className='image'></img>            
          </div>
        </div>
    </div>
  )
}

export default Home