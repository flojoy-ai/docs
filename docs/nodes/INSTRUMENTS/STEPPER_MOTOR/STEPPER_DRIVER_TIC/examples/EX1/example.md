<!--- Add SEO here --->

In this example, the [`STEPPER_DRIVER_TIC`](https://github.com/flojoy-io/nodes/blob/main/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC/STEPPER_DRIVER_TIC.py) node controls a stepper motor movement with a TIC driver.

First, the user must define the current limitation, which depends on the motor's size and model.
After that, he can set the speed and choose the sleep time between movements.

Then, after clicking the PLAY button, the motor will move between the four default positions. (To choose positions, use the [`STEPPER_DRIVER_TIC_KNOB`](https://github.com/flojoy-io/nodes/blob/main/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC_KNOB/STEPPER_DRIVER_TIC_KNOB.py) node.)

To create a repetitive movement, use the [`LOOP`](https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/LOOP/LOOP.py) node to create a loop around the [`STEPPER_DRIVER_TIC`](https://github.com/flojoy-io/nodes/blob/main/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC/STEPPER_DRIVER_TIC.py) node.
