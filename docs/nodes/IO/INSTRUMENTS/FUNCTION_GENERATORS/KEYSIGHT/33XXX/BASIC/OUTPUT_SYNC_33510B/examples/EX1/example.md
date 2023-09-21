---
title: Waveform Generator Output Sync
description: The OUTPUT_SYNC_33510B node is used sync multiple outputs phases.
keywords: [Python, Instrument Control, Keysight, Wavefunction Generator, Function Generator, Keysight 33500B]
---

In this example, we sync the waveform output phases generation for a Keysight 33510B. Each channel in the 33510B has a `phase` which results in shifting the wavefunction in the x axis (i.e. time). One channel should be chosen as the baseline for this phase to ensure the phases match for the two channels (the phase of the second channel is then with respect to the baseline channel).

:::note
The 33510B nodes should also work with other 33XXX wavefunction generators. However, these are untested as of yet.
:::

We add the [`OUTPUT_SYNC_33510B`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/FUNCTION_GENERATORS/KEYSIGHT/33XXX) node as well as the [`TEXT_VIEW`](https://github.com/flojoy-ai/nodes/blob/develop/VISUALIZERS/DATA_STRUCTURE/TEXT_VIEW/TEXT_VIEW.py) node to view the summary of the changes. We also add the `CLOSE_ALL` node at the beginning. This node can be useful when the instrument remains connected to a previous usage/app.

We then must set the node parameters. First the VISA address must be set. This can be found using the [`LIST_VISA`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/QCODES/LIST_VISA/LIST_VISA.py) node (alternatively you can use the VISA index but this is slower). Then the baseline channel must be set as well as whether to turn the output sync on or off.
