---
title: Connecting to LDA-203B by Vaunix in Python
sidebar_label: LDA-203B
description: The LDA-203B Digital Attenuator is a bidirectional, 50 Ohm step attenuator. The LDA-203B provides 63 dB of attenuation control over the frequency range of 1 to 20 GHz with a step size of 0.5 dB. The attenuators are easily programmable for fixed attenuation, swept attenuation ramps and fading profiles directly from the included Graphical User Interface (GUI). Alternatively, for users wishing to develop their own interface, Vaunix supplies LabVIEW drivers, Windows API DLL files, Linux drivers, Python examples and much more.
keywords: [digital attenuators, Vaunix, QCodes Community]
slug: /instruments-database/digital-attenuators/vaunix/lda-203b
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/v1692719003/Instruments/Digital%20Attenuators/LDA-203B/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LDA-203B

## Instrument Card

<div className="flex">

<div>

The LDA-203B Digital Attenuator is a bidirectional, 50 Ohm step attenuator. The LDA-203B provides 63 dB of attenuation control over the frequency range of 1 to 20 GHz with a step size of 0.5 dB. The attenuators are easily programmable for fixed attenuation, swept attenuation ramps and fading profiles directly from the included Graphical User Interface (GUI). Alternatively, for users wishing to develop their own interface, Vaunix supplies LabVIEW drivers, Windows API DLL files, Linux drivers, Python examples and much more.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692719003/Instruments/Digital%20Attenuators/LDA-203B/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://vaunix.com/resources/digital%20attenuators-datasheet.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: VAUNIX</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125985/Instruments/Vendor%20Logos/Vaunix.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Vaunix Technology Corp. designs, manufactures, and services RF and microwave test equipment and digital radio communications products. Utilizing our deep RF and software engineering expertise, rooted in microwave radio and wireless equipment repair and testing, Vaunix developed the Lab Brick® family of electronic test products, which set a new standard for cost, size, and simplicity of wireless testing devices. Powered by a USB connection and controlled by easy-to-use, graphical-user-interface (GUI) software, Lab Bricks have been designed to meet the needs of wireless engineers and technicians who want to create flexible, customized system solutions either in the lab or in the field. We 've expanded our Lab Brick® family of electronic test products to include Attenuator Matrix solutions that double as Wireless [Handover Test Systems](https://vaunix.com/handover-test-systems/) to give our test technicians and product engineers the advanced capability to solve unique wireless _handover _testing challenges and bring affordability, functionality, reliability and simplicity to the microwave test bench.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
  <li>Vendor Website: <a href="https://vaunix.com/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='DIGITAL_ATTENUATORS' manufacturer='VAUNIX'></FeaturedInstrumentVideo>


## Connect to the LDA-203B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='DIGITAL_ATTENUATORS' manufacturer='VAUNIX'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to a LDA-203B Digital Attenuator using Qcodes Community, you can use the following Python script:

```python
from qcodes import Station
from qcodes_contrib_drivers.drivers.Vaunix_LDA import LDA

# Create a station to hold the instruments
station = Station()

# Connect to the LDA-203B Digital Attenuator
lda = LDA('lda', serial_number=203, dll_path='path/to/dll')

# Add the LDA to the station
station.add_component(lda)

# Print the IDN of the LDA
print(lda.get_idn())

# Set the attenuation to 10 dB
lda.attenuation(10)

# Close the connection to the LDA
lda.close()
```

Make sure to replace `'path/to/dll'` with the actual path to the DLL file for the LDA-203B Digital Attenuator.

</TabItem>
</Tabs>
<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/instruments-database/Digital%20Attenuators/LDA-203B/LDA-203B.md)
