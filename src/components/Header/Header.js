import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        <a href={homepage} className='link logoFrangipane'>
          <p className='logoFrangipane' alt={title} />
        </a>
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
