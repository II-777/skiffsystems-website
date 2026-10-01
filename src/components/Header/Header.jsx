// External Libraries
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { FaCanadianMapleLeaf } from 'react-icons/fa6';
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

// Styles 
import css from './Header.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(prevState => !prevState);
  };

  const handleLinkClick = () => {
    setIsNavVisible(false);
  };

  useEffect(() => {
    if (isNavVisible) {
      document.body.classList.add(css.bodyLocked);
    } else {
      document.body.classList.remove(css.bodyLocked);
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove(css.bodyLocked);
    };
  }, [isNavVisible]);

  return (
    <header className={css.header}>
      <Link to="/" className={css.logo}><Logo /></Link>
      <button 
        className={css.burgerButton} 
        onClick={toggleNavVisibility}
        aria-label={isNavVisible ? 'Close menu' : 'Open menu'}
      >
        {isNavVisible ? <IoCloseSharp className={css.burgerIcon} /> : <IoMdMenu className={css.burgerIcon} />}
      </button>
      <nav className={clsx(css.nav, { [css.navVisible]: isNavVisible })}>
        <NavLink to="/" className={buildLinkClass} onClick={handleLinkClick}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass} onClick={handleLinkClick}>
          <FaCanadianMapleLeaf className={css.icon} /> About
        </NavLink>
        <NavLink to="/contact" className={buildLinkClass} onClick={handleLinkClick}>
          Contact
        </NavLink>
        {/* Uncomment these lines when pages are ready*/}
        {/* <NavLink to="/product" className={buildLinkClass} onClick={handleLinkClick}>
          Product
        </NavLink>
        <NavLink to="/careers" className={buildLinkClass} onClick={handleLinkClick}>
          Careers
        </NavLink> */}
      </nav>
    </header>
  );
};

export default Header;
