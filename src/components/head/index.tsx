import Link from 'next/link';
import {
  FC,
  useEffect,
  useState,
} from 'react';
import { GrClose } from 'react-icons/gr';
import { RiMenu3Line } from 'react-icons/ri';

import useWindowDimensions from '../../hooks/useWindowDimension';

const Header: FC = () => {
  const { width, height } =
    useWindowDimensions();
  const [navOpen, setNavOpen] =
    useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (width > 639)
        setNavOpen(false);
    };

    handleResize();
  }, [width]);
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__content">
            <h2 className="header__logo-text">
              KODLAND
            </h2>
            <button className="header__burger-menu">
              {!navOpen ? (
                <RiMenu3Line
                  size={25}
                  onClick={() =>
                    setNavOpen(
                      () => !navOpen,
                    )
                  }
                />
              ) : (
                <GrClose
                  size={25}
                  onClick={() =>
                    setNavOpen(
                      () => !navOpen,
                    )
                  }
                />
              )}
            </button>
            <nav
              className={[
                'navbar',
                navOpen
                  ? 'navbar--open'
                  : '',
              ].join(' ')}
            >
              <ul className="navbar__nav">
                <li>
                  <Link
                    href={'#'}
                    className="navbar__link"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={'#'}
                    className="navbar__link"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={'#'}
                    className="navbar__link"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
