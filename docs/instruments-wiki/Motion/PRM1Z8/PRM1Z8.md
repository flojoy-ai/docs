---
title: PRM1Z8
description: The PRM1Z8 is a small, compact, DC servo motorized 360° rotation mount and stage that accepts Ø1" optics and SM1-threaded components. The user can measure the angular displacement by using the Vernier dial in conjunction with the graduation marks that are marked on the rotating plate in 1° increments. This rotation stage/mount is also equipped with a home limit switch to facilitate automated rotation to the precise 0° position, allowing absolute angular positioning thereafter. The limit switch is designed to allow continuous rotation of the stage over multiple 360° cycles.
keywords: [motion, Thorlabs, Qcodes Community]
slug: /instruments-wiki/motion/thorlabs/prm1z8
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201127/Instruments/Motion/PRM1Z8/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PRM1Z8

## Instrument Card

<div className="flex">

<div>

The PRM1Z8 is a small, compact, DC servo motorized 360° rotation mount and stage that accepts Ø1" optics and SM1-threaded components. The user can measure the angular displacement by using the Vernier dial in conjunction with the graduation marks that are marked on the rotating plate in 1° increments. This rotation stage/mount is also equipped with a home limit switch to facilitate automated rotation to the precise 0° position, allowing absolute angular positioning thereafter. The limit switch is designed to allow continuous rotation of the stage over multiple 360° cycles.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201127/Instruments/Motion/PRM1Z8/file.png" style={{ width: "325px" }} />

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

## Connect to the PRM1Z8 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

To connect to a PRM1Z8 Motion using Qcodes Community, you can use the following Python script:

```python
from qcodes import Station
from qcodes_contrib_drivers.drivers.Thorlabs.PRM1Z8 import Thorlabs_PRM1Z8
from qcodes_contrib_drivers.drivers.Thorlabs.APT import Thorlabs_APT

# Create an instance of the Thorlabs APT server
apt = Thorlabs_APT()

# Connect to the PRM1Z8 polarizer wheel
prm1z8 = Thorlabs_PRM1Z8('prm1z8', device_id=1, apt=apt)

# Create a station and add the instrument
station = Station()
station.add_component(prm1z8)

# Connect to the instrument
station.connect(prm1z8)

# Now you can use the instrument
position = prm1z8.position()
print(f"Current position: {position} degrees")

# Set the position to 45 degrees
prm1z8.position(45)
```

Note that you need to have the `qcodes_contrib_drivers` package installed to use the `Thorlabs_PRM1Z8` and `Thorlabs_APT` classes.


</TabItem>
</Tabs>