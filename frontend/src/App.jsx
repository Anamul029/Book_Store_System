
import './App.css'
import Banner from './components/Home/Banner/Banner'
import Footer from './components/Home/Footer/Footer'
import NavBar from './components/Home/NavBar/NavBar'
import Testimonials from './components/Home/Testimonials/Testimonials'

function App() {

  return (
    <>
      <div className='max-w-[1440px] mx-auto'>
        <NavBar />
        <Banner />
        <Testimonials/>
        <Footer />
      </div>
    </>
  )
}

export default App
