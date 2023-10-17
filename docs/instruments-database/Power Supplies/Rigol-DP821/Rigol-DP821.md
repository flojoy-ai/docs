---
title: Connecting to Rigol DP821 by Rigol in Python
sidebar_label: Rigol DP821
description: The Rigol DP821 is a dual channel, remote sense programmable DC Power Supply. It has excellent performance, including various analysis functions and has USB Host and Device with LXI option. All of this makes it suitable to meet a wide range of testing requirements.
keywords: [power supplies, Rigol, QCodes]
slug: /instruments-database/power-supplies/rigol/rigol-dp821
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395532/Instruments/Power%20Supplies/Rigol-DP821/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rigol DP821

## Instrument Card

<div className="flex">

<div>

The Rigol DP821 is a dual channel, remote sense programmable DC Power Supply. It has excellent performance, including various analysis functions and has USB Host and Device with LXI option. All of this makes it suitable to meet a wide range of testing requirements.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395532/Instruments/Power%20Supplies/Rigol-DP821/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

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


## Connect to the Rigol DP821 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='POWER_SUPPLIES' manufacturer='RIGOL'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

```python
import qcodes as qc
from qcodes.instrument_drivers.rigol.DP8xx import RigolDP821

# Connect to the Rigol DP821 Power Supply
dp821 = RigolDP821('dp821', 'TCPIP0::192.168.1.100::INSTR')

# Add the instrument to the QCoDeS station
station = qc.Station()
station.add_component(dp821)

# Print the instrument information
print(dp821)
```

</TabItem>
</Tabs>