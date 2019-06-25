import * as React from 'react';
import { PoweredByMyCrypto } from './poweredby';
import { Logo } from './logo';
import './footer.scss';

export const Footer = () => (
  <footer className="Footer">
    <div className="Footer-inner">
    
        </a>
        <p className="Footer-main-content-text">
          ArQmAVision is an open-source ArQmA block explorer that is offered as a part of the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://vision.arqma.com">
            ARQMA
          </a>{' '}
          network. At ARQMA, we’re focused on building awesome products that put the power in
          your hands and this is just the beginning of our Monero offerings.
        </p>
      </div>
      <div className="flex-spacer" />
      <div className="Footer-social-media-wrapper">
        <p className="Footer-social-titles">MoneroVision</p>
        <div className="Footer-social-titles-wrapper">
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/monerovision"
          >
            <i className="nc-icon nc-logo-twitter size_24px" />
          </a>
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MyCryptoHQ/MoneroVision"
          >
            <i className="nc-icon nc-logo-github size_24px" />
          </a>
        </div>
        <p className="Footer-social-titles">ARQMA</p>
        <div className="Footer-social-titles-wrapper">
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/Arqma_network"
          >
            <i className="nc-icon nc-logo-twitter size_24px" />
          </a>
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/arqma"
          >
            <i className="nc-icon nc-logo-github size_24px" />
          </a>
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/Arqma_network"
          >
            <i className="nc-icon nc-logo-facebook size_24px" />
          </a>

        </div>
      </div>
    </div>
  </footer>
);
