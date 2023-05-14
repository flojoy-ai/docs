---
sidebar_position: 2
id: introduction
title: Flojoy UI Introduction
---

# WIP

Welcome to Flojoy!

This introduction tutorial will guide you through the UI including how to create a simple app.

Upon starting Flojoy you should be greeted to a UI like this:

![image](/img/introduction/UI.png)
*UI at start up including an example app.*

:::info
The UI could look slightly different in your version of Flojoy. We're constantly improving the UI.
:::

In this page, we will guide you through how to control the interface including: adding nodes, adding parameter controls, and running the app. First let's break down the UI.

### The UI

![image](/img/introduction/UI_2.png)
*Interface broken down into sections*

Here are the sections of the interface:

1) The red box outlines the app interface showing the nodes and the connection between them. You can drag and zoom in/out of the interface here as required.

2) The button in the green box toggles between dark and light color schemes for Flojoy. The file button in pink contains the controls for loading and saving apps. The play button runs the current app.

3) The status of the interface is shown here (e.g. waiting for a new job, running the job.)

4) The green box here shows the different tabs availble to you. The tab currently selected here is 'SCRIPT'. The 'CTRLS' tab is for controlling node parameters.

5) The 'Add Nodes' button opens the interface for addition of new nodes.

Flojoy works through the use of these connected nodes. Each node has a specific function.


### Adding some nodes.

When flojoy is first launched, an example app is shown. We want a clean slate here so delete all nodes by shift, click, dragging over them and pressing backspace/delete. You can also click indiviual on individual nodes and delete them (this also works with node connections).

:::info
On some platforms the delete button will delete nodes, while on others backspace will. 
:::

Then with the default nodes cleared we can add ours. Click on "Add Node" at the top right and click on "Generators -> SIMULATION -> Random (Uniform)" in the submenu that opens up. 

![image](/img/introduction/add_nodes.png)
*The add node submenu.*

This is your first node! This one creates randomized data. Next add two more nodes: linspace, scatter, histogram and a terminator (or end). You can use the search bar at the top of the submenu to easily find specific nodes. Next arange the nodes as below. The exact placment of nodes is not important, the node connections do.

![image](/img/introduction/nodes.png)
*The exact placement of the nodes is not too important.*

Next connect the nodes together. To do this, click and drag starting from one of the small boxes at the left or right of a node. Connect the nodes as seen below. Note the flojoy will run the nodes in order from left to right.

![image](/img/introduction/connections.png)
*The connections must match exactly.*

### Running and saving the app.

At the top right of the interface click on "SCRIPT". You can then click the blue "Play" button at the top right to run the app. If one node turns red an error has occurred in that node. Great! You've ran you're first app. You can click on "DEBUG" to see a summary of the output from each node (DEBUG is one of three tabs in the top left).

To save the app for later use, click on "File -> Save As" in the top right and save the txt file with the desired name and location. You can also load an already saved app from here as well using "File -> Load".

![image](/img/introduction/results.png)
*The results can be seen in the DEBUG menu.*
