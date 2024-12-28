import { ReactNode } from 'react';
import styles from './NavHighlight.module.css';

interface NavItemProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  external?: boolean;
}

export function NavItem({ children, onClick, href, external }: NavItemProps) {
  const content = (
    <span className={styles.navHighlightSpan}>
      <span className="text-lg text-swirlazzo-teal">
        {children}
      </span>
      <span className={styles.navHighlightEffect} />
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="text-lg"
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="text-lg">
      {content}
    </button>
  );
}