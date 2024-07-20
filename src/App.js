
import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Navi from './components/Assets/navbar/Nav'
import Profile from './components/Assets/navbar/Profile'
import About from './components/Assets/navbar/About'
import Service from './components/Assets/navbar/Service'
const App = () => {
  return (
   <>
   <BrowserRouter>
<Routes>
<Route exact path='/' element={<Home />} />
<Route exact path='/navi' element={<Navi />} />
<Route exact path='/about' element={<About />} />
<Route exact path='/profile' element={<Profile />} />
<Route exact path='/service' element={<Service />} />

</Routes>

</BrowserRouter>

   </>
  )
}

export default App

