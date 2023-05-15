## Connection :
- Connect the PHIDGET Interfacekit to your computer with an USB Cable
- Connect the Flexiforce sensors with the Phidget Interfacekit using a Flexiforce adapter (See Image)

 ## Node Management and measurements parameters :

The PHIDGET22 node doesn't need any data input, so it can be placed on the left on the Flojoy interface : 

You need to specify is the number of pressure sensors you are using for your experiment and then you can start your calibration 

## Calibration :

In order to Calibrate your sensor, you'll need to apply some known pressures and measure induced voltages on your sensor. (Possibility to use the Phidget control panel to do that). 

From these measurements you deduce the relation between the voltage and the pressure applied on the sensor and you can use operationnal
nodes in order to convert voltage into pressures.

## Visualisation :

After that you can choose your Visualisation node that fits your project to display the pressure measurements as you want.  

Also, you can use the loop node (See documentation) in order to update the measurements, you can set the parameters you want for the loops
(Delay, number of loops, etc..) 