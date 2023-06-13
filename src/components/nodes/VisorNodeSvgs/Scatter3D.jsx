import React, { memo } from 'react';

export default memo(() => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="225"
			height="226"
			viewBox="0 0 225 226"
			data-testid="scatter3d-svg"
		>
			<rect width="100%" height="100%" fill="rgba(255, 255, 255, 0)"></rect>
			<path
				stroke="#000"
				strokeWidth="2"
				d="M0 0L0 0"
				transform="translate(31.5 79.5)"
				vectorEffect="non-scaling-stroke"
			></path>
			<path
				stroke="#000"
				strokeWidth="2"
				d="M0 0L0 0"
				transform="translate(157.5 180.5)"
				vectorEffect="non-scaling-stroke"
			></path>
			<path
				fillOpacity="0.2"
				strokeWidth={'3'}
				strokeOpacity={'0.8'}
				stroke="#99F5FF"
				d="M-59.809-54.69a5.5 5.5 0 015.5-5.5H54.31a5.5 5.5 0 015.5 5.5V54.697a5.5 5.5 0 01-5.5 5.5H-54.309a5.5 5.5 0 01-5.5-5.5V-54.69z"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(-.15 -.31)"
			></path>
			<path
				d="M-3.325-12.26c0 .625-.19 1.156-.568 1.593-.378.438-.909.738-1.593.902v.041c.807.1 1.418.347 1.832.739.415.387.623.911.623 1.572 0 .962-.35 1.711-1.046 2.249-.698.533-1.693.8-2.988.8-1.084 0-2.046-.18-2.884-.54v-1.798c.387.196.813.355 1.278.478.465.124.925.185 1.38.185.698 0 1.213-.118 1.546-.355.332-.237.499-.618.499-1.142 0-.47-.192-.802-.575-.998-.382-.196-.993-.294-1.832-.294h-.758v-1.62h.772c.775 0 1.34-.1 1.695-.3.36-.206.54-.555.54-1.047 0-.756-.473-1.135-1.421-1.135-.329 0-.663.055-1.005.165-.338.109-.713.298-1.128.567l-.978-1.456c.912-.656 1.999-.985 3.26-.985 1.035 0 1.851.21 2.448.63.602.419.903 1.002.903 1.75zm11.37 2.666c0 1.646-.47 2.906-1.408 3.78C5.703-4.937 4.352-4.5 2.583-4.5h-2.83v-9.994h3.138c1.631 0 2.898.43 3.8 1.292.903.861 1.354 2.064 1.354 3.61zm-2.201.055c0-2.146-.948-3.22-2.844-3.22H1.872v6.508h.91c2.041 0 3.062-1.096 3.062-3.288zm-31.753 21.263c0 .902-.326 1.613-.978 2.133-.647.52-1.55.779-2.707.779-1.066 0-2.01-.2-2.83-.602v-1.969c.674.301 1.244.513 1.709.636.47.123.898.185 1.285.185.465 0 .82-.089 1.066-.267.251-.177.376-.442.376-.793a.86.86 0 00-.164-.52 1.79 1.79 0 00-.485-.444c-.21-.14-.64-.367-1.292-.676-.61-.288-1.069-.563-1.374-.828a3.105 3.105 0 01-.731-.922c-.183-.351-.274-.761-.274-1.23 0-.885.299-1.58.896-2.086.601-.506 1.43-.759 2.488-.759.52 0 1.014.062 1.483.185.474.123.969.296 1.484.52l-.684 1.647a9.891 9.891 0 00-1.326-.458 4.215 4.215 0 00-1.025-.13c-.401 0-.71.093-.923.28a.924.924 0 00-.322.732c0 .187.044.35.13.492.087.137.224.271.41.403.192.128.64.36 1.347.698.934.446 1.575.895 1.921 1.346.346.447.52.996.52 1.648zm7.036-5.599c-.797 0-1.415.3-1.852.902-.438.597-.657 1.431-.657 2.502 0 2.229.837 3.343 2.51 3.343.701 0 1.55-.175 2.549-.526v1.777c-.82.342-1.736.513-2.748.513-1.454 0-2.566-.44-3.336-1.32-.77-.884-1.155-2.15-1.155-3.8 0-1.04.189-1.948.567-2.728.378-.784.92-1.383 1.627-1.798.711-.419 1.543-.629 2.495-.629.97 0 1.946.235 2.926.705l-.684 1.722c-.373-.178-.75-.332-1.128-.465a3.366 3.366 0 00-1.114-.198zM-7.092 14.5l-.725-2.379h-3.643l-.725 2.38h-2.283l3.527-10.036h2.591l3.541 10.035h-2.283zm-1.23-4.156a2039.46 2039.46 0 01-1.135-3.657 11.457 11.457 0 01-.178-.67c-.15.583-.581 2.025-1.292 4.327h2.605zm9.613 4.156H-.828V6.27h-2.714V4.505h7.547v1.764H1.291v8.23zm9.088 0h-2.12V6.27H5.547V4.505h7.547v1.764h-2.714v8.23zm10.988 0H15.61V4.505h5.756v1.736H17.73v2.195h3.384v1.736H17.73v2.577h3.637v1.75zm5.19-5.557h.684c.67 0 1.164-.112 1.483-.335.32-.224.479-.575.479-1.053 0-.474-.164-.811-.492-1.012-.324-.2-.827-.3-1.511-.3h-.643v2.7zm0 1.722V14.5h-2.119V4.505h2.912c1.359 0 2.363.248 3.015.745.652.492.978 1.242.978 2.25 0 .587-.162 1.111-.486 1.571-.323.456-.781.814-1.374 1.074a402.632 402.632 0 002.94 4.354H30.07l-2.386-3.835h-1.128z"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(-.02 -33.17)"
			></path>
			<g
				clipPath="url(#CLIPPATH_115)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(-.15 31.32)"
			>
				<clipPath id="CLIPPATH_115">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(0 -21.4)"
					></rect>
				</clipPath>
				<path
					d="M-14.485-10.3l-34.244 20.605h68.934l28.526-20.604h-63.216z"
					opacity="0.9"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_116)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(4.99 25.27)"
			>
				<clipPath id="CLIPPATH_116">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-5.14 -15.35)"
					></rect>
				</clipPath>
				<path
					fill="#FFF"
					d="M.004 3.243c1.775 0 3.214-1.45 3.214-3.24 0-1.79-1.44-3.24-3.214-3.24-1.776 0-3.215 1.45-3.215 3.24 0 1.79 1.44 3.24 3.215 3.24z"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_117)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(-15.75 26.19)"
			>
				<clipPath id="CLIPPATH_117">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(15.6 -16.27)"
					></rect>
				</clipPath>
				<path
					fill="#FFF"
					d="M-.001 3.24c1.775 0 3.214-1.45 3.214-3.24 0-1.79-1.44-3.24-3.214-3.24-1.776 0-3.215 1.45-3.215 3.24 0 1.79 1.44 3.24 3.215 3.24z"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_118)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(10.3 31.98)"
			>
				<clipPath id="CLIPPATH_118">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-10.45 -22.06)"
					></rect>
				</clipPath>
				<path
					fill="#FFF"
					d="M.002 3.24c1.776 0 3.215-1.451 3.215-3.24 0-1.79-1.44-3.24-3.215-3.24S-3.212-1.79-3.212 0c0 1.789 1.439 3.24 3.214 3.24z"
					opacity="0.8"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_119)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(-3.8 17.86)"
			>
				<clipPath id="CLIPPATH_119">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(3.65 -7.93)"
					></rect>
				</clipPath>
				<path d="M-.003 3.047c1.672 0 3.027-1.365 3.027-3.05 0-1.685-1.355-3.05-3.027-3.05-1.671 0-3.026 1.365-3.026 3.05 0 1.685 1.355 3.05 3.026 3.05z"></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_120)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(9.65 4.36)"
			>
				<clipPath id="CLIPPATH_120">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-9.8 5.56)"
					></rect>
				</clipPath>
				<path d="M-.001 3.052c1.671 0 3.027-1.366 3.027-3.05 0-1.685-1.356-3.051-3.027-3.051S-3.028-1.683-3.028.001c0 1.685 1.356 3.051 3.027 3.051z"></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_121)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(9.65 11.14)"
			>
				<clipPath id="CLIPPATH_121">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-9.8 -1.22)"
					></rect>
				</clipPath>
				<path d="M-.001 3.05C1.67 3.05 3.026 1.684 3.026 0c0-1.686-1.356-3.051-3.027-3.051s-3.027 1.365-3.027 3.05c0 1.685 1.356 3.05 3.027 3.05z"></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_122)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(-28.48 11.53)"
			>
				<clipPath id="CLIPPATH_122">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(28.33 -1.6)"
					></rect>
				</clipPath>
				<path d="M-.003 3.047c1.671 0 3.026-1.366 3.026-3.05 0-1.685-1.355-3.05-3.026-3.05-1.672 0-3.027 1.365-3.027 3.05 0 1.684 1.355 3.05 3.027 3.05z"></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_123)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(22.24 2.63)"
			>
				<clipPath id="CLIPPATH_123">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-22.39 7.29)"
					></rect>
				</clipPath>
				<path
					d="M.002 3.053c1.671 0 3.026-1.366 3.026-3.05 0-1.685-1.355-3.05-3.026-3.05-1.672 0-3.027 1.365-3.027 3.05 0 1.684 1.355 3.05 3.027 3.05z"
					opacity="0.9"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_124)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(8.3 -.39)"
			>
				<clipPath id="CLIPPATH_124">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-8.45 10.31)"
					></rect>
				</clipPath>
				<path
					d="M.004 3.054c1.671 0 3.027-1.366 3.027-3.05 0-1.685-1.356-3.051-3.027-3.051-1.672 0-3.027 1.366-3.027 3.05 0 1.685 1.355 3.05 3.027 3.05z"
					opacity="0.9"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_125)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(6.29 -5.13)"
			>
				<clipPath id="CLIPPATH_125">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-6.43 15.06)"
					></rect>
				</clipPath>
				<path
					d="M-.005 3.048c1.672 0 3.027-1.366 3.027-3.05 0-1.685-1.355-3.05-3.027-3.05-1.671 0-3.026 1.365-3.026 3.05 0 1.684 1.355 3.05 3.026 3.05z"
					opacity="0.75"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_126)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(8.3 -8.52)"
			>
				<clipPath id="CLIPPATH_126">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-8.45 18.45)"
					></rect>
				</clipPath>
				<path
					d="M.004 3.048c1.671 0 3.027-1.366 3.027-3.05 0-1.685-1.356-3.051-3.027-3.051-1.672 0-3.027 1.366-3.027 3.05 0 1.685 1.355 3.051 3.027 3.051z"
					opacity="0.75"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_127)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(11.67 -11.23)"
			>
				<clipPath id="CLIPPATH_127">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-11.82 21.16)"
					></rect>
				</clipPath>
				<path
					d="M-.002 3.047c1.671 0 3.026-1.366 3.026-3.05 0-1.685-1.355-3.05-3.026-3.05-1.672 0-3.027 1.365-3.027 3.05 0 1.684 1.355 3.05 3.027 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_128)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(-24.85 10.77)"
			>
				<clipPath id="CLIPPATH_128">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(24.7 -.84)"
					></rect>
				</clipPath>
				<path
					d="M.002 3.049c1.672 0 3.027-1.366 3.027-3.05 0-1.685-1.355-3.051-3.027-3.051-1.671 0-3.026 1.366-3.026 3.05 0 1.685 1.355 3.05 3.026 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_129)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(-16.18 5.79)"
			>
				<clipPath id="CLIPPATH_129">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(16.03 4.13)"
					></rect>
				</clipPath>
				<path
					d="M-.002 3.055c1.672 0 3.027-1.366 3.027-3.05 0-1.685-1.355-3.05-3.027-3.05-1.671 0-3.027 1.365-3.027 3.05 0 1.684 1.356 3.05 3.027 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_130)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(-13.22 -5.81)"
			>
				<clipPath id="CLIPPATH_130">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(13.07 15.73)"
					></rect>
				</clipPath>
				<path
					d="M-.002 3.052c1.671 0 3.026-1.366 3.026-3.05 0-1.685-1.355-3.051-3.026-3.051C-1.674-3.05-3.03-1.683-3.03 0c0 1.685 1.355 3.05 3.027 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_131)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(-7.17 10.46)"
			>
				<clipPath id="CLIPPATH_131">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(7.02 -.54)"
					></rect>
				</clipPath>
				<path
					d="M.001 3.053c1.672 0 3.027-1.366 3.027-3.05 0-1.685-1.355-3.05-3.027-3.05-1.671 0-3.026 1.365-3.026 3.05 0 1.684 1.355 3.05 3.026 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_132)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(-4.48 7.75)"
			>
				<clipPath id="CLIPPATH_132">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(4.33 2.17)"
					></rect>
				</clipPath>
				<path
					d="M.004 3.05c1.671 0 3.026-1.366 3.026-3.051S1.675-3.051.004-3.051c-1.672 0-3.027 1.365-3.027 3.05 0 1.685 1.355 3.05 3.027 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_133)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(-.44 7.75)"
			>
				<clipPath id="CLIPPATH_133">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(.29 2.17)"
					></rect>
				</clipPath>
				<path
					d="M-.002 3.05c1.672 0 3.027-1.366 3.027-3.051S1.67-3.051-.002-3.051c-1.671 0-3.026 1.365-3.026 3.05 0 1.685 1.355 3.05 3.026 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_134)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(-4.48 -11.23)"
			>
				<clipPath id="CLIPPATH_134">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(4.33 21.16)"
					></rect>
				</clipPath>
				<path
					d="M.004 3.047c1.671 0 3.026-1.366 3.026-3.05 0-1.685-1.355-3.05-3.026-3.05-1.672 0-3.027 1.365-3.027 3.05 0 1.684 1.355 3.05 3.027 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_135)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(-6.68 18.23)"
			>
				<clipPath id="CLIPPATH_135">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(6.53 -8.3)"
					></rect>
				</clipPath>
				<path
					d="M-.003 3.046c1.672 0 3.027-1.366 3.027-3.05 0-1.686-1.355-3.051-3.027-3.051-1.671 0-3.026 1.365-3.026 3.05 0 1.685 1.355 3.05 3.026 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_136)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(-27.61 -5.09)"
			>
				<clipPath id="CLIPPATH_136">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(27.47 15.01)"
					></rect>
				</clipPath>
				<path
					d="M-.005 3.055c1.672 0 3.027-1.366 3.027-3.05 0-1.685-1.355-3.051-3.027-3.051-1.671 0-3.026 1.366-3.026 3.05 0 1.685 1.355 3.05 3.026 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_137)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(-10.77 -8.11)"
			>
				<clipPath id="CLIPPATH_137">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(10.62 18.03)"
					></rect>
				</clipPath>
				<path
					d="M.001 3.053c1.672 0 3.027-1.366 3.027-3.05 0-1.685-1.355-3.051-3.027-3.051-1.671 0-3.026 1.366-3.026 3.05 0 1.685 1.355 3.05 3.026 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_138)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(-28.21 -8.22)"
			>
				<clipPath id="CLIPPATH_138">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(28.06 18.14)"
					></rect>
				</clipPath>
				<path
					d="M-.001 3.054c1.671 0 3.026-1.366 3.026-3.05C3.025-1.682 1.67-3.048 0-3.048c-1.672 0-3.027 1.366-3.027 3.05 0 1.685 1.355 3.051 3.027 3.051z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_139)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(6.29 22.66)"
			>
				<clipPath id="CLIPPATH_139">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-6.43 -12.74)"
					></rect>
				</clipPath>
				<path
					fill="#FFF"
					d="M-.005 3.055c1.672 0 3.027-1.365 3.027-3.05 0-1.685-1.355-3.05-3.027-3.05-1.671 0-3.026 1.365-3.026 3.05 0 1.685 1.355 3.05 3.026 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_140)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(28.58 5.76)"
			>
				<clipPath id="CLIPPATH_140">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-28.73 4.16)"
					></rect>
				</clipPath>
				<path
					d="M0 3.054c1.672 0 3.027-1.366 3.027-3.05 0-1.685-1.355-3.05-3.027-3.05-1.671 0-3.026 1.365-3.026 3.05 0 1.684 1.355 3.05 3.026 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_141)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(37.33 .34)"
			>
				<clipPath id="CLIPPATH_141">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-37.48 9.58)"
					></rect>
				</clipPath>
				<path
					d="M-.004 3.05c1.671 0 3.027-1.366 3.027-3.05 0-1.686-1.356-3.051-3.027-3.051s-3.027 1.365-3.027 3.05c0 1.685 1.356 3.05 3.027 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_142)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(15.6 -6.81)"
			>
				<clipPath id="CLIPPATH_142">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-15.75 16.73)"
					></rect>
				</clipPath>
				<path
					d="M.002 3.054c1.671 0 3.027-1.366 3.027-3.05 0-1.685-1.356-3.051-3.027-3.051-1.672 0-3.027 1.366-3.027 3.05 0 1.685 1.355 3.05 3.027 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_143)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(28.3 8.73)"
			>
				<clipPath id="CLIPPATH_143">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-28.45 1.19)"
					></rect>
				</clipPath>
				<path
					d="M-.003 3.054c1.672 0 3.027-1.365 3.027-3.05 0-1.685-1.355-3.05-3.027-3.05-1.671 0-3.026 1.365-3.026 3.05 0 1.685 1.355 3.05 3.026 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_144)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(13.59 3.36)"
			>
				<clipPath id="CLIPPATH_144">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-13.74 6.56)"
					></rect>
				</clipPath>
				<path
					d="M-.004 3.054c1.671 0 3.026-1.366 3.026-3.05 0-1.685-1.355-3.051-3.026-3.051-1.672 0-3.027 1.366-3.027 3.05 0 1.685 1.355 3.051 3.027 3.051z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_145)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(5.24 14.18)"
			>
				<clipPath id="CLIPPATH_145">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-5.39 -4.25)"
					></rect>
				</clipPath>
				<path
					d="M.004 3.047c1.671 0 3.027-1.366 3.027-3.05 0-1.685-1.356-3.05-3.027-3.05s-3.027 1.365-3.027 3.05c0 1.684 1.356 3.05 3.027 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_146)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(7.93 16.89)"
			>
				<clipPath id="CLIPPATH_146">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-8.08 -6.97)"
					></rect>
				</clipPath>
				<path
					d="M.004 3.05C1.675 3.05 3.03 1.686 3.03 0c0-1.684-1.355-3.05-3.026-3.05-1.672 0-3.027 1.366-3.027 3.05 0 1.685 1.355 3.05 3.027 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_147)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(22.92 13.87)"
			>
				<clipPath id="CLIPPATH_147">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-23.07 -3.95)"
					></rect>
				</clipPath>
				<path
					d="M.003 3.054c1.671 0 3.027-1.366 3.027-3.05 0-1.685-1.356-3.051-3.027-3.051-1.672 0-3.027 1.366-3.027 3.05 0 1.685 1.355 3.05 3.027 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_148)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(25.61 11.16)"
			>
				<clipPath id="CLIPPATH_148">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-25.76 -1.24)"
					></rect>
				</clipPath>
				<path
					d="M.003 3.05c1.671 0 3.026-1.366 3.026-3.05 0-1.685-1.355-3.05-3.026-3.05-1.672 0-3.027 1.365-3.027 3.05 0 1.684 1.355 3.05 3.027 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_149)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(29.65 11.16)"
			>
				<clipPath id="CLIPPATH_149">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-29.8 -1.24)"
					></rect>
				</clipPath>
				<path
					d="M0 3.05c1.671 0 3.027-1.366 3.027-3.05C3.027-1.685 1.67-3.05 0-3.05c-1.672 0-3.027 1.365-3.027 3.05 0 1.684 1.355 3.05 3.027 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_150)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(23.41 21.64)"
			>
				<clipPath id="CLIPPATH_150">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(-23.56 -11.71)"
					></rect>
				</clipPath>
				<path
					fill="#FFF"
					d="M-.004 3.046c1.672 0 3.027-1.366 3.027-3.05 0-1.685-1.355-3.05-3.027-3.05-1.671 0-3.026 1.365-3.026 3.05 0 1.684 1.355 3.05 3.026 3.05z"
					opacity="0.59"
				></path>
			</g>
			<g
				clipPath="url(#CLIPPATH_151)"
				transform="matrix(1.87 0 0 1.86 112.91 113.25) translate(-18.15 24.05)"
			>
				<clipPath id="CLIPPATH_151">
					<rect
						width="97.46"
						height="62.722"
						x="-48.73"
						y="-31.361"
						rx="0"
						ry="0"
						transform="translate(18 -14.13)"
					></rect>
				</clipPath>
				<path
					fill="#FFF"
					d="M0 3.239c1.776 0 3.215-1.45 3.215-3.24 0-1.79-1.44-3.24-3.215-3.24S-3.214-1.79-3.214 0c0 1.79 1.44 3.24 3.214 3.24z"
					opacity="0.8"
				></path>
			</g>
		</svg>
	);
});
