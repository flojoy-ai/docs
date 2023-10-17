---
sidebar_label: Flojoy | No-code digital signal processing
description: Design and analyze FIR, IIR, multistage, and adaptive filters. Signals can be streamed from simulation variables, data files on disk, or bench-top instruments and DAQ boards.
sidebar_position: 1
slug: /nodes/transformers/signal-processing/
hide_table_of_contents: true
---

# SIGNAL PROCESSING in Python

Welcome to the Signal Processing Nodes page!

Here you can find information about all the Flojoy functions ("nodes") that process, analyze, and transform input signals.

You can also find all of these nodes in the sidebar.

<!-- Custom component -->
import AppThumbnailSection from '@site/src/components/AppThumbnailSection';
import UniversalAdmonition from '@site/src/components/UniversalAdmonition';

<UniversalAdmonition />

## Signal Processing (DSP) Nodes

<AppThumbnailSection
    sectionName = 'Digital signal processing (DSP)'
    blockquote = 'Flojoy nodes for Python-based DSP. Connect DSP nodes together on the Flojoy Studio canvas to create DSP data pipelines similar to Simulink or LabVIEW.'
    sectionRoot = 'TRANSFORMERS/SIGNAL_PROCESSING'
    nodes = {['BUTTER', 'FFT', 'FIR', 'IFFT', 'SAVGOL', 'TWO_DIMENSIONAL_FFT']}
/>