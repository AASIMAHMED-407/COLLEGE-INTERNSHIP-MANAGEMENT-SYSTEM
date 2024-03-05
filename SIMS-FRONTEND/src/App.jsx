import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Components/Login'
import SRegister from './Components/Student/SRegister'
import CRegister from './Components/College/CRegister'
import SHome from './Components/Student/SHome'
import CHome from './Components/College/CHome'
import EnrolledIntership from './Components/Student/EnrolledIntership'
import OnGoingInternship from './Components/Student/OnGoingInternship'
import HistoryInternship from './Components/Student/HistoryInternship'
import SProfile from './Components/Student/SProfile'
import ViewMore from './Components/Student/ViewMore'
import ViewMoreAvailable from './Components/Student/ViewMoreAvailable'
import CMakeInternship from './Components/College/CMakeInternship'
import CViewAllInternship from './Components/College/CViewAllInternship'
import CEnrolledInternship from './Components/College/CEnrolledInternship'
import NoPage from './NoPage'
import CProfile from './Components/College/CProfile'

function App() {


  return (
    <>
    <div className='App'>
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Login/>}></Route>
        <Route path='/sregister' element={<SRegister/>}></Route>
        <Route path='/cregister' element={<CRegister/>}></Route>
        <Route path='/shome/:id' element={<SHome/>}></Route>
        <Route path='/chome/:id' element={<CHome/>}></Route>
        <Route path='/enrolledInternship/:id' element={<EnrolledIntership/>}></Route>
        <Route path='/ongoinginternship/:id' element={<OnGoingInternship/>}></Route>
        <Route path='/shistory' element={<HistoryInternship/>}></Route>
        <Route path='/sprofile/:id' element={<SProfile/>}></Route>
        <Route path='/viewmoreenrolled' element={<ViewMore/>}></Route>
        <Route path='/viewmoreavailable' element={<ViewMoreAvailable/>}></Route>

        {/* College */}
        <Route path='/cmakeinternship/:id' element={<CMakeInternship/>}></Route>
        <Route path='/cenrolledstudentinternship/:id' element={<CEnrolledInternship/>}></Route>
        <Route path='/cviewallinternship/:id' element={<CViewAllInternship/>}></Route>
        <Route path='/cprofile/:id' element={<CProfile/>}></Route>






        <Route path='*' element={<NoPage/>}></Route>
       {/* <Route path='/update/:id' element={<Update/>}></Route>  */}
     </Routes>
   </BrowserRouter>
   
   </div>
   </>
  )
}

export default App
