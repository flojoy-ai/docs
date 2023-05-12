# Stepper motor control

This is a tutorial for using the Flojoy nodes
- Stepper Motor driver Tic, and 
- Stepper Driver motor Tic Knob 
- in order to control a motor with the Flojoy Studio

## Hardware required

- A stepper motor (we used a [Nema 15-23](https://www.pololu.com/category/140/nema-23-stepper-motors))
- A Tic motor driver (we used a [TIC T825](https://www.pololu.com/product/3131), but any Tic driver should work).
- A power supply with enough power to run the driver and  motor. (You'll need to setup the current value depending on your motor and your driver)
- Connection cables (USB, power supply leads, etc)

![TIC Driver Connections](https://res.cloudinary.com/dhopxs1y3/image/upload/v1683653875/steppermotor_z7yaly.jpg)
*Connection between the computer, the Tic driver, the stepper motor and the power supply* 

## Software required

Flojoy Studio (please see [Getting Started/Installation](https://docs.flojoy.io/getting-started/install/))

## Flojoy Node Management
- Input data: None
- Output node: End (To stop the process)

You don't necessarily need any node placed before the stepper motor nodes - the only data needed by the nodes is provided by the node's parameters.

## Node Parameters

There are two types of nodes for the Tic motor driver: 

1. First, the *Stepper Driver Tic node* which allows you to set 2 different speeds and 4 positions for the stepper motor. 
# TODO: Update this for an arbitrary number of positions, speeds, and sleep times
![Stepper node classic](https://res.cloudinary.com/dhopxs1y3/image/upload/v1683653875/steppernode_mssx65.png)
*Flojoy interface with the classic node* 

2. Secondly, the *Stepper Driver Tic Knob* node which allows you to control the rotation of the motor with a knob. 
You can choose the motor rotation with the value of the knob (From 0 to 100 is corresponding to a rotation between 0 and 360 degrees)
![Stepper node knob](https://res.cloudinary.com/dhopxs1y3/image/upload/v1683653875/steppernodeknob_qhsk73.png)
*Flojoy interface with the knob node* 

TODO: Example that uses these nodes with the LOOP node in order to make a repetitive movement with the motor. 




