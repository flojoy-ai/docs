---
title: Pi Camera
description: The v2 Camera Module has a Sony IMX219 8-megapixel sensor (compared to the 5-megapixel OmniVision OV5647 sensor of the original camera).
keywords: [cameras, Picam, Instrumental]
slug: /instruments-wiki/cameras/picam/pi-camera
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201109/Instruments/Cameras/Pi-Camera/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pi Camera

## Instrument Card

<div className="flex">

<div>

The v2 Camera Module has a Sony IMX219 8-megapixel sensor (compared to the 5-megapixel OmniVision OV5647 sensor of the original camera).

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201109/Instruments/Cameras/Pi-Camera/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125961/Instruments/Vendor%20Logos/RaspberryPi.png" style={{ width: "100%", objectFit: "cover" }} />

**Raspberry Pi** is a series of small single-board computers (SBCs) developed in the United Kingdom by the **Raspberry Pi** Foundation in association with Broadcom. <a href="https://www.raspberrypi.org/">Website</a>.

<ul>
  <li>Headquarters: UK</li>
  <li>Yearly Revenue (millions, USD): 44.0</li>
</ul>
</details>

## Connect to the Pi Camera in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumental" label="Instrumental">

To use Instrumental to connect to a Pi Camera, you can follow these steps:

1. Import the necessary modules:
```python
from instrumental import instrument, list_instruments
```

2. List the available instruments:
```python
instruments = list_instruments()
print(instruments)
```

3. Connect to a Pi Camera:
```python
camera = instrument(instruments[0])
```

4. Use the camera to capture an image:
```python
image = camera.grab_image()
```

5. Display the captured image:
```python
import matplotlib.pyplot as plt
plt.imshow(image)
plt.show()
```

Note: Make sure you have the necessary dependencies installed, such as `numpy`, `matplotlib`, and `picamera`.

</TabItem>
</Tabs>