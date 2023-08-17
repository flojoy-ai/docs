---
sidebar_position: 2
id: dc_types
title: Node Data Types
---

# Node Data Types

This is a simple introduction to the data types that are used by the Nodes in Flojoy.

There are a few data types that Flojoy uses. However, not every node can input or output every data type. For example, the `LINSPACE` node outputs one 1-dimensional dataset (aka a Vector), while the `BASIC_OSCILLATOR` node outputs two 1-dimensional datasets (x and y axes, aka an OrderedPair).

![image](/img/introduction/dtypes1.png)
*Both can be plotted with the `SCATTER` and `LINE` nodes.*

:::info
The UI could look slightly different in your version of Flojoy. We're constantly improving the UI.
:::

If you try to connect nodes with incompatible inputs and outputs an warning will pop up:

![image](/img/introduction/dtypes_warning.png)
*<br/>The warning appears in the bottom right of Flojoy.*

To see what types a node can input/output, hover over the connection for a node. A pop up will appear showing the compatible data types.

![image](/img/introduction/dtypes2.png)
*The pop up appears showing this node outputs an x/y pair dataset.*

There are other types such as Image and Matrix for handling images and matricies (both are 2-dimensional datasets). For more in depth information on the backend system used for data types see [`here`](/custom-nodes/data-container/). If you think a node should have an additional data type or there's an error please contact us.
