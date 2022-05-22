import React from 'react';
import './styles.scss';

export const Header = () => {
  return (
    <header className="header">
      <span className="header__sp-labs">SP labs_</span>
      <nav className="header__navigation nav">
        <a className="link nav__link--color-white" href="#">
          cases
        </a>
        <a className="link nav__link--color-white" href="#">
          contato
        </a>
      </nav>
    </header>
  );
};
