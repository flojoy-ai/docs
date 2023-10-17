---
title: Connecting to LPS710E-M by Thorlabs in Python
sidebar_label: LPS710E-M
description: The LPS710E(/M) Amplified Piezo Stage provides long range, fine focus Z-axis travel for a microscope slide while maintaining a compact, low-profile footprint. It features submicron repeatability, nanometer positioning resolution, low angular error, and fast millisecond response and settling times. When used with the LPSA1(/M) microscope slide holder, the stage is ideal for imaging modalities requiring sensitive sample positioning and sectioning, such as confocal laser scanning microscopy. This stage is not compatible with trans-illumination.
keywords: [motor controllers, Thorlabs, InstrumentKit]
slug: /instruments-database/motor-controllers/thorlabs/lps710e-m
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692393994/Instruments/Motor%20Controllers/LPS710E-M/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LPS710E-M

## Instrument Card

<div className="flex">

<div>

The LPS710E(/M) Amplified Piezo Stage provides long range, fine focus Z-axis travel for a microscope slide while maintaining a compact, low-profile footprint. It features submicron repeatability, nanometer positioning resolution, low angular error, and fast millisecond response and settling times. When used with the LPSA1(/M) microscope slide holder, the stage is ideal for imaging modalities requiring sensitive sample positioning and sectioning, such as confocal laser scanning microscopy. This stage is not compatible with trans-illumination.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692393994/Instruments/Motor%20Controllers/LPS710E-M/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.thorlabs.com/_sd.cfm?fileName=ETN035405-D02.pdf&partNumber=LPS710E">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126009/Instruments/Vendor%20Logos/Thorlabs.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Thorlabs, Inc. is an American privately held optical equipment company headquartered in Newton, New Jersey. The company was founded in 1989 by Alex Cable, who serves as its current president and CEO. As of 2018, Thorlabs has annual sales of approximately $500 million.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 550.0</li>
  <li>Vendor Website: <a href="https://www.thorlabs.com/">here</a></li>
</ul>
</details>

## Connect to the LPS710E-M in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="InstrumentKit" label="InstrumentKit">

To connect to a LPS710E/M Positional Controller using Instrumentkit, you can use the following code:

```python
import instrumentkit as ik

# Connect to the LPS710E/M Positional Controller
controller = ik.thorlabs.LPS710EM.open_serial("/dev/ttyUSB0", baud=115200)

# Get the channel object for channel 1
channel = controller.channel[0]

# Enable the channel
channel.enabled = True

# Move the channel to a specific position
channel.move(100)  # Move to position 100 (encoder counts)

# Get the current position of the channel
position = channel.position
print(f"Current position: {position}")
```

This code connects to the LPS710E/M Positional Controller using the `open_serial` method, specifying the serial port and baud rate. It then retrieves the channel object for channel 1 and enables it. The channel is then moved to a specific position using the `move` method, and the current position is printed.

</TabItem>
</Tabs>