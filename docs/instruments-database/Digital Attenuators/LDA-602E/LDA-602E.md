---
title: Connecting to LDA-602E by Vaunix in Python
sidebar_label: LDA-602E
description: The LDA-602E Lab Brick USB programmable 50 Ohm digital attenuator has an input power of up to +30 dBm, and offers frequency coverage of 400 to 6,000 MHz. It has an attenuation range of 120 dB and a step size of 0.5 dB. The unit is powered and controlled by USB connection to a PC or self-powered hub, and is programmable for fixed attenuation or swept attenuation ramps directly from the included graphical user interface (GUI) software.
keywords: [digital attenuators, Vaunix, QCodes Community]
slug: /instruments-database/digital-attenuators/vaunix/lda-602e
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/v1692395760/Instruments/Digital%20Attenuators/LDA-602E/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LDA-602E

## Instrument Card

<div className="flex">

<div>

The LDA-602E Lab Brick USB programmable 50 Ohm digital attenuator has an input power of up to +30 dBm, and offers frequency coverage of 400 to 6,000 MHz. It has an attenuation range of 120 dB and a step size of 0.5 dB. The unit is powered and controlled by USB connection to a PC or self-powered hub, and is programmable for fixed attenuation or swept attenuation ramps directly from the included graphical user interface (GUI) software.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692395760/Instruments/Digital%20Attenuators/LDA-602E/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://vaunix.com/resources/digital%20attenuators-datasheet.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: MZ2000</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125985/Instruments/Vendor%20Logos/Vaunix.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Vaunix Technology Corp. designs, manufactures, and services RF and microwave test equipment and digital radio communications products. Utilizing our deep RF and software engineering expertise, rooted in microwave radio and wireless equipment repair and testing, Vaunix developed the Lab Brick® family of electronic test products, which set a new standard for cost, size, and simplicity of wireless testing devices. Powered by a USB connection and controlled by easy-to-use, graphical-user-interface (GUI) software, Lab Bricks have been designed to meet the needs of wireless engineers and technicians who want to create flexible, customized system solutions either in the lab or in the field. We 've expanded our Lab Brick® family of electronic test products to include Attenuator Matrix solutions that double as Wireless [Handover Test Systems](https://vaunix.com/handover-test-systems/) to give our test technicians and product engineers the advanced capability to solve unique wireless _handover _testing challenges and bring affordability, functionality, reliability and simplicity to the microwave test bench.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
  <li>Vendor Website: <a href="https://vaunix.com/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='WIDGET2000' manufacturer='MZ2000'></FeaturedInstrumentVideo>


## Connect to the LDA-602E in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes Community" label="QCodes Community">

Here is an example Python script that uses Qcodes Community to connect to a LDA-602E Digital Attenuator:

```python
from qcodes import Station
from qcodes.instrument_drivers.vaunix.LDA import LDA

# Create a station to hold the instruments
station = Station()

# Connect to the LDA-602E Digital Attenuator
lda = LDA('lda', serial_number=602, dll_path='path/to/dll')

# Add the LDA instrument to the station
station.add_component(lda)

# Print the IDN of the LDA instrument
print(lda.get_idn())

# Set the attenuation to 10 dB on channel 1
lda.ch1.attenuation(10)

# Close the connection to the LDA instrument
lda.close()
```

Note: Replace `'path/to/dll'` with the actual path to the directory that contains the Vaunix LDA DLL (`VNX_atten64.dll` or `VNX_atten.dll`).

</TabItem>
</Tabs>