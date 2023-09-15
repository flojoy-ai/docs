---
sidebar_position: 2
id: introduction
title: Flojoy UI Introduction
---

# Introduction to the Flojoy UI

Welcome to Flojoy!

This introduction tutorial will guide you through the UI, including how to create a simple app.

Upon starting Flojoy you should be greeted to a UI like this:

![image](/img/introduction/UI.png)
_UI at startup showing an example app._

:::info
The UI could look slightly different in your version of Flojoy. We are constantly improving the UI.
:::

In this page, we will guide you through how to control the interface, including adding nodes and running the app.

First, let's break down the UI.

### The UI

![image](/img/introduction/UI_2.png)
_Interface broken down into sections._

Here are the sections of the interface:

1. The red box outlines the app interface showing the nodes and the connection between them. You can drag and zoom in/out of the interface here as required.

2. The button in the green box opens the interface for adding nodes.

3. In the yellow box, the `Play` button runs the current app. The `File` button opens a submenu for saving and loading apps. The gear button opens a submenu for changing various options. The crescent moon button toggles between light and dark modes. The `Clear Canvas` button clears all nodes in the main display.

4. The status of the interface is shown in the blue box (e.g. waiting for a new job, running the job, etc.)

Flojoy works through the use of connected nodes, and each node has a specific function.

### Adding some nodes

When Flojoy is first launched, an example app is shown. We want a clean slate here so delete all nodes by pressing the `Clear Canvas` button. You can also click on individual nodes and delete them (this also works with node connections).

:::info
On some platforms, the delete button will delete nodes, while on others, backspace will.
:::

With the default nodes cleared, we can now add our own.

Click on `Add Python Function` at the top right, then click on `Generate -> SIMULATIONS -> LINSPACE` in the submenu that opens up:

![image](/img/introduction/add_nodes.png)
_<br/>The submenu to add a node._

This is your first node! This one creates example linear data.

Next, add three more nodes: `RAND`, `SCATTER`, and `HISTOGRAM`. You can use the search bar at the top of the submenu to easily find specific nodes.

Finally, arange the nodes as below. The exact placment of the nodes is not important, the node connections will specify the order of the flow.

![image](/img/introduction/nodes.png)
_The exact placement of the nodes is not important._

To connect the nodes together, click and drag starting from one of the small circles at the left or right of a node. Connect the nodes as shown below.

![image](/img/introduction/connections.png)
_The connections must match exactly._

### Running and saving the app

Now that the nodes and connections are in place, you can run the app.

Press the `Play` button in the top right. After the app has run, you can see the results in the `SCATTER` and `HISTOGRAM` nodes. The `LINSPACE` and `RAND` nodes create X and Y data, respectively, shown in `SCATTER`.

![image](/img/introduction/results.png)
_The results can be seen after running the app._

To save the app for later use, click on `File -> Save As` in the top right, and save the .txt file with the desired name and location.

You can also load an already saved app from here using `File -> Load`.

[//]: # 'Edit page on GitHub'

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/general-tutorials/introduction.md)
