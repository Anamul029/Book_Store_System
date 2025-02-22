
import './App.css'
import Banner from './components/Home/Banner/Banner'
import Footer from './components/Home/Footer/Footer'
import NavBar from './components/Home/NavBar/NavBar'

function App() {

  return (
    <>
      <div className='max-w-[1440px] mx-auto'>
        <NavBar />
        <Banner />
        <Footer />
      </div>
    </>
  )
}

export default App
