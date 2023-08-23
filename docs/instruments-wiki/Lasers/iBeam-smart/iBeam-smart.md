---
title: Connecting to iBeam smart by Toptica in Python
sidebar_label: iBeam smart
description: The iBeam smart is the ultimate choice when looking for a high-performance, ultra-reliable OEM single mode diode laser system. Record values at output power, combined with excellent power and beam pointing stability are setting the standard in the class of compact diode lasers. Its flexible, µ-processor based electronics will make system integration a snap. Features as FINE, SKILL and AUTOPULSE are capable to solve common problems of your application.
keywords: [lasers, Toptica, PyMeasure]
slug: /instruments-wiki/lasers/toptica/ibeam-smart
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395423/Instruments/Lasers/iBeam-smart/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# iBeam smart

## Instrument Card

<div className="flex">

<div>

The iBeam smart is the ultimate choice when looking for a high-performance, ultra-reliable OEM single mode diode laser system. Record values at output power, combined with excellent power and beam pointing stability are setting the standard in the class of compact diode lasers. Its flexible, µ-processor based electronics will make system integration a snap. Features as FINE, SKILL and AUTOPULSE are capable to solve common problems of your application.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395423/Instruments/Lasers/iBeam-smart/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.toptica.com/fileadmin/Editors_English/11_brochures_datasheets/01_brochures/toptica_BR_iBeam_smart_family.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806151/Instruments/Vendor%20Logos/Toptica.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

TOPTICA Photonics is a manufacturer of [lasers](https://en.wikipedia.org/wiki/Laser) for quantum technologies, biophotonics and material inspection.

<ul>
  <li>Headquarters: Germany</li>
  <li>Yearly Revenue (millions, USD): 75.0</li>
  <li>Vendor Website: <a href="https://www.toptica.com/">here</a></li>
</ul>
</details>

## Connect to the iBeam smart in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="PyMeasure" label="PyMeasure">

Here is a Python script that uses Pymeasure to connect to an iBeam Smart laser:

```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.toptica import IBeamSmart

# Create a VISA adapter and connect to the instrument
adapter = VISAAdapter("SomeResourceString")
laser = IBeamSmart(adapter)

# Set the output power of channel 2 to 1000 µW
laser.ch_2.power = 1000

# Enable channel 2
laser.ch_2.enabled = True

# Shutdown the laser
laser.shutdown()
```

Explanation:
1. Import the necessary modules from Pymeasure.
2. Create a `VISAAdapter` object by providing the resource string of the instrument.
3. Create an `IBeamSmart` object by passing the adapter to it.
4. Set the output power of channel 2 to 1000 µW by assigning the desired value to the `power` attribute of `ch_2`.
5. Enable channel 2 by assigning `True` to the `enabled` attribute of `ch_2`.
6. Shutdown the laser by calling the `shutdown` method of the `laser` object.

</TabItem>
</Tabs>