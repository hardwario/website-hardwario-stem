import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'STEM Learning Platform',
    link: '/stem/',
    src: 'img/stem-education-overview.png',
    width: 200,
    height: 200,
    description: (
      <>
        Browse our STEM learning platform for schools and other educational institutions.
      </>
    ),
  },
  {
    title: 'Projects and Tutorials',
    link: '/projects/',
    src: 'img/push-the-button_button-garage.webp',
    width: 300,
    height: 200,
    description: (
      <>
        Explore a collection of projects and tutorials based on HARDWARIO TOWER, designed to inspire and educate.
      </>
    ),
  },
];

function Feature({ src, width, height, title, subtitle, link, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Link to={link}>
          {/*
          <img src={src} width={width} height={height} />
          */}
        </Link>
      </div>
      <div className='text--center padding-horiz--md'>
        <Link to={link} className='link-unstyled'>
          <h3>{title}</h3>
          <h3>{subtitle}</h3>
        </Link>
        
        <p>{description}</p>
      </div>
    </div >
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <div className="logo-lbc">
        <h3>Spolufinancováno Libereckým krajem</h3>
        <a href="https://www.kraj-lbc.cz" target="_blank" rel="noopener noreferrer" className='logo-img'>
          <img src="/img/liberecky-kraj.svg" alt="LBC Logo" />
        </a>
      </div>
    </>
  );
}
