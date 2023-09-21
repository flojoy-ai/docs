---
title: Waveform Generator On Off
description: The ON_OFF_33510B node is used to turn the output on or off.
keywords: [Python, Instrument Control, Keysight, Wavefunction Generator, Function Generator, Keysight 33500B]
---

In this example, we turn the wavefunction generation of a Keysight 33510B on.

:::note
The 33510B nodes should also work with other 33XXX wavefunction generators. However, these are untested as of yet.
:::

We add the [`ON_OFF_33510B`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/FUNCTION_GENERATORS/KEYSIGHT/33XXX) node as well as the [`TEXT_VIEW`](https://github.com/flojoy-ai/nodes/blob/develop/VISUALIZERS/DATA_STRUCTURE/TEXT_VIEW/TEXT_VIEW.py) node to view the summary of the changes.

We then must set the node parameters. First the VISA address must be set. This can be found using the [`LIST_VISA`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/QCODES/LIST_VISA/LIST_VISA.py) node (alternatively you can use the VISA index but this is slower). Then the channel to change must be set as well as changing `on_off` to `on`. 

The node simply turns the wavefunction generation on or off for the chosen channel. In this example we turn Channel 1 (`ch1`) on and Channel 2 (`ch2`) off.
