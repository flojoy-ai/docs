import React from 'react';
import DataIcon from '../icons/DataIcon';
import ETLIcon from '../icons/ETLIcon';
import IOIcon from '../icons/IOIcon';
import LogicIcon from '../icons/LogicIcon';
import NumpyIcon from '../icons/NumpyIcon';
import ScipyIcon from '../icons/ScipyIcon';
import { DataNodeLink } from './nodes/DataNodeLink';
import { ETLNodeLink } from './nodes/ETLNodeLink';
import { IONodeLink } from './nodes/IONodeLink';
import { LogicNodeLink } from './nodes/LogicNodeLink';
import { NumpyNodeLink } from './nodes/NumpyNodeLink';
import { ScipyNodeLink } from './nodes/ScipyNodeLink';

export const variants = {
  data: {
    title: 'Data',
    linkComponent: DataNodeLink,
    icon: <DataIcon width={64} height={64} />,
    text: 'text-accent2',
    bg: 'bg-accent2',
    fill: 'fill-accent2',
  },
  etl: {
    title: 'ETL',
    linkComponent: ETLNodeLink,
    icon: <ETLIcon width={80} height={80} />,
    text: 'text-accent1',
    bg: 'bg-accent1',
    fill: 'fill-accent1',
  },
  io: {
    title: 'I/O',
    linkComponent: IONodeLink,
    icon: <IOIcon width={48} height={48} />,
    text: 'text-accent4',
    bg: 'bg-accent4',
    fill: 'fill-accent4',
  },
  logic: {
    title: 'Logic',
    linkComponent: LogicNodeLink,
    icon: <LogicIcon width={48} height={48} />,
    text: 'text-accent3',
    bg: 'bg-accent3',
    fill: 'fill-accent3',
  },
  numpy: {
    title: 'numpy',
    linkComponent: NumpyNodeLink,
    icon: <NumpyIcon width={48} height={48} />,
    text: 'text-blue-500',
    bg: 'bg-blue-500',
    fill: 'fill-blue-500',
  },
  scipy: {
    title: 'scipy',
    linkComponent: ScipyNodeLink,
    icon: <ScipyIcon width={48} height={48} />,
    text: 'text-blue-500',
    bg: 'bg-blue-500',
    fill: 'fill-blue-500',
  },
};
