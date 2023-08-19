import React, { SVGProps } from 'react';

export const ScipySvg = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 100 100"
      {...props}
    >
      <defs>
        <radialGradient id="g" cx="50%" cy="70%" r="70%">
          <stop offset="0" stopColor="#0053A0" />
          <stop offset=".5" stopColor="#0053A0" />
          <stop offset=".95" stopColor="#00264a" />
          <stop offset="1" stopColor="black" />
        </radialGradient>
      </defs>
      <path d="M94,33l3-2 M97,28v3h2.5" fill="none" stroke="#000" />
      <circle cx="50" cy="50" fill="url(#g)" r="47.5" stroke="#000" />
      <path
        d="M7,77c24-27,23-4,44,2c18,4,23-15,10-25c-7-6-16-5-23-9c-10-5-8-20,2-23c29-10,16,32,49,13"
        fill="none"
        stroke="#fff"
        strokeWidth="7"
      />
      <path
        d="M80,32l5,11l9-8l-1-3z"
        fill="#fff"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const NumpySvg = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 140 256"
      {...props}
    >
      <g id="g243" transform="translate(-84,-51.24)">
        <polygon
          fill="#4dabcf"
          points="132.38,96.4 95.25,77.66 54.49,98 92.63,117.15 "
          id="polygon39"
        />
        <polygon
          fill="#4dabcf"
          points="149.41,104.99 188.34,124.65 147.95,144.93 109.75,125.75 "
          id="polygon41"
        />
        <polygon
          fill="#4dabcf"
          points="201.41,77.94 241.41,98 205.63,115.96 166.62,96.28 "
          id="polygon43"
        />
        <polygon
          fill="#4dabcf"
          points="184.19,69.3 148.18,51.24 112.56,69.02 149.67,87.73 "
          id="polygon45"
        />
        <polygon
          fill="#4dabcf"
          points="156.04,224.36 156.04,273.5 199.66,251.73 199.62,202.57 "
          id="polygon47"
        />
        <polygon
          fill="#4dabcf"
          points="199.6,185.41 199.55,136.77 156.04,158.4 156.04,207.06 "
          id="polygon49"
        />
        <polygon
          fill="#4dabcf"
          points="251.97,176.3 251.97,225.63 214.76,244.19 214.73,195.09 "
          id="polygon51"
        />
        <polygon
          fill="#4dabcf"
          points="251.97,159.05 251.97,110.71 214.69,129.24 214.72,177.98 "
          id="polygon53"
        />
        <path
          fill="#4d77cf"
          d="m 140.64,158.4 -29.38,-14.78 v 63.84 c 0,0 -35.94,-76.46 -39.26,-83.33 -0.43,-0.89 -2.19,-1.86 -2.64,-2.1 C 62.88,118.65 44,109.09 44,109.09 v 112.83 l 26.12,14 v -59 c 0,0 35.55,68.32 35.92,69.07 0.37,0.75 3.92,7.94 7.74,10.47 5.07,3.37 26.84,16.46 26.84,16.46 z"
          id="path55"
        />
      </g>
    </svg>
  );
};
