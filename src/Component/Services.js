import React from 'react'

const Services = () => {
  return (
    <div className='container'>
    <button className='btn btn-outline-warning service-btn'>My Services</button>
    {/* <p className='ptag'>"The road to success and the road to failure are almost exactly the same."</p> */}
      <div className='row d-flex mx-4 mt-5'>
        <div className='col-lg-6'>
        <div className="card mx-4 px-3 py-3 card-bg" style={{ width: '30rem' }}>
          <div className="card-body">
            <h5 className="card-title fs-3 fw-bold title-bg">Master in design</h5>
            <p className="card-text text-bg">Designs enables specialize and research in various disciplines like Craft, Textiles, Publications, Media, Lifestyle Products, Graphics and User Experience Design It covers  communication skills and portfolio.</p>
          </div>
        </div>
        </div>
       <div className='col-lg-6'>
       <div className="card card-bg " style={{ width: '30rem' }}>
          <div className="card-body">
            <h5 className="card-title px-3 py-2 fs-3 fw-bold title-bg">Graphic Design Bootcamp</h5>
            <p className="card-text px-3 text-bg">The Multimedia Graphic Design bootcamp enables to look for branding, publication design, social media graphics, video editing, animation, and website design. It covers courses such as communication skills, portfolio preparation, typography, advertising copywriting fundamentals, and packaging design.</p>
          </div>
        </div>
       </div>
      </div>
      <div className='row d-flex mx-4'>
        <div className='col-lg-6'>
        <div className="card card-bg  mx-4 px-3 py-3 " style={{ width: '30rem' }}>
          <div className="card-body">
            <h5 className="card-title fs-3 fw-bold title-bg">HTML & CSS</h5>
            <p className="card-text text-bg">HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices like Laptop , Mobile , Pc or Tablets </p>
          </div>
        </div>
        </div>
       <div className='col-lg-6 mt-4'>
       <div className="card card-bg " style={{ width: '30rem' }}>
          <div className="card-body">
            <h5 className="card-title px-3 py-2 fs-3 fw-bold mt-3 title-bg">Javascript & React</h5>
            <p className="card-text px-3 text-bg">PHP is currently the most widely used scripting language for server-side development, whereas JavaScript is a client-side scripting language. PHP is responsible for handling things on the server side, whereas JavaScript is responsible for handling things on the client side of the browser</p>
          </div>
        </div>
       </div>
      </div>
      <div className='row d-flex mx-4'>
        <div className='col-lg-6'>
        <div className="card card-bg  mx-4 px-3 py-3 mt-2" style={{ width: '30rem' }}>
          <div className="card-body">
            <h5 className="card-title fs-3 fw-bold title-bg">Wordpress developer</h5>
            <p className="card-text text-bg">HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.</p>
          </div>
        </div>
        </div>
       <div className='col-lg-6 mt-4'>
       <div className="card card-bg " style={{ width: '30rem' }}>
          <div className="card-body">
            <h5 className="card-title px-3 py-2 fs-3 fw-bold mt-3 title-bg">UX/UI designer</h5>
            <p className="card-text px-3 text-bg">PHP is currently the most widely used scripting language for server-side development, whereas JavaScript is a client-side scripting language. PHP is responsible for handling things on the server side, whereas JavaScript is responsible for handling things on the client side of the browser</p>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Services