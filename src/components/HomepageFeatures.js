import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'STEM',
    subtitle: 'STEM Learning Platform',
    link: '/stem/',
    src: '/img/stem.png',
    width: 300,
    height: 200,
    description: (
      <>
        Browse our STEM learning platform for schools and other educational institutions.
      </>
    ),
  },
  {
    title: 'Projects',
    subtitle: 'Projects and Tutorials based on HARDWARIO TOWER',
    link: '/projects/',
    src: '/img/projects.png',
    width: 200,
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
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </Link>
        <div className={styles.buttons}>
          <Link className='button button--secondary button--md' to={link}>
            👉 Go to {title} documentation
          </Link>
        </div>
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
        <a href="https://www.kraj-lbc.cz" target="_blank" rel="noopener noreferrer">
          <img src="/img/liberecky-kraj.svg" alt="LBC Logo" />
        </a>
      </div>
    </>
  );
}
