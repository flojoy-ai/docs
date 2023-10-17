---
title: Connecting to Pi Camera by Picam in Python
sidebar_label: Pi Camera
description: The v2 Camera Module has a Sony IMX219 8-megapixel sensor (compared to the 5-megapixel OmniVision OV5647 sensor of the original camera).
keywords: [cameras, Picam, Instrumental]
slug: /instruments-database/cameras/picam/pi-camera
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395147/Instruments/Cameras/Pi-Camera/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pi Camera

## Instrument Card

<div className="flex">

<div>

The v2 Camera Module has a Sony IMX219 8-megapixel sensor (compared to the 5-megapixel OmniVision OV5647 sensor of the original camera).

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395147/Instruments/Cameras/Pi-Camera/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.raspberrypi.com/documentation/accessories/camera.html">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: MZ2000</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806122/Instruments/Vendor%20Logos/RaspberryPi.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

**Raspberry Pi** is a series of small single-board computers (SBCs) developed in the United Kingdom by the **Raspberry Pi** Foundation in association with Broadcom.

<ul>
  <li>Headquarters: UK</li>
  <li>Yearly Revenue (millions, USD): 44.0</li>
  <li>Vendor Website: <a href="https://www.raspberrypi.org/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='WIDGET2000' manufacturer='MZ2000'></FeaturedInstrumentVideo>


## Connect to the Pi Camera in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
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