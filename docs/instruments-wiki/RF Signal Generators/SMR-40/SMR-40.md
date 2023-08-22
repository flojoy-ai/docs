---
title: Connecting to SMR 40 by Rohdes&Schwarz in Python
sidebar_label: SMR 40
description: The R&S SMR40 Signal Generator is designed as CW generator with pulse modulation capability with frequency coverage from 1 GHz up to 40 GHz. The lower limit can be expanded to 10 MHz by the optional Frequency Extension 0.01 GHz to 1 GHz  (option B11).
keywords: [rf signal generators, Rohdes&Schwarz, QCodes Community]
slug: /instruments-wiki/rf-signal-generators/rohdes&schwarz/smr-40
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395798/Instruments/RF%20Signal%20Generators/SMR-40/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SMR 40

## Instrument Card

<div className="flex">

<div>

The R&S SMR40 Signal Generator is designed as CW generator with pulse modulation capability with frequency coverage from 1 GHz up to 40 GHz. The lower limit can be expanded to 10 MHz by the optional Frequency Extension 0.01 GHz to 1 GHz  (option B11).

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395798/Instruments/RF%20Signal%20Generators/SMR-40/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692139604/Instruments/Vendor%20Logos/RohdeSchwarz.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Rohde & Schwarz GmbH & Co KG is an international electronics group specializing in the fields of electronic test equipment, broadcast & media, cybersecurity, radiomonitoring and radiolocation, and radiocommunication. <a href="https://www.rohde-schwarz.com/ca/home_48230.html">Website</a>.

<ul>
  <li>Headquarters: Munich, Germany</li>
  <li>Yearly Revenue (millions, USD): 2500.0</li>
</ul>
</details>

## Connect to the SMR 40 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to the SMR 40 RF Signal Generator using Qcodes Community, you can use the following Python script:

```python
from qcodes import Station, Instrument
from qcodes.instrument_drivers.rohde_schwarz.SMR40 import RohdeSchwarz_SMR40

# Create a station to hold the instrument
station = Station()

# Connect to the SMR 40 RF Signal Generator
smr40 = RohdeSchwarz_SMR40('smr40', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Add the instrument to the station
station.add_component(smr40)

# Now you can use the instrument
smr40.frequency.set(1e9)  # Set the frequency to 1 GHz
smr40.power.set(-10)  # Set the power to -10 dBm
smr40.on()  # Turn on the signal generator

# Close the connection
smr40.close()
```

Note: Replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual address of your SMR 40 RF Signal Generator.

</TabItem>
</Tabs>