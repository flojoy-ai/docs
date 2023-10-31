---
title: Connecting to Shamrock 750 by Andor in Python
sidebar_label: Shamrock 750
description: The Andor Shamrock SR-750 is based on Czerny-Turner optical design. The Shamrock is available as a pre-aligned detector/spectrometer option allowing for seamless integration of software, electronics, optics and detector. There is also a fast and interactive graphical software interface allowing full control of all the spectrograph functions.
keywords: [spectrometers, Andor, QCodes Community]
slug: /instruments-database/spectrometers/andor/shamrock-750
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395803/Instruments/Spectrometers/Shamrock-750/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Shamrock 750

## Instrument Card

<div className="flex">

<div>

The Andor Shamrock SR-750 is based on Czerny-Turner optical design. The Shamrock is available as a pre-aligned detector/spectrometer option allowing for seamless integration of software, electronics, optics and detector. There is also a fast and interactive graphical software interface allowing full control of all the spectrograph functions.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395803/Instruments/Spectrometers/Shamrock-750/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://andor.oxinst.com/assets/uploads/products/andor/documents/andor-shamrock-750-specifications.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: ANDOR</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806182/Instruments/Vendor%20Logos/Andor.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Leaders In The Development & Manufacture of Cameras, Microscopy and Spectroscopy Systems.

<ul>
  <li>Headquarters: UK</li>
  <li>Yearly Revenue (millions, USD): 230.0</li>
  <li>Vendor Website: <a href="https://andor.oxinst.com/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='SPECTROMETERS' manufacturer='ANDOR'></FeaturedInstrumentVideo>


## Connect to the Shamrock 750 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='SPECTROMETERS' manufacturer='ANDOR'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes Community" label="QCodes Community">

Here is a Python script that uses Qcodes Community to connect to a Shamrock 750 Spectrometer:

```python
from qcodes import Station, Instrument
from qcodes.utils.validators import Ints, Numbers
from qcodes.instrument_drivers.Andor.Shamrock import Shamrock_SR750

# Create a station to hold the instruments
station = Station()

# Create an instance of the Shamrock_SR750 instrument
shamrock = Shamrock_SR750('shamrock', dll_path='C:\\Program Files\\Andor SDK\\Shamrock64\\ShamrockCIF.dll', device_id=0)

# Add the Shamrock instrument to the station
station.add_component(shamrock)

# Connect to the Shamrock instrument
shamrock.connect()

# Print the instrument ID
print(shamrock.get_idn())

# Set the grating to 1
shamrock.grating(1)

# Set the wavelength to 500 nm
shamrock.wavelength(500)

# Close the connection to the Shamrock instrument
shamrock.close()
```

Note: Make sure to replace the `dll_path` argument with the correct path to the `ShamrockCIF.dll` file on your system.

</TabItem>
</Tabs>