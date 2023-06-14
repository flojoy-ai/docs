import React from 'react';
import styles from '../pages/index.module.scss';
import clsx from 'clsx';

const QuickStart = () => {
	return (
		<div className={clsx(styles.quickstart)}>
			<div className="container text-left" style={{ padding: '50px' }}>
				<h3 className="hero__subtitle">QuickStart!</h3>
				<ul className={styles.list}>
					<li>
						<span className={styles.bulletLarge}>&#x25CF;</span>
						<a
							href="nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC/"
							className={styles.link}
						>
							<span>Robotics</span>
						</a>
						<p className={styles.paragraph}>Control a stepper motor</p>
					</li>
					<li>
						<span className={styles.bulletLarge}>&#x25CF;</span>
						<a href="nodes/AI_ML/OBJECT_DETECTION/" className={styles.link}>
							<span> AI</span>
						</a>
						<p className={styles.paragraph}>
							Identify objects in web cam capture
						</p>
					</li>
					<li>
						<span className={styles.bulletLarge}>&#x25CF;</span>
						<a
							href="nodes/INSTRUMENTS/SERIAL/SERIAL_SINGLE_MEASUREMENT/"
							className={styles.link}
						>
							<span>Arduino</span>
						</a>
						<p className={styles.paragraph}>Read temperature from an Arduino</p>
					</li>
					<li>
						<span className={styles.bulletLarge}>&#x25CF;</span>
						<a
							href="nodes/LOADERS/LOCAL_FILE_SYSTEM/OPEN_MATLAB/"
							className={styles.link}
						>
							<span> MATLAB</span>
						</a>
						<p className={styles.paragraph}>
							Convert a .mat file to a Python dataframe
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default QuickStart;
