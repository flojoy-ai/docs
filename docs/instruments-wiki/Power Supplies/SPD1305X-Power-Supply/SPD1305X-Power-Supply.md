---
title: Connecting to SPD1305X Power Supply by Siglent Technologies in Python
sidebar_label: SPD1305X Power Supply
description: Siglent’s SPD1305X Series Programmable Linear DC Power Supply has a 2.8 inch TFT-LCD (240 * 320) color display. The SPD1305X outputs up to 150 Watts of power and has a Voltage range of 0-30 V and Current range of 0-5 A. The Voltage resolution is 1 uV while the Current resolution is 1 mA.Because higher currents supplied through smaller gauge wire or longer distances can cause a drop in voltage to the supplied load, the SPD1305X incorporates Remote Sensing in order to measure the actual supplied voltage at the load. The remote sensed voltage is fed back to the power supply and output voltage is adjusted almost instantaneously.
keywords: [power supplies, Siglent Technologies, Pymeasure]
slug: /instruments-wiki/power-supplies/siglent-technologies/spd1305x-power-supply
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200974/Instruments/Power%20Supplies/SPD1305X-Power-Supply/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SPD1305X Power Supply

## Instrument Card

<div className="flex">

<div>

Siglent’s SPD1305X Series Programmable Linear DC Power Supply has a 2.8 inch TFT-LCD (240 * 320) color display. The SPD1305X outputs up to 150 Watts of power and has a Voltage range of 0-30 V and Current range of 0-5 A. The Voltage resolution is 1 uV while the Current resolution is 1 mA.

Because higher currents supplied through smaller gauge wire or longer distances can cause a drop in voltage to the supplied load, the SPD1305X incorporates Remote Sensing in order to measure the actual supplied voltage at the load. The remote sensed voltage is fed back to the power supply and output voltage is adjusted almost instantaneously.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200974/Instruments/Power%20Supplies/SPD1305X-Power-Supply/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692126014/Instruments/Vendor%20Logos/Siglent.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

**iglent** is a China-based manufacturer specializing in electronic test & measurement instruments. Siglent founders began a preliminary study of digital oscilloscopes in 2002. It founded in 2007, and now Siglent has extended its product line to include digital oscilloscopes, function / arbitrary waveform generators, RF generators，digital multi-meters, DC power supplies, spectrum analyzers, spectrum & vector network analyzers, isolated handheld oscilloscopes, DC electronic loads and other general test instruments.Siglent also manufactured entry-level products for Lecroy. <a href="https://siglentna.com/">Website</a>.

<ul>
  <li>Headquarters: Shenzhen, China</li>
  <li>Yearly Revenue (millions, USD): 57.0</li>
</ul>
</details>

## Connect to the SPD1305X Power Supply in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">

To connect to a SPD1305X Power Supply using Pymeasure, you can use the following Python script:

```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.siglenttechnologies import SPD1305X

# Create a VISA adapter
adapter = VISAAdapter("USB0::0xF4EC::0xEE3A::SPD13A1R3L0001::INSTR")

# Connect to the SPD1305X Power Supply
power_supply = SPD1305X(adapter)

# Perform operations on the power supply
power_supply.ch_1.voltage = 10  # Set the voltage of channel 1 to 10V
power_supply.ch_1.current_limit = 2  # Set the current limit of channel 1 to 2A

# Disconnect from the power supply
power_supply.disconnect()
```

Note: Replace the VISA address `"USB0::0xF4EC::0xEE3A::SPD13A1R3L0001::INSTR"` with the appropriate address for your specific instrument.

</TabItem>
</Tabs>