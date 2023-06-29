import React, {useState, useEffect} from 'react'
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
import Loader from './components/Loader/Loader'

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll('img');
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setIsLoading(false);
      }
    };

    images.forEach((image) => {
      if (image.complete) {
        handleImageLoad();
      } else {
        image.addEventListener('load', handleImageLoad);
      }
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener('load', handleImageLoad);
      });
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  
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
          <Route path='/events/:id' element={<SingleEvent />} />
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
