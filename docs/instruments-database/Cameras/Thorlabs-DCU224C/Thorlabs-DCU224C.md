---
title: Connecting to Thorlabs-DCU224C by Thorlabs in Python
sidebar_label: Thorlabs-DCU224C
description: DCU224C - CCD Camera, 1280 x 1024 Resolution, Color, USB 2.0
keywords: [cameras, Thorlabs, Instrumental]
slug: /instruments-database/cameras/thorlabs/thorlabs-dcu224c
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692718981/Instruments/Cameras/Thorlabs-DCU224C/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Thorlabs-DCU224C

## Instrument Card

<div className="flex">

<div>

DCU224C - CCD Camera, 1280 x 1024 Resolution, Color, USB 2.0

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692718981/Instruments/Cameras/Thorlabs-DCU224C/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.thorlabs.com/_sd.cfm?fileName=ITN000493-D02.pdf&partNumber=DCU224C">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: THORLABS</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126009/Instruments/Vendor%20Logos/Thorlabs.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Thorlabs, Inc. is an American privately held optical equipment company headquartered in Newton, New Jersey. The company was founded in 1989 by Alex Cable, who serves as its current president and CEO. As of 2018, Thorlabs has annual sales of approximately $500 million.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 550.0</li>
  <li>Vendor Website: <a href="https://www.thorlabs.com/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='CAMERAS' manufacturer='THORLABS'></FeaturedInstrumentVideo>


## Connect to the Thorlabs-DCU224C in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='CAMERAS' manufacturer='THORLABS'></NodeCardCollection>

</TabItem>
<TabItem value="Instrumental" label="Instrumental">

To connect to a Thorlabs-DCU224C camera using Instrumental, you can use the following Python script:

```python
from instrumental import instrument, list_instruments

# List all available instruments
print(list_instruments())

# Connect to the Thorlabs-DCU224C camera
cam = instrument('Thorlabs-DCU224C')

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

This script first lists all available instruments using the `list_instruments()` function. Then, it connects to the Thorlabs-DCU224C camera using the `instrument()` function. It captures an image using the `grab_image()` method and displays it using matplotlib. Finally, it closes the connection to the camera using the `close()` method.

</TabItem>
</Tabs>