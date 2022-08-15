import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';

//import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.scss';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<>
			<header className={clsx('hero text-left', styles.heroBanner)}>
				<div className="container text-center">
					<div className={styles.heroTop}>
						<h1 className="hero__title">{siteConfig.title}</h1>
						<p className="hero__subtitle">{siteConfig.tagline}</p>
					</div>
					<div className={styles.buttons}>
						<Link
							className="button button--primary button--lg button--round"
							to="/getting-started"
						>
							Get Started
						</Link>
					</div>
				</div>
			</header>
			<section className="mb-4 bg">
				<div className="container text-center">
					<ThemedImage
						alt="example"
						sources={{
							light: useBaseUrl('/img/hero-image-light.svg'),
							dark: useBaseUrl('/img/hero-image-dark.svg'),
						}}
					/>
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
			{/* <main>
				<HomepageFeatures />
			</main> */}
		</Layout>
	);
}
