---
title: Waveform Generator Burst Mode
description: The BURST_MODE_33510B node is used to turn the Burst mode on or off.
keywords: [Python, Instrument Control, Keysight, Wavefunction Generator, Function Generator, Keysight 33500B]
---

In this example, we set the burst mode settings on a Keysight 33500B.

:::note
The 33510B nodes should also work with other 33XXX wavefunction generators. However, these are untested as of yet.
:::

We add the [`BURST_MODE_33510B`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/FUNCTION_GENERATORS/KEYSIGHT/33XXX) node as well as the [`TEXT_VIEW`](https://github.com/flojoy-ai/nodes/blob/develop/VISUALIZERS/DATA_STRUCTURE/TEXT_VIEW/TEXT_VIEW.py) node to view the summary of the burst mode.

We then must set the `burst mode` settings. First the VISA address must be set. This can be found using the [`LIST_VISA`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/QCODES/LIST_VISA/LIST_VISA.py) node (alternatively you can use the VISA index but this is slower). Then you can set the trigger method to `TIM` (i.e. timed) and `ncycles` to 5.

The `33510B` cannot view the waveform directly. An oscilloscope can be used optionally. to view the waveform.
