import React from 'react';
import { AnchorLink } from '../../Ui';
import { Logo } from '../../Ui/Logo';
import './styles.scss';

export const Header = () => {
  return (
    <header className="container--responsive-header header">
      <Logo classElement="header__sp-labs--color" />
      <nav className="header__navigation nav">
        <AnchorLink elementClassName="nav__link--color-white nav__link--text-style" to="#">
          cases
        </AnchorLink>
        <AnchorLink elementClassName="nav__link--color-white nav__link--text-style" to="#">
          contato
        </AnchorLink>
      </nav>
    </header>
  );
};
