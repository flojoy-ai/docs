---
title: CC126Mu
description: Kiralux 12.3 MP Monochrome CMOS Camera, Hermetically Sealed Cooled Package, USB 3.0 Interface, 1/4"-20 Taps
keywords: [cameras, Thorlabs, Instrumental]
slug: /instruments-wiki/cameras/thorlabs/cc126mu
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200939/Instruments/Cameras/CC126Mu/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CC126Mu

## Instrument Card

<div className="flex">

<div>

Kiralux 12.3 MP Monochrome CMOS Camera, Hermetically Sealed Cooled Package, USB 3.0 Interface, 1/4"-20 Taps

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200939/Instruments/Cameras/CC126Mu/file.png" style={{ width: "325px" }} />

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

## Connect to the CC126Mu in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumental" label="Instrumental">

To connect to a CC126Mu camera using Instrumental, you can use the following Python script:

```python
from instrumental import instrument, list_instruments

# List all available instruments
cameras = list_instruments()

# Connect to the first camera
camera = instrument(cameras[0])

# Perform operations on the camera
# For example, get the camera name
name = camera.name
print("Camera Name:", name)

# Close the connection to the camera
camera.close()
```

This script first lists all available instruments using the `list_instruments()` function from Instrumental. Then, it connects to the first camera in the list using the `instrument()` function. You can perform various operations on the camera, such as getting the camera name using the `name` property. Finally, the script closes the connection to the camera using the `close()` method.

</TabItem>
</Tabs>