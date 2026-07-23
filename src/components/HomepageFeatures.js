import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>TOWER Mini Course</Translate>,
    alt: translate({ message: 'TOWER Mini Course' }),
    link: '/mini-course/',
    src: '/img/lekce-iot.avif',
    width: 'auto',
    height: 200,
    description: (
      <Translate>
        Discover the Internet of Things with the HARDWARIO TOWER. We’ll guide you through programming and communication protocols—with solder-free, low-voltage assembly.
      </Translate>
    ),
  },
  {
    title: <Translate>STEM Learning Platform</Translate>,
    alt: translate({ message: 'STEM Learning Platform' }),
    link: '/stem/',
    src: '/img/stem-hero.jpg',
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
    alt: translate({ message: 'Projects and Tutorials' }),
    link: '/projects/',
    src: '/img/push-the-button-button-garage.webp',
    width: 'auto',
    height: 200,
    description: (
      <Translate>
        Explore a collection of hands-on projects and tutorials built on HARDWARIO TOWER.
      </Translate>
    ),
  }
];

function Feature({ src, alt, width, height, title, link, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Link to={link}>
          <img className='feature-image' src={src} width={width} height={height} alt={alt} />
        </Link>
      </div>
      <div className='text--center padding-horiz--md'>
        <Link to={link} className='link-unstyled'>
          <h2 className={styles.featureTitle}>{title}</h2>
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
