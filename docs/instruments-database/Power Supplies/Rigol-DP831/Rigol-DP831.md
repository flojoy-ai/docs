---
title: Connecting to Rigol DP831 by Rigol in Python
sidebar_label: Rigol DP831
description: The Rigol DP831 features a relative large (8.9 cm / 3.5") and easy to read TFT monochrome display. In addition to the normal digital displays for voltage, current, and power, these values can also be displayed as signal curves.
keywords: [power supplies, Rigol, QCodes]
slug: /instruments-database/power-supplies/rigol/rigol-dp831
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395533/Instruments/Power%20Supplies/Rigol-DP831/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rigol DP831

## Instrument Card

<div className="flex">

<div>

The Rigol DP831 features a relative large (8.9 cm / 3.5") and easy to read TFT monochrome display. In addition to the normal digital displays for voltage, current, and power, these values can also be displayed as signal curves.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395533/Instruments/Power%20Supplies/Rigol-DP831/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.batronix.com/files/Rigol/Labornetzteile/DP800/DP800_-datasheet-2022.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: RIGOL</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806170/Instruments/Vendor%20Logos/Rigol.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

RIGOL Technologies, Inc. specializes in development and production of test and measuring equipment and is one of the fastest growing Chinese companies in this sphere.
RIGOL’s line of products includes [digital storage oscilloscopes](https://www.tmatlantic.com/e-store/index.php?SECTION_ID=227), [function/arbitrary waveform generators](https://www.tmatlantic.com/e-store/index.php?SECTION_ID=230), [digital multimeters](https://www.tmatlantic.com/e-store/index.php?SECTION_ID=233), PC-based devices compatible with LXI standard etc.

<ul>
  <li>Headquarters: Beijing, China</li>
  <li>Yearly Revenue (millions, USD): 23.0</li>
  <li>Vendor Website: <a href="https://www.rigol.com/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='POWER_SUPPLIES' manufacturer='RIGOL'></FeaturedInstrumentVideo>


## Connect to the Rigol DP831 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='POWER_SUPPLIES' manufacturer='RIGOL'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

```python
import qcodes as qc
from qcodes.instrument_drivers.rigol.DP831 import RigolDP831

# Connect to the power supply
power_supply = RigolDP831('power_supply', 'TCPIP0::192.168.1.1::INSTR')

# Print the power supply's IDN
print(power_supply.IDN())

# Set the voltage of channel 1 to 3.0 V
power_supply.ch1.voltage.set(3.0)

# Set the current limit of channel 2 to 1.5 A
power_supply.ch2.current_limit.set(1.5)

# Enable output on channel 3
power_supply.ch3.output_enable.set(True)

# Disable output on channel 1
power_supply.ch1.output_enable.set(False)

# Close the connection to the power supply
power_supply.close()
```

Note: Replace `'TCPIP0::192.168.1.1::INSTR'` with the actual IP address or VISA resource string of your Rigol DP831 power supply.

</TabItem>
</Tabs>