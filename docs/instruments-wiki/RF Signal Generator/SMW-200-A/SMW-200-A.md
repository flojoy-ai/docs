---
title: SMW 200 A
description: The R&S®SMW200A offers integrated channel emulation for up to 800 MHz of fading bandwidth. Fading profiles for all major standards are available as presets. With up to 64 fading channels, all key MIMO fading scenarios such as 2x2, 3x3, 4x4, 8x4, 4x8 and 8x8 can be configured in a single instrument.
keywords: [rf signal generator, Rohdeschwarz, Qcodes Community]
slug: /instruments-wiki/rf-signal-generator/rohdeschwarz/smw-200-a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200870/Instruments/RF%20Signal%20Generator/SMW-200-A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SMW 200 A

## Instrument Card

<div className="flex">

<div>

The R&S®SMW200A offers integrated channel emulation for up to 800 MHz of fading bandwidth. Fading profiles for all major standards are available as presets. With up to 64 fading channels, all key MIMO fading scenarios such as 2x2, 3x3, 4x4, 8x4, 4x8 and 8x8 can be configured in a single instrument.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200870/Instruments/RF%20Signal%20Generator/SMW-200-A/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692139604/Instruments/Vendor%20Logos/RohdeSchwarz.png" style={{ width: "100%", objectFit: "cover" }} />

Rohde & Schwarz GmbH & Co KG is an international electronics group specializing in the fields of electronic test equipment, broadcast & media, cybersecurity, radiomonitoring and radiolocation, and radiocommunication. <a href="https://www.rohde-schwarz.com/ca/home_48230.html">Website</a>.

<ul>
  <li>Headquarters: Munich, Germany</li>
  <li>Yearly Revenue (millions, USD): 2500.0</li>
</ul>
</details>

## Connect to the SMW 200 A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

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

Note that you need to replace `'TCPIP0::192.168.0.1::inst0::INSTR'` with the actual VISA address of your SMW 200 A RF Signal Generator.

</TabItem>
</Tabs>