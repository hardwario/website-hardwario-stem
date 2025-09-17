import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>STEM Learning Platform</Translate>,
    link: '/stem/',
    src: 'img/STEM-hero.jpg',
    width: 'auto',
      height: 200,
        description: (
          <Translate>
            Browse our STEM learning platform for schools and other educational institutions.
          </Translate>
        ),
  },
  {
    title: <Translate>Projects and Tutorials</Translate>,
    link: '/projects/',
    src: 'img/push-the-button_button-garage.webp',
    width: 'auto',
    height: 200,
    description: (
      <Translate>
        Explore a collection of projects and tutorials based on HARDWARIO TOWER, designed to inspire and educate.
      </Translate>
    ),
  },
  {
    title: <Translate>Lekce IoT s Hardwariem</Translate>,
    link: '/lekce-iot/',
    src: 'img/lekce-iot.avif',
    width: 'auto',
    height: 200,
    description: (
      <Translate>
        Pojďte pochopit internet věcí se stavebnicí HARDWARIO. Programování vás naučíme, komunikační protokoly také a pájení není potřeba.
      </Translate>
    ),
  }
];

function Feature({ src, width, height, title, subtitle, link, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Link to={link}>
          {
          <img className='feature-image' src={src} width={width} height={height} />
          }
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
    </>
  );
}
