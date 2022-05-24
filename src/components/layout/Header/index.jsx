import React from 'react';
import { AnchorLink } from '../../Ui';
import { Logo } from '../../Ui/Logo';
import './styles.scss';

export const Header = () => {
  return (
    <header className="header">
      <Logo classElement="header__sp-labs--color" />
      <nav className="header__navigation nav">
        <AnchorLink elementClassName="nav__link--color-white" to="#">
          cases
        </AnchorLink>
        <AnchorLink elementClassName="nav__link--color-white" to="#">
          contato
        </AnchorLink>
      </nav>
    </header>
  );
};
