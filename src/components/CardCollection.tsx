import React from 'react';
import Card from '../components/Card';

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
      "Run pre-trained, foundation models on your data in Flojoy's drag & drop flow chart. Apply these models to data from the physical world by combining them with sensors, robotics, and benchtop instruments.",
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
      'Flojoy provides apps and functions or configuring data acquisition hardware, reading data into Flojoy, and writing data to DAQ output channels. Flojoy supports a variety of hardware, including those from National Instruments®, Tektronix®, and others.',
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

function CardCollection() {
  return (
    <section className="grid gap-8 lg:grid-cols-2 2xl:grid-cols-3">
      {cardCollectionData.map(cd => {
        return (
          <Card
            cardHeader={cd.cardHeader}
            cardLink={cd.cardLink}
            cardEmoji={cd.cardEmoji}
            cardContent={cd.cardContent}
          />
        );
      })}
    </section>
  );
}

export default CardCollection;
