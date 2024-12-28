import { FaInstagram } from 'react-icons/fa';
import styles from './NavHighlight.module.css';

export function InstagramLink() {
  return (
    <a
      href="https://instagram.com/swirlazzo"
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg"
      aria-label="Visit our Instagram"
    >
      <span className={styles.navHighlightSpan}>
        <span className={`${styles.instagramIcon} text-swirlazzo-pink`}>
          <FaInstagram size={24} />
        </span>
        <span className={styles.navHighlightEffect} />
      </span>
    </a>
  );
}