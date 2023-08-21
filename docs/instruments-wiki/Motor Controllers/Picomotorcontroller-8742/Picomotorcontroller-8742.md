---
title: Connecting to Picomotorcontroller 8742 by Newport in Python
sidebar_label: Picomotorcontroller 8742
description: The model 8742 is a 4-axis open-loop intelligent motion controller/driver that provides a compact and low cost solution for driving New Focus open-loop Picomotors products. It is a single-box solution that can be computer controlled via USB and Ethernet communication interfaces using Newport Motion Control Language (NMCL) command set. Both interfaces are well supported via Windows DLL, sample LabVIEW™VIs, and intuitive graphical user interface (GUI) Windows application with device auto-discovery feature. Each model 8742 controller/driver can control one of four 4-pin RJ-22 single output ports for use with any single-channel Picomotor actuator at any given time. The model 8725 multi-axis adapter can be used to connect the 4-pin RJ-22 output ports on the drivers to New Focus™ Picomotor products with 6-pin RJ-11 connectors. Note-> Power Supply not included
keywords: [motor controllers, Newport, InstrumentKit]
slug: /instruments-wiki/motor-controllers/newport/picomotorcontroller-8742
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692394035/Instruments/Motor%20Controllers/Picomotorcontroller-8742/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Picomotorcontroller 8742

## Instrument Card

<div className="flex">

<div>

The model 8742 is a 4-axis open-loop intelligent motion controller/driver that provides a compact and low cost solution for driving New Focus open-loop Picomotors products. It is a single-box solution that can be computer controlled via USB and Ethernet communication interfaces using Newport Motion Control Language (NMCL) command set. Both interfaces are well supported via Windows DLL, sample LabVIEW™VIs, and intuitive graphical user interface (GUI) Windows application with device auto-discovery feature. Each model 8742 controller/driver can control one of four 4-pin RJ-22 single output ports for use with any single-channel Picomotor actuator at any given time. The model 8725 multi-axis adapter can be used to connect the 4-pin RJ-22 output ports on the drivers to New Focus™ Picomotor products with 6-pin RJ-11 connectors. Note: Power Supply not included

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692394035/Instruments/Motor%20Controllers/Picomotorcontroller-8742/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125992/Instruments/Vendor%20Logos/Newport.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Newport provides a wide range of photonics technology and products designed to enhance the capabilities and productivity of our customers' applications. <a href="https://www.newport.com/">Website</a>.

<ul>
  <li>Headquarters: Irvine, California, United States</li>
  <li>Yearly Revenue (millions, USD): 3500.0</li>
</ul>
</details>

## Connect to the Picomotorcontroller 8742 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="InstrumentKit" label="InstrumentKit">

To connect to a Picomotorcontroller 8742 Positional Controller using Instrumentkit, you can use the following code:

```python
import instrumentkit as ik

# Define the IP address and port of the controller
ip = "192.168.1.2"
port = 23

# Open a TCP/IP connection to the controller
controller = ik.newport.PicoMotorController8742.open_tcpip(ip, port)

# Set the controller address (if using multiple controllers)
controller.controller_address = 1

# Get the first axis of the controller
axis = controller.axis[0]

# Move the motor relative to its current position
axis.move_relative = 100

# Close the connection to the controller
controller.close()
```

This code establishes a TCP/IP connection to the Picomotorcontroller 8742 at the specified IP address and port. It then sets the controller address (if using multiple controllers) and gets the first axis of the controller. Finally, it moves the motor relative to its current position by 100 steps and closes the connection to the controller.

</TabItem>
</Tabs>