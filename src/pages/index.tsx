import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.scss';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { downloadLinks } from '../utils/helper';
import QuickStart from '../components/QuickStart';
import CardCollection from '../components/CardCollection';
import { FaApple, FaWindows, FaLinux } from 'react-icons/fa';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';

function HomepageHeader() {
  useEffect(() => {
    document.body.classList.add('home');

    return () => {
      document.body.classList.remove('home');
    };
  }, []);

  useEffect(() => {
    const win = window as any;

    if (typeof win.Featurebase !== 'function') {
      win.Featurebase = function () {
        // eslint-disable-next-line prefer-rest-params
        (win.Featurebase.q = win.Featurebase.q || []).push(arguments);
      };
    }
    win.Featurebase('initialize_feedback_widget', {
      organization: 'flojoy',
      theme: 'light',
      placement: 'right',
    });
  }, []);

  const { siteConfig } = useDocusaurusContext();
  const bgImage = {
    light: useBaseUrl('/img/hero-image-light.svg'),
    dark: useBaseUrl('/img/hero-image-dark.svg'),
  };

  return (
    <>
      <Head>
        <script
          src="https://do.featurebase.app/js/sdk.js"
          id="featurebase-sdk"
        />
      </Head>
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
          <div className="align-center flex-column-lg flex justify-center gap-6">
            <div className="rounded-full bg-accent1 transition duration-300 ease-in-out  hover:bg-accent1-hover ">
              <Link
                className="dotted-btn flex items-center gap-2 hover:no-underline"
                to={downloadLinks.windows}
              >
                <FaWindows />
                Download For Windows
              </Link>
            </div>
            <div className="rounded-full bg-accent1 transition duration-300 ease-in-out  hover:bg-accent1-hover ">
              <Link
                className="dotted-btn flex items-center gap-2 hover:no-underline"
                to={downloadLinks.mac}
              >
                <FaApple />
                <span className="">Download For Mac</span>
              </Link>
            </div>
            <div className="rounded-full bg-accent1 transition duration-300 ease-in-out  hover:bg-accent1-hover ">
              <Link
                className="dotted-btn flex items-center gap-2 hover:no-underline"
                to={downloadLinks.linux}
              >
                <FaLinux />
                <span className="">Download For Linux</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <h1 className="text-center">🕹️ Demos</h1>

      <div className="py-4" />

      <div className="flex flex-col items-center px-6 sm:px-24 lg:px-48 3xl:px-72">
        <CardCollection />
      </div>

      <div className="py-8" />

      <h1 className="text-center">🎛️ App showcase</h1>

      <div className="py-4" />

      <section className={clsx('mb-4', styles.backgroundSection)}>
        <div className="container text-center">
          <BrowserOnly>{() => <QuickStart />}</BrowserOnly>
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
