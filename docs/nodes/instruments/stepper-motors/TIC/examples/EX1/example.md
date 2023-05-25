The Flojoy app example above  with the Stepper driver Tic Knob node : 

### Connections :
- Connect the stepper motor driver to your computer
- Connect the Power supply to the motor
- Connect the Driver to the stepper motor

### Parameters : 
Parameters for both nodes : 
- CURRENT_LIMIT : Set the current limit from the power supply to the stepper motor
- SLEEP_TIME : Sleep time is used in the program to wait for the motor movement until continuing to other tasks.

Specific parameters for the node *Stepper Driver Tic Knob* :
- KNOB_VALUE : You can choose the motor rotation with the value of the knob (From 0 to 100 is corresponding to a
rotation between 0 and 360 degrees)
- SPEED : Define the speed of the motor. (Default is max speed).

### Visualisation : 
You don't need any visualization node because the result of the node is the motor movement. 

