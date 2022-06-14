import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Header() {
  return (
    <header className='app-header'>
      <nav>
        <div className='nav-wrapper app-header-container'>
          <Link to='./' className='app-logo'>
            <img src={ logo } alt="logo" />
            <span>TimeToEat</span>
          </Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <Link to='/about'>
                About Us
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                Contact Us
              </Link>
            </li>
            <li>
              <a href='https://github.com/RublikFun/demo-food-app' target='_blank' rel='noreferrer'>
                REPO
              </a>
            </li>
            <li>
              <a href='https://www.themealdb.com/api.php' target='_blank' rel='noreferrer'>
                TheMealDB
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export { Header };
