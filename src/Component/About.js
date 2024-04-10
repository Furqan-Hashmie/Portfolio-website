import React from 'react'

const About = () => {
  return (
    <div className='container'>
      <button className='btn btn-outline-warning me-btn' ><center className='fs-2 fw-bold me'>About me</center></button>
      <div className='row'>
      <div className='col-lg-5'>
         <img src='/Images/my_pic_2-removebg-preview.png' className='about-image'></img>            
      </div>
      <div className='col-lg-5'>
          <div className='row d-flex'>
          <div className='col-lg-5 data'> 
          <h3 className='fw-bold'>Name :</h3>
          <h3 className='mt-4 fw-bold'>Email :</h3> 
          <h3 className='mt-4 fw-bold'>Mobile :</h3>
          <h3 className='mt-4 fw-bold'>Service :</h3>
          <h3 className='mt-4 fw-bold'>Experience :</h3>
          <h3 className='mt-4 fw-bold'>Education :</h3>
          </div>
          <div className='col-lg-3 data2'>
           <div className='d-flex'><h3 className='me-3'>Furqan</h3><h3> Hashmi</h3></div>
          <h3 className="mt-3">furqanhashmi349@gmail.com</h3>
          <h3 className='mt-4'>03224173757</h3>
          <h3 className='mt-4 d-flex'><h3 className='me-3'>Web</h3><h3>Developer</h3></h3>
          <h3 className='mt-3'> +1 Year</h3>
          <h3 className='mt-4 d-flex'><h3 className='me-3'>BSCS</h3><h3>(continue) </h3></h3>
          </div>
          </div>
      </div>
      <p className='more-me'>DESCRIPTION :</p>
      <p className=' des'>I am a Web Developer with over 1 year of hands-on experience . My journey in the industry has equipped me with a deep understanding of front-end technologies, including <b>HTML, CSS,</b> and <b>JavaScript</b>, along with proficiency in popular frameworks such as <b>React js and Bootstrap</b> . I develop a seamless experience across various devices and platforms. Experience as a Web Developer with a strong portfolio showcasing diverse projects. Collaborate with cross-functional teams to translate design concepts into functional web pages. Familiarity with version control systems, especially Git. Ability to meet project deadlines and work independently. Excellent communication skills for effective collaboration with team members. Ability to identify and resolve cross-browser compatibility issues. Strong analytical and problem-solving skills to troubleshoot issues efficiently. Excellent collaboration and communication skills to work effectively with designers and back-end developers.</p>
      </div>
    </div>
  )
}

export default About