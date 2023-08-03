---
sidebar_position: 2
id: ctrls
title: Parameters Introduction
---

# PARAMETERS

This is an introduction to the node parameters system in Flojoy. Let's start with the app from the last tutorial:

![image](/img/introduction/connections.png)
*UI at start up including an example app.*

:::info
The UI could look slightly different in your version of Flojoy. We're constantly improving the UI.
:::

The node parameters  system in Flojoy is used to alter the behavior of invidiual nodes (i.e. parameters). For instance, the value of the node `LINSPACE` can be changed to alter the X axis data created. When you click on a node that has available parameters, a sidebar will appear on the right of the screen. In this sidebar, you can change the parameters for the node. Many nodes have no parameters that can be changed.

![image](/img/introduction/sidebar.png) <br/>
*Example of a node parameters sidebar for the LINSPACE node.*

For example, START and END will change where the X axis starts and ends in this app. Change the START and END to 0 and 4, respectively, and change STEP to 100. Click on the `RAND` node and change DISTRIBUTION to uniform. Now run the app. 

![image](/img/introduction/params_changed.png) <br/>
*Example of a node parameters sidebar for the LINSPACE node.*

You can see how the results have now changed. The `HISTOGRAM` node no longer shows the peak distribution (normal/Gaussian) due to the uniform DISTRIBUTION. You can also see the X axis only goes from 0 to 4 due to the `LINSPACE` changes. Additionally there are less total points due to changing STEP. You've now finished a tutorial showing the basics of Flojoy. Feel free to play with the parameters to see how the behavior changes.

:::info
Saving the App will save the parameters with the currently set values.
:::
