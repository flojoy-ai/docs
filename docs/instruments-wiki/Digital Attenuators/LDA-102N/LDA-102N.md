---
title: Connecting to LDA-102N by Vaunix in Python
sidebar_label: LDA-102N
description: The LDA-102N Lab Brick USB programmable 50 Ohm digital attenuator has an input power of up to +22 dBm, and offers frequency coverage of 10 to 1,000 MHz. It has an attenuation range of 63 dB and a step size of 0.5 dB. The unit is powered and controlled by USB connection to a PC or self-powered hub, and is programmable for fixed attenuation or swept attenuation ramps directly from the included graphical user interface (GUI) software.
keywords: [digital attenuators, Vaunix, Qcodes Community]
slug: /instruments-wiki/digital-attenuators/vaunix/lda-102n
image: https://res.cloudinary.com/dhopxs1y3/image/upload/v1692310136/Instruments/Digital%20Attenuators/LDA-102N/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LDA-102N

## Instrument Card

<div className="flex">

<div>

The LDA-102N Lab Brick USB programmable 50 Ohm digital attenuator has an input power of up to +22 dBm, and offers frequency coverage of 10 to 1,000 MHz. It has an attenuation range of 63 dB and a step size of 0.5 dB. The unit is powered and controlled by USB connection to a PC or self-powered hub, and is programmable for fixed attenuation or swept attenuation ramps directly from the included graphical user interface (GUI) software.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692310136/Instruments/Digital%20Attenuators/LDA-102N/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125985/Instruments/Vendor%20Logos/Vaunix.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Vaunix Technology Corp. designs, manufactures, and services RF and microwave test equipment and digital radio communications products. Utilizing our deep RF and software engineering expertise, rooted in microwave radio and wireless equipment repair and testing, Vaunix developed the Lab Brick® family of electronic test products, which set a new standard for cost, size, and simplicity of wireless testing devices. Powered by a USB connection and controlled by easy-to-use, graphical-user-interface (GUI) software, Lab Bricks have been designed to meet the needs of wireless engineers and technicians who want to create flexible, customized system solutions either in the lab or in the field. We 've expanded our Lab Brick® family of electronic test products to include Attenuator Matrix solutions that double as Wireless [Handover Test Systems](https://vaunix.com/handover-test-systems/) to give our test technicians and product engineers the advanced capability to solve unique wireless _handover _testing challenges and bring affordability, functionality, reliability and simplicity to the microwave test bench. <a href="https://vaunix.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
</ul>
</details>

## Connect to the LDA-102N in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

Here is an example Python script that uses Qcodes Community to connect to a LDA-102N Digital Attenuator:

```python
from qcodes import Station
from qcodes.instrument_drivers.vaunix.LDA import LDA

# Create a station to hold the instruments
station = Station()

# Connect to the LDA-102N Digital Attenuator
lda = LDA('lda', serial_number=102)

# Add the LDA instrument to the station
station.add_component(lda)

# Print the IDN of the LDA instrument
print(lda.get_idn())

# Set the attenuation to 10 dB
lda.attenuation(10)

# Close the connection to the LDA instrument
lda.close()
```

Note: Make sure you have the necessary DLL files (`VNX_atten64.dll` for 64-bit Windows or `VNX_atten.dll` for 32-bit Windows) in the correct directory specified by `dll_path` in the script.

</TabItem>
</Tabs>