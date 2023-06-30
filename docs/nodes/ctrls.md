---
sidebar_position: 2
id: ctrls
title: CTRLS Introduction
---

# CTRLS

This is an introduction to the CRTLS system in Flojoy. Let's start with the default app:

![image](/img/introduction/UI.png)
*UI at start up including an example app.*

:::info
The UI could look slightly different in your version of Flojoy. We're constantly improving the UI.
:::

The CTRLS system in Flojoy is used to alter the behavior of invidiual nodes (i.e. parameters). For instance, the value of the node CONSTANT can be changed which is the only parameter that can be changed. When you click on a node that has available CTRLS, a sidebar will appear on the right of the screen. In this sidebar, you can change the parameters for the node.

![image](/img/introduction/sidebar.png) <br/>
*Example of a parameter in the CTRLS sidebar for the CONSTANT node.*

Other nodes, like the addition node, have no parameters that can be changed. Other nodes have multiple parameters that can be changed. For instance the SINE node has 5 parameters:

![image](/img/introduction/sine_sidebar.png) <br/>
*Parameters in the CTRLS sidebar for the SINE node.*

For example, OFFSET and PHASE will offset the data in the x and y-axes respectively.

# CTRLS Tab

The CTRLS tab is one of the three tabs in Flojoy (along with the scripting tab and DEBUG). In this tab you can view the parameters for all the nodes.

![image](/img/introduction/ctrl_tab.png) <br/>
*Parameters in the CTRLS tab.*

To add CTRLS here press the "+Add CTRL" button and select the type of CTRL you want to add. The type of CTRL must match the type of parameter you want to change. For example, SINE has two parameter types: numeric and select. Numeric types are simply numbers (e.g. floats or integers) while the select type has discrete selections. For SINE, the waveform CTRL has 4 possible selections: sine, square, triangle, and sawtooth. This parameter type can be used with the dropdown or radio button CTRL.

:::caution
The CTRLS tab will not be updated when parameters are set with the sidebar, unless you add the CTRL with "+Add CTRL". 
:::

![image](/img/introduction/add_ctrl.png) <br/>
*Selections available for the "Discrete Variables" parameter type in the "+Add Node" menu.*

:::caution
You must ensure you use the correct type of parameter in the CTRLS tab. If you are unsure, use the CTRL sidebar as the types are pre-set.
:::

:::info
Saving the App will save the CTRLS with the currently set values.
:::
