---
title: Connecting to SMW 200 A by Rohdes&Schwarz in Python
sidebar_label: SMW 200 A
description: The R&S®SMW200A offers integrated channel emulation for up to 800 MHz of fading bandwidth. Fading profiles for all major standards are available as presets. With up to 64 fading channels, all key MIMO fading scenarios such as 2x2, 3x3, 4x4, 8x4, 4x8 and 8x8 can be configured in a single instrument.
keywords: [rf signal generators, Rohdes&Schwarz, QCodes Community]
slug: /instruments-wiki/rf-signal-generators/rohdes-schwarz/smw-200-a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395799/Instruments/RF%20Signal%20Generators/SMW-200-A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SMW 200 A

## Instrument Card

<div className="flex">

<div>

The R&S®SMW200A offers integrated channel emulation for up to 800 MHz of fading bandwidth. Fading profiles for all major standards are available as presets. With up to 64 fading channels, all key MIMO fading scenarios such as 2x2, 3x3, 4x4, 8x4, 4x8 and 8x8 can be configured in a single instrument.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395799/Instruments/RF%20Signal%20Generators/SMW-200-A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.testequipmenthq.com/datasheets/Rohde-Schwarz-SMW200A-Datasheet.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806194/Instruments/Vendor%20Logos/RohdeSchwarz.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Rohde & Schwarz GmbH & Co KG is an international electronics group specializing in the fields of electronic test equipment, broadcast & media, cybersecurity, radiomonitoring and radiolocation, and radiocommunication.

<ul>
  <li>Headquarters: Munich, Germany</li>
  <li>Yearly Revenue (millions, USD): 2500.0</li>
  <li>Vendor Website: <a href="https://www.rohde-schwarz.com/ca/home_48230.html">here</a></li>
</ul>
</details>

## Connect to the SMW 200 A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to the SMW 200 A RF Signal Generator using Qcodes, you can use the following code:

```python
from qcodes.instrument_drivers.rohde_schwarz.SMWSMU import SMWSMU

# Create an instance of the SMWSMU driver
smw = SMWSMU('smw', 'TCPIP0::192.168.0.1::inst0::INSTR')

# Connect to the instrument
smw.connect()

# Now you can use the instrument to perform various operations
# For example, you can set the output power
smw.output_power(0)  # Set the output power to 0 dBm

# Disconnect from the instrument
smw.disconnect()
```

This code creates an instance of the `SMWSMU` driver and connects to the SMW 200 A RF Signal Generator using the specified VISA address. You can then use the various methods provided by the driver to control the instrument, such as setting the output power.

Note that you need to replace `'TCPIP0::192.168.0.1::inst0::INSTR'` with the actual VISA address of your instrument.

</TabItem>
</Tabs>