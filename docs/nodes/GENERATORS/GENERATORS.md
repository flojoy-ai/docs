---
sidebar_label: Generators
slug: /nodes/GENERATORS/
sidebar_position: 7
---

# GENERATORS in Python

Welcome to the Generator nodes page!

Generator nodes can be used to generate synthetic data for your Flojoy apps if you do not have data readily on-hand or are creating a Python-based simulation.

You can also find all of these nodes in the sidebar.

<!-- Custom component -->
import AppThumbnailSection from '@site/src/components/AppThumbnailSection';

<AppThumbnailSection
    sectionName = 'Sample datasets'
    blockquote = 'Flojoy nodes that output sample datasets for rapidly creating and testing Flojoy apps. Use these nodes as inputs to AI & ML nodes, image processing nodes, and others.'
    sectionRoot = 'GENERATORS'
    nodes = {['SAMPLE_DATASETS/PLOTLY_DATASET', 'SAMPLE_DATASETS/R_DATASET', 'SAMPLE_DATASETS/TEXT_DATASET', 'SAMPLE_IMAGES/SKIMAGE']}
/>

<AppThumbnailSection
    sectionName = 'Simulation'
    blockquote = 'Flojoy nodes that output simulation data such as waveforms, scalars (constants), and empty matrices.'
    sectionRoot = 'GENERATORS/SIMULATIONS'
    nodes = {['BASIC_OSCILLATOR', 'CONSTANT', 'FEEDBACK', 'LINSPACE', 'MATRIX', 'RAND', 'SCALAR', 'SECOND_ORDER_SYSTEM', 'SINE', 'TEXT', 'TIMESERIES', 'WAVEPACKET']}
/>
