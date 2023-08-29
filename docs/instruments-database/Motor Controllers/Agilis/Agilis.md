---
title: Connecting to Agilis by Newport in Python
sidebar_label: Agilis
description: Agilis™ Piezo Motion Controllers provide convenient and compact fine positioning control of the Agilis family of piezo motion stages and mounts.
keywords: [motor controllers, Newport, InstrumentKit]
slug: /instruments-database/motor-controllers/newport/agilis
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692393991/Instruments/Motor%20Controllers/Agilis/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Agilis

## Instrument Card

<div className="flex">

<div>

Agilis™ Piezo Motion Controllers provide convenient and compact fine positioning control of the Agilis family of piezo motion stages and mounts.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692393991/Instruments/Motor%20Controllers/Agilis/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.newport.com/mam/celum/celum_assets/np/resources/Agilis_Piezo_Motor_Driven_Components_User_Manual.pdf?1">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806178/Instruments/Vendor%20Logos/Newport.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Newport provides a wide range of photonics technology and products designed to enhance the capabilities and productivity of our customers' applications.

<ul>
  <li>Headquarters: Irvine, California, United States</li>
  <li>Yearly Revenue (millions, USD): 3500.0</li>
  <li>Vendor Website: <a href="https://www.newport.com/">here</a></li>
</ul>
</details>

## Connect to the Agilis in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="InstrumentKit" label="InstrumentKit">

To connect to an Agilis Positional Controller using Instrumentkit, you can use the following code:

```python
from instrumentkit import serial
from instrumentkit import newport

# Connect to the controller
port = serial.SerialPort("COM5", baudrate=921600)
controller = newport.AGUC2(port)

# Reset the controller
controller.reset_controller()

# Print the firmware version
print(controller.firmware_version)

# Move the X axis relative by 1000 steps
controller.axis["X"].move_relative(1000)

# Activate jogging in mode 3 for the X axis
controller.axis["X"].jog = 3

# Stop the X axis
controller.axis["X"].stop()

# Query the step amplitude for the X axis
step_amplitude = controller.axis["X"].step_amplitude
print(step_amplitude)

# Set the positive step amplitude to +10 and the negative step amplitude to -20 for the X axis
controller.axis["X"].step_amplitude = (10, -20)

# Close the connection
controller.close()
```

This code connects to the Agilis Positional Controller on COM5 with a baud rate of 921600. It then performs various operations such as resetting the controller, printing the firmware version, moving the X axis relative by 1000 steps, activating jogging in mode 3 for the X axis, stopping the X axis, querying and setting the step amplitude for the X axis. Finally, it closes the connection to the controller.

</TabItem>
</Tabs>