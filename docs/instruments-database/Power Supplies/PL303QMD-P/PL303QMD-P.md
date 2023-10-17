---
title: Connecting to PL303QMD-P by Aimtti in Python
sidebar_label: PL303QMD-P
description: Bench/System Linear Regulated DC Power Supply Dual Output, 2 x 30V/3A, USB, RS232 & LAN Interfaces
keywords: [power supplies, Aimtti, QCodes]
slug: /instruments-database/power-supplies/aimtti/pl303qmd-p
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395506/Instruments/Power%20Supplies/PL303QMD-P/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PL303QMD-P

## Instrument Card

<div className="flex">

<div>

Bench/System Linear Regulated DC Power Supply Dual Output, 2 x 30V/3A, USB, RS232 & LAN Interfaces

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395506/Instruments/Power%20Supplies/PL303QMD-P/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://resources.aimtti.com/datasheets/AIM-PL+PL-P_series_DC_power_supplies_data_sheet-Iss5.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: MZ2000</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125963/Instruments/Vendor%20Logos/Aimtti.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

TTi (Thurlby Thandar Instruments) is a leading manufacturer of electronic test and measurement instruments. These products are sold throughout the world via carefully selected distributors and agents in each country. We are located in Huntingdon near to the famous university city of Cambridge, within one of the high technology areas of the United Kingdom.

<ul>
  <li>Headquarters: UK</li>
  <li>Yearly Revenue (millions, USD): 9000.0</li>
  <li>Vendor Website: <a href="https://www.aimtti.com/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='WIDGET2000' manufacturer='MZ2000'></FeaturedInstrumentVideo>


## Connect to the PL303QMD-P in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

To connect to a PL303QMD-P Power Supply using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.aimtti.AimTTi import AimTTi

# Create an instance of the AimTTi instrument
aim_tti = AimTTi("aim_tti", "TCPIP0::192.168.1.1::inst0::INSTR")

# Connect to the instrument
aim_tti.connect()

# Now you can use the instrument to perform operations
# For example, to get the voltage of channel 1:
voltage = aim_tti.ch1.volt.get()
print("Voltage:", voltage)

# You can also set the voltage of channel 1:
aim_tti.ch1.volt.set(5.0)

# Disconnect from the instrument
aim_tti.disconnect()
```

Note: Replace `"TCPIP0::192.168.1.1::inst0::INSTR"` with the actual VISA resource address of your PL303QMD-P Power Supply.

</TabItem>
</Tabs>