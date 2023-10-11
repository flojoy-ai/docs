---
title: ATTENUATION_LDA602
description: The ATTENUATION_LDA602 node sets or queries the attenuation from a Vaunix LDA602.
keywords: [python attenuation, python control, digital attenuation, instrument, python, Vaunix, LDA602, attenuation]
---

In this example, we demonstrate how to set and query the attenuation for a Vaunix LDA602

:::note
TheATTENUATION_LDA602 node should also work with the compatible Vaunix LDA attenuators. However, those have not been tested yet.
:::

We must first add two [`ATTENUATION_LDA602`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/\ATTENUATORS\LDA\LDA602\ATTENUATION_LDA602) nodes. In the example, one node was renamed to add `set` while `query` was added to the other. We also added two [`TEXT_VIEW`](https://github.com/flojoy-ai/nodes/blob/develop/VISUALIZERS/DATA_STRUCTURE/TEXT_VIEW/TEXT_VIEW.py) nodes to view the results.

In the `set` attenuation node, we changed the `set_query` parameter to `set` and did the opposite for the `query` node. For the `set` node, we changed the attenuation setting to `63` (dB). For both of the `LDA602` nodes we also added the instrument serial number which can be found on the instrument itself.

The node can be played to view the attenuation setting matches the actual setting from the `query` node.
