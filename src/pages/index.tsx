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

type CardItem = {
  cardHeader: string;
  cardEmoji: string;
  cardLink: string;
  cardContent: string;
};

const cardCollectionData: CardItem[] = [
  {
    cardHeader: 'AI & ML',
    cardLink: '/nodes/AI-ML',
    cardEmoji: '🤖',
    cardContent:
      "Run pre-trained, foundation models on your data in Flojoy's drag & drop environment. Apply these models to data from the physical world by combining them with sensors, robotics, and benchtop instruments.",
  },
  {
    cardHeader: 'Image Processing',
    cardLink: '/nodes/transformers/image-processing',
    cardEmoji: '🩻',
    cardContent:
      'Flojoy supports standard image processing functions such as logical and arithmetical operations between images, contrast manipulation, convolution, Fourier analysis, sharpening, smoothing, edge detection, and median filtering.',
  },
  {
    cardHeader: 'Signal Processing',
    cardLink: '/nodes/transformers/signal-processing',
    cardEmoji: '📡',
    cardContent:
      'Design and analyze FIR, IIR, multistage, and adaptive filters. Signals can be streamed from simulation variables, data files on disk, or bench-top instruments and DAQ boards. For deployment to microcontrollers and single-board computers, Flojoy supports Python and MicroPython-compatible code generation.',
  },
  {
    cardHeader: 'Instrument Control',
    cardLink: '/nodes/io',
    cardEmoji: '📻',
    cardContent:
      'Flojoy provides apps and functions for configuring data acquisition hardware, reading data into Flojoy, and writing data to DAQ output channels. Flojoy supports a variety of hardware, including those from National Instruments®, Tektronix®, and others.',
  },
  {
    cardHeader: 'Loops & Timers',
    cardLink: '/nodes/logic',
    cardEmoji: '⏲️',
    cardContent:
      'Flojoy has an expressive set of functions ("nodes") for controlling app execution flow - including timers, loops, and if statements. Learn how to add these logic expressions to your Flojoy apps through our simple examples.',
  },
  {
    cardHeader: 'Build Your Own',
    cardLink: '/custom-nodes',
    cardEmoji: '🛠️',
    cardContent:
      'Follow our guides to write your own custom Flojoy functions ("nodes") and apps. Only beginner-level Python knowhow is required.',
  },
];

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
        <CardCollection cardData ={cardCollectionData} />
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
