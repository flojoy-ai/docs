<!--- Add SEO here --->

In this example app, the [`CAMERA`](https://github.com/flojoy-io/nodes/blob/main/INSTRUMENTS/WEB_CAM/CAMERA/CAMERA.py) node takes and returns a picture from a camera connected to the computer.

Before using the node, you'll need to define the Camera index in the node parameter to choose your Camera (Webcam, USB camera, ..).

To do that, you can follow this ['Link'](https://stackoverflow.com/questions/57577445/list-available-cameras-opencv-python?fbclid=IwAR2PJTQGE7QohTPChRG_N6hk07gjaGDnanT02aWX0oYvr9ytNGzdSkEC48c) and run the python script to list all the cameras available on your computer and select the one you want to use. (The index is the port where the camera is connected).

The [`IMSHOW`](https://github.com/flojoy-io/nodes/blob/main/VISUALIZERS/PLOTLY/TABLE/TABLE.py) node displays the image taken by the camera selected.
