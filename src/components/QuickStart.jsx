import React from 'react';
import styles from '../pages/index.module.scss';
import clsx from 'clsx';

const QuickStart = () => {
	return (
		<div className={clsx(styles.quickstart)}>
			<div
				className="container text-left"
				style={{
					padding: '50px',
				}}
			>
				<h3 className="hero__subtitle">QuickStart</h3>
				<ul className={styles.list}>
					<li>
						<a href="#" className={styles.link}>
							<span>Robotics</span>
						</a>
						<p className={styles.paragraph}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							efficitur luctus sapien non commodo.
						</p>
					</li>
					<li>
						<a href="#" className={styles.link}>
							<span>AI</span>
						</a>
						<p className={styles.paragraph}>
							Sed tempus consectetur est, et luctus lacus tincidunt ac.
							Suspendisse potenti.
						</p>
					</li>
					<li>
						<a href="#" className={styles.link}>
							<span>Arduino</span>
						</a>
						<p className={styles.paragraph}>
							Vestibulum auctor lectus et feugiat malesuada. Phasellus imperdiet
							ultricies turpis a finibus.
						</p>
					</li>
					<li>
						<a href="#" className={styles.link}>
							<span>MATLAB</span>
						</a>
						<p className={styles.paragraph}>
							Vestibulum auctor lectus et feugiat malesuada. Phasellus imperdiet
							ultricies turpis a finibus.
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default QuickStart;
