---
title: Connecting to Standa 10MWA168 by Standa in Python
sidebar_label: Standa 10MWA168
description: Motorized Variable Two Wheels Attenuators 10MWA168 consists of two filter wheels. Each wheel contains eight filter mounts of ØD mm with clear aperture of Ød mm. Each mount is inclined by 4 degrees to prevent mutual reflections between filters. We supply the attenuator 10MWA168-20 with a standard, most popular, set of filters. See the table below. Alternatively, optics could be manufactured to individual orders. Or we could supply the attenuator without filters, which you can fit by yourself. 10MWA168-1 model comes WITHOUT filters. You bring a filter of each wheel into the optical path easily by hand or using automation. A single step motor drives the two wheels. A computer can operate the filter attenuator via a controller. Controllers are sold separately. For fastening, the attenuator has clearance slots for M6 and M4 screws. There are also two M6 holes, and one M4 hole (opposite to one of the M6 holes). Material-> black anodized aluminium.
keywords: [lockin amplifiers, Standa, QCodes Community]
slug: /instruments-wiki/lockin-amplifiers/standa/standa-10mwa168
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395808/Instruments/Lockin%20Amplifiers/Standa-10MWA168/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Standa 10MWA168

## Instrument Card

<div className="flex">

<div>

Motorized Variable Two Wheels Attenuators 10MWA168 consists of two filter wheels. Each wheel contains eight filter mounts of ØD mm with clear aperture of Ød mm. Each mount is inclined by 4 degrees to prevent mutual reflections between filters. We supply the attenuator 10MWA168-20 with a standard, most popular, set of filters. See the table below. Alternatively, optics could be manufactured to individual orders. Or we could supply the attenuator without filters, which you can fit by yourself. 10MWA168-1 model comes WITHOUT filters. You bring a filter of each wheel into the optical path easily by hand or using automation. A single step motor drives the two wheels. A computer can operate the filter attenuator via a controller. Controllers are sold separately. For fastening, the attenuator has clearance slots for M6 and M4 screws. There are also two M6 holes, and one M4 hole (opposite to one of the M6 holes). Material: black anodized aluminium.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395808/Instruments/Lockin%20Amplifiers/Standa-10MWA168/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-wiki/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806162/Instruments/Vendor%20Logos/Standa.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Standa has it's own industrial base that includes CNC turning, milling, grinding machines. Standa's design department, while developing standard products presented in Standa's catalogue (such as motorized and manual translation and rotation stages, motion controllers, optical tables, vibration isolation systems, optical mounts and holders, optics, dpss lasers and etc.) also develops the equipment for OEM customers. Some examples of it, after the agreement with OEM customers, are shown on this website. Standa currently has several laser product development laboratories.

<ul>
  <li>Headquarters: Lithuania</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
  <li>Vendor Website: <a href="https://www.standa.lt/">here</a></li>
</ul>
</details>

## Connect to the Standa 10MWA168 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to a Standa 10MWA168 Lockin Amplifier using Qcodes Community, you can use the following Python script:

```python
from qcodes import Station, Instrument
from qcodes.instrument_drivers.standa.standa_10mwa168 import Standa_10MWA168

# Create a station to hold the instrument
station = Station()

# Create an instance of the Standa_10MWA168 instrument
standa = Standa_10MWA168('standa', serial_number='your_serial_number')

# Add the instrument to the station
station.add_component(standa)

# Connect to the instrument
standa.connect()

# Now you can use the instrument's parameters and methods
# For example, to get the current position:
position = standa.position.get()
print(f"Current position: {position}")

# To set the transmittance:
standa.transmittance.set(2)  # Set transmittance to 0.9

# Disconnect from the instrument
standa.disconnect()
```

Note: Replace `'your_serial_number'` with the actual serial number of your Standa 10MWA168 Lockin Amplifier.

</TabItem>
</Tabs>