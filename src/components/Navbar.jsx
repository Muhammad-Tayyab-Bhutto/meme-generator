import { FaLaughWink } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav>
        <h2 className='logo'> <FaLaughWink /> Meme Generator </h2>
        <ul className='nav-links'>
            <li href="#home">Home</li>
            <li href="#home">About</li>
            <li href="#home">Services</li>
        </ul>
    </nav>
  )
}

export default Navbar
