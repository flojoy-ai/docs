---
sidebar_position: 2
id: camera
title: Camera example
---

In this page, we will go through an example of simple data aquisition from a camera using OpenCV. Also covered will be a general guide on how to create a flojoy app including node parameters and saving the app. 

If a camera is available, a picture will be taken. Also included are nodes for image smoothing and object detection with OpenCV functions.

:::info
If OpenCV cannot load a camera, an example image will be loaded to perform the image smoothing and object detection with.
:::

:::caution
This example has not been tested with macOS.
:::

### Adding the required nodes.

When flojoy is first launched, an example app is shown. Simply delete all nodes by clicking on them and pressing backspace.

![image](/img/camera/CAMERA_start.png)
*Example app at start up.*

Next add the nodes necessary for your app; for this example you add CAMERA, IMAGE_SMOOTHING, OBEJCT_DETECTION and END. To add nodes, look in the top left and click the blue "+ Add Node". A menu will appear showing the selection of nodes to add. All nodes all grouped together in sections. 

![image](/img/camera/CAMERA_add_node.png)<br />*Click "+ Add Node".*

![image](/img/camera/CAMERA_add_node2.png)<br />

For CAMERA, the grouping is "Loaders -> LOADER -> Camera". You can also choose to search for the required node in the search bar.

![image](/img/camera/CAMERA_add_node3.png)<br />*Add Node selection menu.*

![image](/img/camera/CAMERA_search.png)<br />*Searching for a node.*

Add CAMERA, IMAGE_SMOOTHING, OBEJCT_DETECTION and END nodes. You then must connect the nodes as shown below by clicking and dragging from one small grey box the the next. The thin grey lines show the node connections. You can delete individual node connections by clicking on them and pressing backspace. 

![image](/img/camera/CAMERA_nodes.png)<br />*Required nodes connected.*

### Adding the CTRLS/parameters.

The next step is the addition of the CTRLS (controls) which allow control over behavior of indiviual nodes. In the top left of the interface, click "CTRLS". Then in the top right click on the grey switch next to "Edit". It will turn green. Click on the the "+ Add" button to add controls. A submenu will open allowing you to choose controls to add. For this example add two "Numeric Inputs" and one "Radio Button Group". 

![image](/img/camera/CAMERA_edit.png)<br />*Turning on CTRL edit mode.*

![image](/img/camera/CAMERA_addcontrols.png)<br />*Add controls.*

Once the controls are added, you can select the parameter each one will control with the drop down menu at the top of each box. For the numeric input select "CAMERA > CAMERA_IND" and "IMAGE_SMOOTHING > KERNEL" which allow you to choose the camera, and the degree of image smoothing respectively. For the "Radio Button Group" choose "IMAGE_SMOOTHING > SMOOTHING_TYPE" which allows the choice of which smoothing algorithm to use. You can leave the settings as the default for now.

![image](/img/camera/CAMERA_controls.png)

### Running and saving the app.

At the top right of the interface click on "SCRIPT". You can then click the blue "Play" button at the top right to run the app. If one node turns red an error has occurred in that node. You can click on "DEBUG" to see a summary of  the output from each node.

![image](/img/camera/CAMERA_run.png)<br />*The node currently being run glows like "OBJECT_DETECTION" here.*

To save the app for later use, click on "File -> Save As" in the top right and save the txt file with the desired name and location.

