import Link from 'next/link';
import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__content">
            <nav className="footer__navbar">
              <ul className="footer__navbar__nav">
                <li className="footer__navbar__nav__item">
                  <Link href={'#'}>
                    KODLAND
                  </Link>
                </li>
                <li className="footer__navbar__nav__item">
                  <Link href={'#'}>
                    Terms and Condition
                  </Link>
                </li>
                <li className="footer__navbar__nav__item">
                  <Link href={'#'}>
                    Privacy Policy
                  </Link>
                </li>
                <li className="footer__navbar__nav__item">
                  <Link href={'#'}>
                    About Us
                  </Link>
                </li>
                <li className="footer__navbar__nav__item">
                  <Link href={'#'}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
