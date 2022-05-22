import React from 'react';
import { AnchorLink } from '../../Ui';
import './styles.scss';

export const Header = () => {
  return (
    <header className="header">
      <span className="header__sp-labs">SP labs_</span>
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
