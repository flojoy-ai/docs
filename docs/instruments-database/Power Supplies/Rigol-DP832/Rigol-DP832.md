---
title: Connecting to Rigol DP832 by Rigol in Python
sidebar_label: Rigol DP832
description: 3 Outputs; total power up to 195WLow Ripple Noise <350 uVrms/2mVppFast transient response time-> <50 usChannel isolation-> CH1 || CH2,CH3OVP/OCP/OTP protection functionsBuilt in V, A, W measurements and waveform display
keywords: [power supplies, Rigol, QCodes]
slug: /instruments-database/power-supplies/rigol/rigol-dp832
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395536/Instruments/Power%20Supplies/Rigol-DP832/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rigol DP832

## Instrument Card

<div className="flex">

<div>

3 Outputs; total power up to 195W
Low Ripple Noise <350 uVrms/2mVpp
Fast transient response time: <50 us
Channel isolation: CH1 || CH2,CH3
OVP/OCP/OTP protection functions
Built in V, A, W measurements and waveform display

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395536/Instruments/Power%20Supplies/Rigol-DP832/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

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


## Connect to the Rigol DP832 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='POWER_SUPPLIES' manufacturer='RIGOL'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

To connect to a Rigol DP832 Power Supply using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.rigol.DP8xx import RigolDP832

# Create an instance of the RigolDP832 driver
power_supply = RigolDP832('power_supply', 'TCPIP0::192.168.1.1::INSTR')

# Connect to the power supply
power_supply.connect()

# Now you can use the power supply to perform various operations
# For example, to set the voltage of channel 1 to 5V:
power_supply.ch1.voltage.set(5)

# To turn on channel 2:
power_supply.ch2.output.set(True)

# To read the current of channel 3:
current = power_supply.ch3.current.get()

# Disconnect from the power supply
power_supply.disconnect()
```

Note: Replace `'TCPIP0::192.168.1.1::INSTR'` with the actual IP address or VISA resource string of your Rigol DP832 Power Supply.

</TabItem>
</Tabs>