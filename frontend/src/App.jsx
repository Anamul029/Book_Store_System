
import './App.css'
import Banner from './components/Home/Banner/Banner'
import FAQ from './components/Home/FAQ/FAQ'
import Footer from './components/Home/Footer/Footer'
import NavBar from './components/Home/NavBar/NavBar'
import Testimonials from './components/Home/Testimonials/Testimonials'

function App() {

  return (
    <>
      <div className=''>
        {/* <NavBar /> */}
        <Banner />
        <FAQ/>
        <Testimonials/>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App
