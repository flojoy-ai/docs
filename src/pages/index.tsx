import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.scss';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { downloadLinks } from '../utils/helper';
import QuickStart from '../components/QuickStart';
import { FaApple, FaWindows } from 'react-icons/fa';

function HomepageHeader() {
  useEffect(() => {
    document.body.classList.add('home');

    return () => {
      document.body.classList.remove('home');
    };
  }, []);

  const { siteConfig } = useDocusaurusContext();
  const bgImage = {
    light: useBaseUrl('/img/hero-image-light.svg'),
    dark: useBaseUrl('/img/hero-image-dark.svg'),
  };

  return (
    <>
      <header className={clsx('hero text-left', styles.heroBanner)}>
        <div className="container text-center">
          <div className={styles.heroTop}>
            <h1 className="hero__title hero__font__family">
              <span>FLO</span>
              <span>JOY</span>
            </h1>
            <br></br>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <br></br>
            <br></br>
          </div>
          <div className="d-flex align-center flex-column-lg justify-center gap-3">
            <div className="rounded-full bg-accent1 transition duration-300 ease-in-out  hover:bg-accent1-hover ">
              <Link
                className=" flex items-center gap-2 p-4 text-xl font-bold uppercase tracking-wider text-white hover:text-white hover:no-underline dark:text-black hover:dark:text-black"
                to={downloadLinks.windows}
              >
                <FaWindows />
                Download For Windows
              </Link>
            </div>
            <div className="rounded-full bg-accent1 transition duration-300 ease-in-out  hover:bg-accent1-hover ">
              <Link
                className="flex items-center gap-2 p-4 text-xl font-bold uppercase tracking-wider text-white hover:text-white hover:no-underline dark:text-black hover:dark:text-black"
                to={downloadLinks.mac}
              >
                <FaApple />
                <span className="">Download For Mac</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section
        className={clsx('mb-4', styles.backgroundSection)}
        style={{
          backgroundImage: `url(${bgImage?.light})`,
          backgroundRepeat: 'no-repeat',
          backgroundRepeat: 'space',
          backgroundPosition: 'center',
        }}
      ></section>

      <section className={clsx('mb-4', styles.backgroundSection)}>
        <div className="container text-center">
          <QuickStart />
        </div>
      </section>
    </>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Flojoy generates powerful Python data pipelines for science, engineering, and AI through a no-code, drag-and-drop interface."
    >
      <HomepageHeader />
    </Layout>
  );
}
