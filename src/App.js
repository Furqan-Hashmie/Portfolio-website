
import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Projects from './Component/Projects';
import Resume from './Component/Resume';
import Skills from './Component/Skills';
import Footer from './Component/Footer';
import Certificate from './Component/Certificate';

function App() {
  return (
   <div className='bg'>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/resume' element={<Resume/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/certificate' element={<Certificate/>}></Route>

    </Routes>
  <div className='mt-5'>
  <Footer/>
  </div>
   </div>
  );
}

export default App;
