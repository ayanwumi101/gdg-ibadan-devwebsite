import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Homepage/Home'
import About from './pages/About'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import Event from './pages/event/page'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'
import EmailVerification from './pages/EmailVerification/EmailVerification'
import Blog from './pages/blog'
import ErrorPage from './pages/404'
import Jobs from './pages/Jobs'
import ScrollToTop from './pages/ScrollToTop'
import Contact from './pages/Contact/Contact'
import SingleEvent from './pages/SingleEvent/SingleEvent'

function App() {
  return (
    <Box w='100%' mx='auto'>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/signin' element={<Signin />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/verification' element={<EmailVerification />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route path='/events' element={<Event />} />
          <Route path='/eventdetails' element={<SingleEvent />} />
          <Route exact path='/jobs' element={<Jobs />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  )
}

export default App
