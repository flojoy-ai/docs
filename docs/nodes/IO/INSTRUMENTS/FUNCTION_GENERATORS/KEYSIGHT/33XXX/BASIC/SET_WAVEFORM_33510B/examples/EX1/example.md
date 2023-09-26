---
title: Waveform Generator Set Waveform
description: The SET_WAVEFORM_33510B node is used to set waveform settings for a 33510B.
keywords: [Python, Instrument Control, Keysight, Wavefunction Generator, Function Generator, Keysight 33500B]
---

In this example, we change the waveform settings for the Keysight 33510B. The 33510B has many waveform settings to change including: `waveform`, `amplitude`, `frequency`, etc. We can also choose to turn the wavefunction generation on or off.

:::note
The 33510B nodes should also work with other 33XXX wavefunction generators. However, these are untested as of yet.
:::

We add two of the [`SET_WAVEFORM_33510B`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/FUNCTION_GENERATORS/KEYSIGHT/33XXX) nodes as well as the [`TEXT_VIEW`](https://github.com/flojoy-ai/nodes/blob/develop/VISUALIZERS/DATA_STRUCTURE/TEXT_VIEW/TEXT_VIEW.py) node to view the summary of the changes. We also add the `CLOSE_ALL` node at the beginning. This node can be useful when the instrument remains connected to a previous usage/app. The first `SET_WAVEFORM_33510B` is used to set the parameters while the second is used to query the instrument to ensure the wavefunction parameters are correct.

We then must set the node parameters. First, the VISA address must be set. This can be found using the [`LIST_VISA`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/QCODES/LIST_VISA/LIST_VISA.py) node (alternatively you can use the VISA index but this is slower). The waveform settings were changed as follows: waveform: SIN, amplitude: 0.2, amplitude units: Vpp, frequency: 1e7 Hz, on_off: on, query_set: set. The second node only needs to ensure the query_set parameter is set to `query`.
