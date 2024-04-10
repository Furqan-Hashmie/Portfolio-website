import React from 'react'

const Projects = () => {
  return (
    <div className='container'>
      <div className='row d-flex mt-5'>
        <div className='col-lg-6'>
        <div className="card card-bg" style={{ width: '34rem' }}>
          <img src="/Images/ecomerce.png" className="card-img-top project-img"  alt="..." />
          <div className="card-body">
            <h5 className="card-title title-bg fs-2 fw-bold">E-comerce website</h5>
            <p className="card-text text-bg fs-5">
An exemplary e-commerce website boasts a user-friendly interface, facilitating easy navigation and swift product discovery. Advanced search functionalities, personalized recommendations, and the overall shopping experience.</p>
            <a href="#" className="btn btn-warning fs-5 fw-bold">View more</a>
          </div>
        </div>
        </div>
      <div className='col-lg-6'>
      <div className="card card-bg" style={{ width: '34rem' }}>
          <img src="/Images/kingster-education-website-template-1024x800.jpg" className="card-img-top project-img" alt="..." />
          <div className="card-body">
            <h5 className="card-title title-bg fs-2 fw-bold">Eduaction-website</h5>
            <p className="card-text text-bg fs-5">
An educational website offers an extensive repository of multimedia resources, including video lectures, interactive quizzes, and downloadable study materials, fostering a dynamic and engaging learning environment.</p>
            <a href="#" className="btn btn-warning fs-5 fw-bold ">View more</a>
          </div>
        </div>
      </div>

      </div>
      <div className='row d-flex mt-4'>
        <div className='col-lg-6'>
        <div className="card card-bg" style={{ width: '34rem' }}>
          <img src="/Images/airline.jpg" className="card-img-top project-img " alt="..." />
          <div className="card-body">
            <h5 className="card-title title-bg fs-2 fw-bold">Airline-website</h5>
            <p className="card-text text-bg fs-5">
An airline website provides a streamlined booking experience with real-time flight availability, flexible date options, and transparent pricing. Integrated features such as online check-in, seat selection, and flight status updates.</p>
            <a href="#" className="btn btn-warning fs-5 fw-bold">View more</a>
          </div>
        </div>
        </div>
      <div className='col-lg-6'>
      <div className="card card-bg" style={{ width: '34rem' }}>
          <img src="/Images/medicom-simple-health-business-website-template.jpg" className="card-img-top project-img" alt="..." />
          <div className="card-body">
            <h5 className="card-title title-bg fs-2 fw-bold">Medical-website</h5>
            <p className="card-text text-bg fs-5">
A medical website offers comprehensive information on health conditions, treatments, and preventive care, providing users with a reliable resource for informed decision-making. With secure patient portals for appointment scheduling.</p>
            <a href="#" className="btn btn-warning fs-5 fw-bold">View more</a>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Projects