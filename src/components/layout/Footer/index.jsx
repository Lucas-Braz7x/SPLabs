import React from 'react';
import { AnchorLink } from '../../Ui';
import { Logo } from '../../Ui';
import './styles.scss';

export const Footer = () => {
  return (
    <footer className="container--responsive footer">
      <div className="footer__information">
        <Logo classElement="footer__information__sp-labs--align" />

        <div className="footer__links links">
          <div className="links__items">
            <span className="links__items__text">SP Labs</span>
            <AnchorLink to="#" elementClassName="links__items__link">
              Política de Privacidade
            </AnchorLink>
          </div>
          <div className="links__items">
            <span className="links__items__text">sem processo</span>
            <ul className="links__items__list">
              <li>
                <AnchorLink to="#" elementClassName="links__items__link">
                  site
                </AnchorLink>
              </li>
              <li>
                <AnchorLink to="#" elementClassName="links__items__link">
                  produtos
                </AnchorLink>
              </li>
              <li>
                <AnchorLink to="#" elementClassName="links__items__link">
                  blog
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border">{/* border */}</div>

      <span className="footer__author">SP Labs 2022. Feito por Lucas Braz Dutra </span>
    </footer>
  );
};
