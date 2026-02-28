import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'var(--color-background)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '32px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
      }}
    >
      <a
        href="https://github.com/sLesner1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
          alt="GitHub"
          style={{ width: 28, height: 28, filter: 'invert(1)' }}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/sebastian-lesner"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
          alt="LinkedIn"
          style={{ width: 28, height: 28, filter: 'invert(1)' }}
        />
      </a>

      <a
        href="https://www.codewars.com/users/LOL_li_POP"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codewars.svg"
          alt="Codewars"
          style={{ width: 28, height: 28, filter: 'invert(1)' }}
        />
      </a>
    </footer>
  );
};

export default Footer;