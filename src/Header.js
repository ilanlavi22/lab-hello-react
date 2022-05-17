//const logo = './ironhack-logo-xs.png';
import logo from './images/ironhack-logo-xs.png'
import navIcon from './images/menu-top-xs.png'
const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <img src={navIcon} className="nav-icon" alt="nav icon" />
    </header>
  );
}

export default Header;