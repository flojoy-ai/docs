
The example above show a simple Flojoy app for the PHIDGET22 node, before using it you'll need to connect all your devices and 
calibrate your sensors :

### Connection :
- Connect the PHIDGET Interfacekit to your computer with a USB Cable
- Connect the Flexiforce sensors with the Phidget Interfacekit using a Flexiforce adapter (See Image)


### Calibration :
- Apply some known pressures and measure induced voltages on your sensor. Use the Phidget control panel in order to do that.
It should be a linear relation between them and the calibration parameters are the coefficients of the line :
- Volt=Cal2*Pression+Cal1 --> Pression=Voltage-Cal1 / Cal2.

### Parameters :
After that you can set up the parameters for the Phidget22 node: 

- N_Sensors : Number of sensors
- Calibration 1 & 2 : Linear relation between pressure and voltage measurements

### Visualisation :
Before running choose the Visualisation node that fits your project to display the pressure measurements as you want.  

It's also possible to update pressure measurements with time using the LOOP node (See documentation).