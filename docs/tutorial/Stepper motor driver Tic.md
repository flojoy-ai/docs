This is a tutorial for using the nodes called Stepper Motor driver Tic and Stepper Driver motor Tic Knob in order to control a motor with the Flojoy App

- Hardware required :

- A Motor (Nema 15-23)
- A Tic motor driver (All models are available and should work with these nodes) -- TIC T825 was used for experimentation. 
- A Power Supply wich enough power to run the driver and the motor. (You'll need to setup the good current value depending on the motor size you are using)
- Connections cables (USB, Electronic cables)
- Software required :

Flojoy software running (Go to the page -- Getting started/Installation)


Node Management :
- Input data : None
- Output node : End (To stop the process)

You don't need to have a node placed before the stepper motor nodes because the only data needed by the nodes is set up with the parameters. 


- Parameters : We have two types of node for the motor driver : 

First the Stepper Driver Tic node which allows you to set 2 different speeds and 4 positions for the stepper motor. 
The motor will move to the first two positions with first speed parameters and then move to position 3 and 4 with the second speed parameters 
(You can set the same speed for both and reduce the number of movement by settting the same position for 2,3 and 4)

Secondly the Stepper Driver Tic Knob node which allows you to control the rotation of the motor with a knob. 
You can choose the motor rotation with the value of the knob (From 0 to 100 is corresponding to a rotation between 0 and 360 degrees)

At the end of the process the stepper motor will be placed in the last position set up and wait for a new parameters for the next movement. 
It should be possible to use these nodes with the LOOP node in order to make a repetitive movement with the motor. 





