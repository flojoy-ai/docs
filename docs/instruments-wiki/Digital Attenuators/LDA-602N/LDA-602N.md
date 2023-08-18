---
title: Connecting to LDA-602N by Vaunix in Python
sidebar_label: LDA-602N
description: The LDA-602N Lab Brick USB programmable 50 Ohm digital attenuator has an input power of up to +22 dBm, and offers frequency coverage of 6 to 6,000 MHz. It has an attenuation range of 63 dB and a step size of 0.5 dB. The unit is powered and controlled by USB connection to a PC or self-powered hub, and is programmable for fixed attenuation or swept attenuation ramps directly from the included graphical user interface (GUI) software.
keywords: [digital attenuators, Vaunix, Qcodes Community]
slug: /instruments-wiki/digital-attenuators/vaunix/lda-602n
image: https://res.cloudinary.com/dhopxs1y3/image/upload/v1692310148/Instruments/Digital%20Attenuators/LDA-602N/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LDA-602N

## Instrument Card

<div className="flex">

<div>

The LDA-602N Lab Brick USB programmable 50 Ohm digital attenuator has an input power of up to +22 dBm, and offers frequency coverage of 6 to 6,000 MHz. It has an attenuation range of 63 dB and a step size of 0.5 dB. The unit is powered and controlled by USB connection to a PC or self-powered hub, and is programmable for fixed attenuation or swept attenuation ramps directly from the included graphical user interface (GUI) software.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692310148/Instruments/Digital%20Attenuators/LDA-602N/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

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

## Connect to the LDA-602N in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

To connect to a LDA-602N Digital Attenuator using Qcodes Community, you can use the following Python script:

```python
from qcodes import Station
from qcodes_contrib_drivers.drivers.Vaunix_LDA import LDA

# Create a station to hold the instruments
station = Station()

# Connect to the LDA-602N Digital Attenuator
lda = LDA('lda', serial_number=602, dll_path='path/to/dll')

# Add the LDA to the station
station.add_component(lda)

# Print the IDN of the LDA
print(lda.get_idn())

# Set the attenuation to 10 dB
lda.attenuation(10)

# Close the connection to the LDA
lda.close()
```

Note: Replace `'path/to/dll'` with the actual path to the directory that contains the Vaunix LDA DLL (`VNX_atten64.dll` for 64-bit Windows or `VNX_atten.dll` for 32-bit Windows).

This script creates a `Station` object to hold the instruments. It then connects to the LDA-602N Digital Attenuator using the `LDA` driver from Qcodes Community. The `serial_number` argument is set to `602` to match the specific instrument. The `dll_path` argument is set to the path of the directory containing the Vaunix LDA DLL.

The LDA instrument is added to the station using the `add_component` method. The instrument's IDN information is printed using the `get_idn` method.

The attenuation is set to 10 dB using the `attenuation` parameter of the LDA instrument.

Finally, the connection to the instrument is closed using the `close` method.

Please make sure to install the necessary dependencies and modify the script according to your specific setup before running it.

</TabItem>
</Tabs>