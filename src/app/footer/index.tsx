import * as React from 'react';
import { PoweredByMyCrypto } from './poweredby';
import { Logo } from './logo';
import './footer.scss';

export const Footer = () => (
  <footer className="Footer">
    <div className="Footer-inner">
      <a
        className="Footer-logo mycrypto"
        target="_blank"
        rel="noopener noreferrer"
        href="https://vision.evolution-network.org"
      >
        <PoweredByMyCrypto />
      </a>
      <div className="flex-spacer" />
      <div className="Footer-main-content">
        <a className="Footer-logo" href="https://vision.evolution-network.org/">
          <Logo />
        </a>
        <p className="Footer-main-content-text">
          Evolution Vision is an open-source of Evolution blockchain explorer that is offered as a
          part of the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://evolution-network.org">
            EVOX
          </a>{' '}
          network. At Evolution, we’re focused on building awesome products that put the power in
          your hands and this is just the beginning of our Evolution offerings.
        </p>
      </div>
      <div className="flex-spacer" />
      <div className="Footer-social-media-wrapper">
        <p className="Footer-social-titles">EvoX Network Vision</p>
        <div className="Footer-social-titles-wrapper">
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/Evolution_EvoX"
          >
            <i className="nc-icon nc-logo-twitter size_50px" />
          </a>
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/evolution-project"
          >
            <i className="nc-icon nc-logo-github size_50px" />
          </a>
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://evolutionproject.medium.com"
          >
            <i className="nc-icon nc-logo-medium size_50px" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
