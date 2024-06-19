
import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Projects from './Component/Projects';
import Skills from './Component/Skills';
import Footer from './Component/Footer';

function App() {
  return (
   <div className='bg'>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
=
    </Routes>
  <div className='mt-5'>
  <Footer/>
  </div>
   </div>
  );
}

export default App;
