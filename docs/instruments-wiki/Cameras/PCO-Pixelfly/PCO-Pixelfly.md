---
title: Connecting to PCO Pixelfly by PCO in Python
sidebar_label: PCO Pixelfly
description: The pco.pixelfly™ 1.3 SWIR is a high-performance machine vision camera due to its special InGaAs image sensor which is sensitive in the shortwave infrared, near infrared and visible range of the electromagnetic spectrum.
keywords: [cameras, PCO, Instrumental]
slug: /instruments-wiki/cameras/pco/PCO-pixelfly
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692197340/Instruments/Cameras/PCO-Pixelfly/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PCO Pixelfly

## Instrument Card

<div className="flex">

<div>

The pco.pixelfly™ 1.3 SWIR is a high-performance machine vision camera due to its special InGaAs image sensor which is sensitive in the shortwave infrared, near infrared and visible range of the electromagnetic spectrum.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692197340/Instruments/Cameras/PCO-Pixelfly/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125982/Instruments/Vendor%20Logos/PCO.png" style={{ width: "100%", objectFit: "cover" }} />

**PCO** is one of the leading manufacturers of scientific **cameras**: sCMOS & Highspeed **camera** systems, developed and produced in Kelheim Bavaria Germany. <a href="https://www.pco-tech.com">Website</a>.

<ul>
  <li>Headquarters: Germany</li>
  <li>Yearly Revenue (millions, USD): 7.0</li>
</ul>
</details>

## Connect to the PCO Pixelfly in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumental" label="Instrumental">

To connect to a PCO Pixelfly camera using Instrumental, you can use the following Python script:

```python
from instrumental import instrument, list_instruments

# List all available PCO Pixelfly cameras
cameras = list_instruments('Pixelfly')

# Connect to the first camera
camera = instrument(cameras[0])

# Set the camera mode
camera.set_mode(shutter='single', trig='software', exposure='10ms', hbin=1, vbin=1, gain='low', depth=12)

# Start live video
camera.start_live_video()

# Capture an image
image = camera.latest_frame()

# Stop live video
camera.stop_live_video()
# Close the camera connection
camera.close()
```

This script uses the `instrumental` library to list all available PCO Pixelfly cameras using the `list_instruments` function. It then connects to the first camera in the list using the `instrument` function. You can perform camera operations using the `camera` object, and finally, close the camera connection using the `close` method.

</TabItem>
</Tabs>