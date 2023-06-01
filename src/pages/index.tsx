import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.scss';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { downloadLinks } from '../utils/download-links';
import QuickStart from '../components/QuickStart';

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
						<h1 className="hero__title">{siteConfig.title}</h1>
						<p className="hero__subtitle">{siteConfig.tagline}</p>
					</div>
					<div className="d-flex align-center justify-center gap-3 flex-column-lg">
						<div className={styles.buttons}>
							<Link
								className="button button--primary button--lg button--round"
								to={downloadLinks.windows}
							>
								Download For Windows
							</Link>
						</div>
						<div className={styles.buttons}>
							<Link
								className="button button--primary button--lg button--round"
								to={downloadLinks.mac}
							>
								Download For Mac
							</Link>
						</div>
					</div>
				</div>
			</header>
			<section
				className={clsx('mb-4', styles.backgroundSection)}
				style={{
					backgroundImage: `url(${bgImage?.light})`,
				}}
			>
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
			title={`Hello from ${siteConfig.title}`}
			description="Description will go into a meta tag in <head />"
		>
			<HomepageHeader />
		</Layout>
	);
}
