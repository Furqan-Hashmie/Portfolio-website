import React from 'react'

const Skills = () => {
  return (
    <div className='container'>
       <button className='btn btn-outline-warning fs-3 fw-bold skill-head'>My Skills</button>
     <div className='row d-flex mt-5'>
     <div className='col-lg-6'>
     
  <div className="progress bg-dark mt-5 skill-line" role="progressbar" aria-label="Success example" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
    <div className="progress-bar bg-line skill-line" style={{width: '90%'}}><span className='line-head'>HTML</span> <span className='a90'>90%</span></div>
  </div>
  <div className="progress bg-dark mt-5 skill-line " role="progressbar" aria-label="Info example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
    <div className="progress-bar bg-line skill-line" style={{width: '80%'}}><span className='line-head'>JavaScript</span> <span className='a80'>80%</span></div>
  </div>
  <div className="progress bg-dark mt-5 skill-line" role="progressbar" aria-label="Warning example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
    <div className="progress-bar bg-line skill-line" style={{width: '90%'}}><span className='line-head'>Bootstrap</span> <span className='a90'>90%</span></div>
  </div>
  <div className="progress bg-dark mt-5 skill-line" role="progressbar" aria-label="Warning example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
    <div className="progress-bar bg-line skill-line" style={{width: '85%'}}><span className='line-head'>Photoshop</span> <span className='a85'>85%</span></div>
  </div>

</div>
  <div className='col-lg-6'>
  <div className="progress bg-dark mt-5 skill-line" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
    <div className="progress-bar bg-line skill-line" style={{width: '85%'}}><span className='line-head'>CSS</span> <span className='a85'>85%</span></div>
  </div>
  <div className="progress bg-dark mt-5 skill-line " role="progressbar" aria-label="Info example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
    <div className="progress-bar bg-line skill-line" style={{width: '80%'}}><span className='line-head'>React JS</span> <span className='a80'>80%</span></div>
  </div>
  <div className="progress bg-dark mt-5 skill-line" role="progressbar" aria-label="Warning example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
    <div className="progress-bar bg-line skill-line" style={{width: '90%'}}><span className='line-head'>Tailwind</span> <span className='a90'>90%</span></div>
  </div>
  <div className="progress bg-dark mt-5 skill-line" role="progressbar" aria-label="Danger example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
    <div className="progress-bar bg-line skill-line" style={{width: '75%'}}><span className='line-head'>SEO</span> <span className='a75'>75%</span></div>
  </div>
</div>
     </div>
    </div>
  )
}

export default Skills