---
sidebar_position: 2
id: ctrls
title: Parameters Introduction
---

# Parameters

This is an introduction to the node parameters system in Flojoy. 

Let's start with the app from the last tutorial:

![image](/img/introduction/connections.png)
*UI at startup showing an example app.*

:::info
The UI could look slightly different in your version of Flojoy. We are constantly improving the UI.
:::

The node parameters system in Flojoy is used to alter the behavior of invidiual nodes (i.e. the parameters). 

For instance, the value of the node `LINSPACE` can be changed to alter the X axis data created. When you click on a node that has available parameters, a sidebar will appear on the right of the screen. In this sidebar, you can change the parameters for the node. (Note that many nodes do not have any parameters that can be changed.)

![image](/img/introduction/sidebar.png) <br/>
*Example of a node parameters sidebar for the `LINSPACE` node.*

For example, START and END will determine where the X axis starts and ends in this app. 

Change the START and END to 0 and 4, respectively, and change STEP to 100. Click on the `RAND` node and change DISTRIBUTION to uniform. Now run the app. 

![image](/img/introduction/params_changed.png) <br/>
*The results can be seen after running the app.*

You can see how the results have now changed: 

- You can also see that the X axis only ranges from 0 to 4 due to the changes in these `LINSPACE` parameters. 
- Additionally, there are less total points due to the changes in the STEP parameter. 
- The `HISTOGRAM` node no longer shows the peak (normal/Gaussian) distribution because the DISTRIBUTION parameter was set to uniform.

Feel free to play around with the parameters to see how the behavior changes.

:::info
Saving the app will save the parameters with the currently set values.
:::

You have now finished a tutorial showing the basics of Flojoy.