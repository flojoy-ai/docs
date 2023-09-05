---
title: Connecting to From MG3690C Series by Anritsu in Python
sidebar_label: From MG3690C Series
description: The MG3690C series of broadband signal generators covers audio, HF, VHF, UHF, RF and microwave frequencies from 0.1 Hz to 70 GHz in single coaxial output and up to 500 GHz or beyond, with external multipliers
keywords: [rf signal generators, Anritsu, PyMeasure]
slug: /instruments-database/rf-signal-generators/anritsu/from-mg3690c-series
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395176/Instruments/RF%20Signal%20Generators/From-MG3690C-Series/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# From MG3690C Series

## Instrument Card

<div className="flex">

<div>

The MG3690C series of broadband signal generators covers audio, HF, VHF, UHF, RF and microwave frequencies from 0.1 Hz to 70 GHz in single coaxial output and up to 500 GHz or beyond, with external multipliers

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395176/Instruments/RF%20Signal%20Generators/From-MG3690C-Series/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://dl.cdn-anritsu.com/en-us/test-measurement/files/Brochures-Datasheets-Catalogs/Brochure/11410-01119C.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125977/Instruments/Vendor%20Logos/Anritsu.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

**Anritsu** Has Testing Solutions for Automotive, Government, Data Center, & IoT Industries. Test Solutions for IoT Devices, Government Radar, Automotive, & Signal Integrity.

<ul>
  <li>Headquarters: JAPAN</li>
  <li>Yearly Revenue (millions, USD): 670.0</li>
  <li>Vendor Website: <a href="https://www.anritsu.com/en-us/">here</a></li>
</ul>
</details>

## Connect to the From MG3690C Series in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="PyMeasure" label="PyMeasure">


```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.anritsu import AnritsuMG3692C

# Create a VISA adapter for the instrument
adapter = VISAAdapter("GPIB0::9::INSTR")

# Connect to the Anritsu MG3692C Signal Generator
signal_generator = AnritsuMG3692C(adapter)

# Set the output power to -10 dBm
signal_generator.power = -10

# Set the output frequency to 1 GHz
signal_generator.frequency = 1e9

# Enable the signal output
signal_generator.enable()

# Disable the signal output
signal_generator.disable()

# Shutdown the instrument
signal_generator.shutdown()
```

Explanation of the code:
- First, we import the necessary modules from Pymeasure.
- We create a `VISAAdapter` object, specifying the VISA address of the instrument. In this case, the address is "GPIB0::9::INSTR".
- We create an `AnritsuMG3692C` object, passing the adapter as an argument.
- We can then use the properties and methods of the `AnritsuMG3692C` object to control the signal generator. For example, we set the output power to -10 dBm using the `power` property, and the output frequency to 1 GHz using the `frequency` property.
- We can enable or disable the signal output using the `enable()` and `disable()` methods.
- Finally, we call the `shutdown()` method to put the instrument in a safe state.

Note: Make sure you have the necessary dependencies installed, such as `pymeasure` and the appropriate VISA library for your instrument.

</TabItem>
</Tabs>