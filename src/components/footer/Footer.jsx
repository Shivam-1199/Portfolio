import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Shivam</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/_shivam_11/" className="footer__social-link" target="_blank" rel="noreferrer">
            <i class="uil uil-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/shivam-pokhariyal/" className="footer__social-link" target="_blank" rel="noreferrer">
                <i class="uil uil-linkedin"></i>
            </a>

            <a href="https://github.com/Shivam-1199" className="footer__social-link" target="_blank" rel="noreferrer">
                <i class="uil uil-github"></i>
            </a>
            </div>

            <span className="footer__copy">&#169; Shivam_Pokhariyal. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer