---
title: LDA-302P-1N
description: The LDA-302P-1N Lab Brick USB programmable 50 Ohm digital attenuator has an input power of up to +33 dBm, and offers frequency coverage of 10 to 3,000 MHz. It has an attenuation range of 63 dB and a step size of 1.0 dB. The unit is powered and controlled by USB connection to a PC or self-powered hub, and is programmable for fixed attenuation or swept attenuation ramps directly from the included graphical user interface (GUI) software.
keywords: [digital attenuator, Vaunix, Qcodes Community]
slug: /instruments-wiki/digital-attenuator/vaunix/lda-302p-1n
image: https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106820/Instruments/Digital%20Attenuator/LDA-302P-1N/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LDA-302P-1N

## Instrument Card

<div className="flex">

<div>

The LDA-302P-1N Lab Brick USB programmable 50 Ohm digital attenuator has an input power of up to +33 dBm, and offers frequency coverage of 10 to 3,000 MHz. It has an attenuation range of 63 dB and a step size of 1.0 dB. The unit is powered and controlled by USB connection to a PC or self-powered hub, and is programmable for fixed attenuation or swept attenuation ramps directly from the included graphical user interface (GUI) software.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106820/Instruments/Digital%20Attenuator/LDA-302P-1N/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125985/Instruments/Vendor%20Logos/Vaunix.png" style={{ width: "100%", objectFit: "cover" }} />

Vaunix Technology Corp. designs, manufactures, and services RF and microwave test equipment and digital radio communications products. Utilizing our deep RF and software engineering expertise, rooted in microwave radio and wireless equipment repair and testing, Vaunix developed the Lab Brick® family of electronic test products, which set a new standard for cost, size, and simplicity of wireless testing devices. Powered by a USB connection and controlled by easy-to-use, graphical-user-interface (GUI) software, Lab Bricks have been designed to meet the needs of wireless engineers and technicians who want to create flexible, customized system solutions either in the lab or in the field. We 've expanded our Lab Brick® family of electronic test products to include Attenuator Matrix solutions that double as Wireless [Handover Test Systems](https://vaunix.com/handover-test-systems/) to give our test technicians and product engineers the advanced capability to solve unique wireless _handover _testing challenges and bring affordability, functionality, reliability and simplicity to the microwave test bench. <a href="https://vaunix.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
</ul>
</details>

## Connect to the LDA-302P-1N in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

Here is a Python script that uses Qcodes Community to connect to a LDA-302P-1N Digital Attenuator:

```python
from qcodes import Station
from qcodes_contrib_drivers.drivers.Vaunix_LDA import LDA

# Create a station to hold the instrument
station = Station()

# Connect to the LDA-302P-1N Digital Attenuator
lda = LDA('lda', serial_number=12345678)

# Add the LDA to the station
station.add_component(lda)

# Print the IDN of the LDA
print(lda.get_idn())

# Set the attenuation to 10 dB
lda.attenuation(10)

# Close the connection to the LDA
lda.close()
```

Note: Replace `12345678` with the actual serial number of your LDA-302P-1N Digital Attenuator.

</TabItem>
</Tabs>