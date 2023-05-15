---
sidebar_position: 3
id: PHIDGET 22
title: Pressure Measurement with Phidget 22 sensors
---
-This tutorial explain how to use the node called Phidget 22 to record pressure measurements from Flexiforce sensors using a Phidget InterfaceKit

## Hardware required : 
- A Phidget InterfaceKit (Model 8/8/8 1018_3 is the one we used to develop the node)
- N pressure sensors (This tutorial will present measurement from FlexiForce sensor but you can use all the Sensors compatible with Phidget.
- Connections cables (USB, Electronic cables)


## Software required :
- Flojoy software running (Go to the page -- Getting started/Installation)
- Phidget 22 PAckage -- (It should be installed automatically from Requirements) (Otherwise follow docs from : https://www.phidgets.com/docs/Main_Page)

## Connection :
- Connect the PHIDGET Interfacekit to your computer with an USB Cable
- Connect the Flexiforce sensors with the Phidget Interfacekit using a Flexiforce adapter (See Image)

![Phidget-sensor](https://res.cloudinary.com/dhopxs1y3/image/upload/v1681998936/flojoy-docs/Phidget22/Phidget22_sensor_somv3v.jpg)

 ## Node Management and measurements parameters :

The PHIDGET22 node doesn't need any data input, so it can be placed on the left on the Flojoy interface : 

![Phidget-nodes](https://res.cloudinary.com/dhopxs1y3/image/upload/v1681998928/flojoy-docs/Phidget22/PHIDGET22_nodeswithloop_fcsmeg.png)

You need to specify is the number of pressure sensors you are using for your experiment and then you can start your calibration 

## Calibration :

In order to Calibrate your sensor, you'll need to apply some known pressures and measure induced voltages on your sensor. (Possibility to use the Phidget control panel to do that). 

From these measurements you deduce the relation between the voltage and the pressure applied on the sensor and you can use operationnal
nodes in order to convert voltage into pressures.

## Visualisation :

After that you can choose your Visualisation node that fits your project to display the pressure measurements as you want.  

Also you can use the loop node (See documentation) in order to update the measurements, you can set the parameters you want for the loops
(Delay, number of loops, etc..) 

![Phidgets nodes with loop](https://res.cloudinary.com/dhopxs1y3/image/upload/v1681998928/flojoy-docs/Phidget22/PHIDGET22_nodes_frmvux.png)


