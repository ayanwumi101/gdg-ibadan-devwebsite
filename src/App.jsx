import React from 'react'
import {Box, Heading} from '@chakra-ui/react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Homepage/Home'
import About from './pages/About'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import Signin from './pages/Signin/Signin'

function App() {
  return (
    <Box w='90%' mx='auto'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signin' element={<Signin />} />
          {/* <Route path='/contact' element={<Layout />} />
          <Route path='/login' element={<Layout />} /> */}
        </Routes>
        <Footer />
      </Router>
    </Box>
  )
}

export default App
