---
title: LPS710E-M
description: The LPS710E(/M) Amplified Piezo Stage provides long range, fine focus Z-axis travel for a microscope slide while maintaining a compact, low-profile footprint. It features submicron repeatability, nanometer positioning resolution, low angular error, and fast millisecond response and settling times. When used with the LPSA1(/M) microscope slide holder, the stage is ideal for imaging modalities requiring sensitive sample positioning and sectioning, such as confocal laser scanning microscopy. This stage is not compatible with trans-illumination.
keywords: [positional controller, Thorlabs, Instrumentkit]
slug: /instruments-wiki/positional-controller/thorlabs/lps710e-m
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201296/Instruments/Positional%20Controller/LPS710E-M/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LPS710E-M

## Instrument Card

<div className="flex">

<div>

The LPS710E(/M) Amplified Piezo Stage provides long range, fine focus Z-axis travel for a microscope slide while maintaining a compact, low-profile footprint. It features submicron repeatability, nanometer positioning resolution, low angular error, and fast millisecond response and settling times. When used with the LPSA1(/M) microscope slide holder, the stage is ideal for imaging modalities requiring sensitive sample positioning and sectioning, such as confocal laser scanning microscopy. This stage is not compatible with trans-illumination.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201296/Instruments/Positional%20Controller/LPS710E-M/file.png" style={{ width: "325px" }} />

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

## Connect to the LPS710E-M in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

Here is an example Python script that uses Instrumentkit to connect to a LPS710E/M Positional Controller:

```python
from instrumentkit import Instrument, usb

# Define the USB vendor and product IDs for the LPS710E/M Positional Controller
vendor_id = 0x04B4
product_id = 0x00F1

# Connect to the LPS710E/M Positional Controller
controller = Instrument(usb.USBInstrumentDriver(vendor_id, product_id))

# Perform operations on the controller
# For example, move the controller to position 1000
controller.send_command("MOV 1000")

# Close the connection to the controller
controller.close()
```

Note: This code assumes that you have installed the `instrumentkit` package and imported the necessary modules.

</TabItem>
</Tabs>