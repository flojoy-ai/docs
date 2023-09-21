---
title: Waveform Generator Return Errors
description: The RETURN_ERRORS_33510B node returns error messages from the WFG.
keywords: [Python, Instrument Control, Keysight, Wavefunction Generator, Function Generator, Keysight 33500B]
---

In this example, we return errors that the Keysight 33510B has generated.

:::note
The 33510B nodes should also work with other 33XXX wavefunction generators. However, these are untested as of yet.
:::

We add the [`RETURN_ERRORS_33510B`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/FUNCTION_GENERATORS/KEYSIGHT/33XXX) node as well as the [`TEXT_VIEW`](https://github.com/flojoy-ai/nodes/blob/develop/VISUALIZERS/DATA_STRUCTURE/TEXT_VIEW/TEXT_VIEW.py) node to view the summary of the error.

irst the VISA address must be set. This can be found using the [`LIST_VISA`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/QCODES/LIST_VISA/LIST_VISA.py) node (alternatively you can use the VISA index but this is slower).

In this case `No error` is returned, but in the case of an actual error, the specific error will appear.
