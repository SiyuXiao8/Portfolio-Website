import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';
import {useRef, useState, useEffect} from 'react'

const App = () => {
  const mainRef = useRef()
  const {themeState} = useThemeContext()
  const [showFloatingNav, setShowFloatingNav] = useState(true)
  const [siteYPosition, setSiteYPosition] = useState(0)

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true)
  }
  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false)
  }
  // condition to check whether floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    // at least scrolled up or down 20px
    if(siteYPosition < (mainRef?.current?.getBoundingClientRect().y - 20) || 
    siteYPosition > (mainRef?.current?.getBoundingClientRect().y + 20)) {
      showFloatingNavHandler()
    } else {
      hideFloatingNavHandler()
    }
    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y)
    
  }

  useEffect(() => {
    const checkYPos = setInterval(floatingNavToggleHandler, 2000) // run every 2 seconds
    // cleanup function
    return () => clearInterval(checkYPos)
  }, [siteYPosition])

  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
      <Navbar/>
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <Theme/>
      {/* for phones and tablets */}
      {showFloatingNav && <FloatingNav/> }
    </main>
  )
}

export default App