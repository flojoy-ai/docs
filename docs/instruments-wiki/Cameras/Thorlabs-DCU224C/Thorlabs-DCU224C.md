---
title: Thorlabs-DCU224C
description: DCU224C - CCD Camera, 1280 x 1024 Resolution, Color, USB 2.0
keywords: [cameras, Thorlabs, Instrumental]
slug: /instruments-wiki/cameras/thorlabs/thorlabs-dcu224c
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692209983/Instruments/Cameras/Thorlabs-DCU224C/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Thorlabs-DCU224C

## Instrument Card

<div className="flex">

<div>

DCU224C - CCD Camera, 1280 x 1024 Resolution, Color, USB 2.0

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692209983/Instruments/Cameras/Thorlabs-DCU224C/file.png" style={{ width: "325px" }} />

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

## Connect to the Thorlabs-DCU224C in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumental" label="Instrumental">

To connect to a Thorlabs DCU224C camera using Instrumental, you can use the following Python script:

```python
from instrumental import instrument, list_instruments

# List all available instruments
print(list_instruments())

# Connect to the Thorlabs DCU224C camera
cam = instrument('Thorlabs - DCU224C')

# Set camera parameters
cam.exposure = 10  # Set exposure time to 10 ms
cam.gain = 1.5  # Set gain to 1.5

# Capture an image
image = cam.grab_image()

# Display the image
import matplotlib.pyplot as plt
plt.imshow(image)
plt.show()

# Disconnect from the camera
cam.close()
```

This script first lists all available instruments using the `list_instruments()` function. Then, it connects to the Thorlabs DCU224C camera using the `instrument()` function. You can set camera parameters such as exposure time and gain using the appropriate attributes of the camera object (`cam.exposure` and `cam.gain` in this example). Finally, it captures an image using the `grab_image()` method and displays it using matplotlib. The camera is then closed using the `close()` method.

</TabItem>
</Tabs>