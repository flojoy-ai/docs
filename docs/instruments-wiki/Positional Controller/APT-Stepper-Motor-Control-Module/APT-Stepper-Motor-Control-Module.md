---
title: APT Stepper Motor Control Module
description: The APT™ MST602 module is a dual-channel, high-resolution, rack-mounted stepper motor driver designed for use with the APT MMR601 Motion Control 19" Modular Rack System. It has been designed to drive 2-phase bi-polar stepper motors up to 50 W, with or without encoder feedback, and is compatible with the full range of stepper-motor-equipped nanopositioning actuators and stages offered by Thorlabs. Alternatively, it is also compatible with any generic two-phase bi-polar motor of varying powers and varying cardinal step sizes.
keywords: [positional controller, Thorlabs, Instrumentkit]
slug: /instruments-wiki/positional-controller/thorlabs/apt-stepper-motor-control-module
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201267/Instruments/Positional%20Controller/APT-Stepper-Motor-Control-Module/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# APT Stepper Motor Control Module

## Instrument Card

<div className="flex">

<div>

The APT™ MST602 module is a dual-channel, high-resolution, rack-mounted stepper motor driver designed for use with the APT MMR601 Motion Control 19" Modular Rack System. It has been designed to drive 2-phase bi-polar stepper motors up to 50 W, with or without encoder feedback, and is compatible with the full range of stepper-motor-equipped nanopositioning actuators and stages offered by Thorlabs. Alternatively, it is also compatible with any generic two-phase bi-polar motor of varying powers and varying cardinal step sizes.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201267/Instruments/Positional%20Controller/APT-Stepper-Motor-Control-Module/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692126009/Instruments/Vendor%20Logos/Thorlabs.png" style={{ width: "100%", objectFit: "cover" }} />

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

To connect to an APT Stepper Motor Control Module Positional Controller using Instrumentkit, you can use the following code:

```python
import instrumentkit as ik

# Connect to the APT Stepper Motor Control Module Positional Controller
controller = ik.thorlabs.APTMotorController.open_serial("/dev/ttyUSB0", baud=115200)

# Get the first channel of the controller
channel = controller.channel[0]

# Set the motor model for the channel
channel.motor_model = "PRM1-Z8"

# Move the motor to a specific position
channel.move(1000)  # Move to position 1000 (encoder counts)

# Get the current position of the motor
position = channel.position
print(f"Current position: {position}")
```

This code connects to the APT Stepper Motor Control Module Positional Controller using the `open_serial` method, specifying the serial port and baud rate. It then gets the first channel of the controller and sets the motor model to "PRM1-Z8". Finally, it moves the motor to position 1000 and retrieves the current position of the motor.

</TabItem>
</Tabs>