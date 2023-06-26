import {useEffect} from 'react'
import HeaderImage from '../../assets/header.jpg'
import Data from './data'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos='fade-up-right'>
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3 data-aos='fade-up-right'>Siyu Xiao</h3>
        <p data-aos='fade-up-right'>Master of Science student at Northeastern University majoring in Computer Science</p>
        <div className="header__cta" data-aos='fade-up-right'>
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            Data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon
            }</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header