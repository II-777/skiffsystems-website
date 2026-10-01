import React from 'react';
import css from './ContactPage.module.css'; // Import the CSS module
import { FaEnvelope, FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'; // Import all icons from react-icons/fa

const ContactPage = () => {
  return (
    <>
      <h2>Contact Us</h2>
      <p className={css.contactText}>
        Got a question or request? Reach out to us via email or connect through our social media links. We look forward to hearing from you!
      </p>
      <a href="mailto:info@skiffsystems.com" className={css.emailLink}>
        <FaEnvelope className={css.emailIcon} /> INFO@SKIFFSYSTEMS.COM
      </a>
      <div className={css.socialLinksContainer}>
        <ul className={css.socialLinksList}>
          <li className={css.socialLinksListItem}>
            <a href="https://www.linkedin.com/company/skiff-systems" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={css.socialIcon} />
            </a>
          </li>
          <li className={css.socialLinksListItem}>
            <a href="https://twitter.com/skiffsystems" target="_blank" rel="noopener noreferrer">
              <FaTwitter className={css.socialIcon} />
            </a>
          </li>
          <li className={css.socialLinksListItem}>
            <a href="https://www.youtube.com/channel/UCf_89QtgQ3rNB4eV0AFoihQ" target="_blank" rel="noopener noreferrer">
              <FaYoutube className={css.socialIcon} />
            </a>
          </li>
          <li className={css.socialLinksListItem}>
            <a href="https://www.instagram.com/skiffsystems" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={css.socialIcon} />
            </a>
          </li>
        </ul>
      </div>
      <div className={css.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5610.38307194073!2d-75.73997962389707!3d45.39837483782846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0419d22efc3d%3A0x55b16b6de24b3840!2s1338%20Wellington%20St.%20W%2C%20Ottawa%2C%20ON%20K1Y%203B7!5e1!3m2!1sen!2sca!4v1771360940017!5m2!1sen!2sca" 
          className={css.mapFrame}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </>
  );
}

export default ContactPage;
