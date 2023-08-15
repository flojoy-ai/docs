
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# APT Stepper Motor Control Module

## Instrument Card

<div className="flex">

<div>

The APT™ MST602 module is a dual-channel, high-resolution, rack-mounted stepper motor driver designed for use with the APT MMR601 Motion Control 19" Modular Rack System. It has been designed to drive 2-phase bi-polar stepper motors up to 50 W, with or without encoder feedback, and is compatible with the full range of stepper-motor-equipped nanopositioning actuators and stages offered by Thorlabs. Alternatively, it is also compatible with any generic two-phase bi-polar motor of varying powers and varying cardinal step sizes.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692107056/Instruments/Positional%20Controller/APT-Stepper-Motor-Control-Module/file.jpg" style={{width:"256px", height: "200px"}} />

</div>

The APT™ MST602 module is a dual-channel, high-resolution, rack-mounted stepper motor driver designed for use with the APT MMR601 Motion Control 19" Modular Rack System. It has been designed to drive 2-phase bi-polar stepper motors up to 50 W, with or without encoder feedback, and is compatible with the full range of stepper-motor-equipped nanopositioning actuators and stages offered by Thorlabs. Alternatively, it is also compatible with any generic two-phase bi-polar motor of varying powers and varying cardinal step sizes.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126009/Instruments/Vendor%20Logos/Thorlabs.png" style={{ width:"200px", height: "150px"}} />

Thorlabs, Inc. is an American privately held optical equipment company headquartered in Newton, New Jersey. The company was founded in 1989 by Alex Cable, who serves as its current president and CEO. As of 2018, Thorlabs has annual sales of approximately $500 million. <a href="https://www.thorlabs.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 550.0</li>
</ul>
</details>

## Connect to the APT Stepper Motor Control Module in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

Here is an example Python script that uses Instrumentkit to connect to an APT Stepper Motor Control Module Positional Controller:

```python
from instrumentkit import APTMotor

# Connect to the APT Stepper Motor Control Module Positional Controller
controller = APTMotor("COM1")

# Initialize the controller
controller.initialize()

# Set the velocity and acceleration parameters
controller.velocity = 100  # in steps per second
controller.acceleration = 1000  # in steps per second squared

# Move the motor to a specific position
controller.move_to_position(5000)  # in steps

# Close the connection to the controller
controller.close()
```

Note: Replace `"COM1"` with the appropriate serial port or connection identifier for your specific setup.

</TabItem>
</Tabs>