import Logo from '../../assets/siyu.jpeg'
import data from './data'
import {IoMdColorPalette} from 'react-icons/io'
import { useModalContext } from '../../context/modal-context'
import './navbar.css'

const Navbar = () => {
  const {showModalHandler} = useModalContext()

  return (
    <nav>
      <div className="container nav__container">
        <a href='index.html' className='nav__logo '>
          <img src={Logo} alt='logo'></img>
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button id="theme__icon" onClick={showModalHandler}><IoMdColorPalette/></button>
      </div>
    </nav>
  )
}

export default Navbar