---
title: Connecting to SPD1168X Power Supply by Siglent Technologies in Python
sidebar_label: SPD1168X Power Supply
description: Siglent’s SPD1168X Series Programmable Linear DC Power Supply has a 2.8 inch TFT-LCD (240 * 320) color display. The SPD1168X outputs up to 128 Watts of power and has a Voltage range of 0-16 V and Current range of 0-8 A. The Voltage resolution is 1 uV while the Current resolution is 1 mA.Because higher currents supplied through smaller gauge wire or longer distances can cause a drop in voltage to the supplied load, the SPD1168X incorporates Remote Sensing in order to measure the actual supplied voltage at the load. The remote sensed voltage is fed back to the power supply and output voltage is adjusted almost instantaneously.
keywords: [power supplies, Siglent Technologies, PyMeasure]
slug: /instruments-database/power-supplies/siglent-technologies/spd1168x-power-supply
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395478/Instruments/Power%20Supplies/SPD1168X-Power-Supply/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SPD1168X Power Supply

## Instrument Card

<div className="flex">

<div>

Siglent’s SPD1168X Series Programmable Linear DC Power Supply has a 2.8 inch TFT-LCD (240 * 320) color display. The SPD1168X outputs up to 128 Watts of power and has a Voltage range of 0-16 V and Current range of 0-8 A. The Voltage resolution is 1 uV while the Current resolution is 1 mA.

Because higher currents supplied through smaller gauge wire or longer distances can cause a drop in voltage to the supplied load, the SPD1168X incorporates Remote Sensing in order to measure the actual supplied voltage at the load. The remote sensed voltage is fed back to the power supply and output voltage is adjusted almost instantaneously.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395478/Instruments/Power%20Supplies/SPD1168X-Power-Supply/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.electrokit.com/uploads/productfile/41016/SPD1168X_DataSheet_DS0501X-E01A.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: SIGLENT</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126014/Instruments/Vendor%20Logos/Siglent.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

**iglent** is a China-based manufacturer specializing in electronic test & measurement instruments. Siglent founders began a preliminary study of digital oscilloscopes in 2002. It founded in 2007, and now Siglent has extended its product line to include digital oscilloscopes, function / arbitrary waveform generators, RF generators，digital multi-meters, DC power supplies, spectrum analyzers, spectrum & vector network analyzers, isolated handheld oscilloscopes, DC electronic loads and other general test instruments.Siglent also manufactured entry-level products for Lecroy.

<ul>
  <li>Headquarters: Shenzhen, China</li>
  <li>Yearly Revenue (millions, USD): 57.0</li>
  <li>Vendor Website: <a href="https://siglentna.com/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='POWER_SUPPLIES' manufacturer='SIGLENT'></FeaturedInstrumentVideo>


## Connect to the SPD1168X Power Supply in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='POWER_SUPPLIES' manufacturer='SIGLENT'></NodeCardCollection>

</TabItem>
<TabItem value="PyMeasure" label="PyMeasure">

```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.siglenttechnologies import SPD1168X

# Create a VISA adapter for communication with the instrument
adapter = VISAAdapter("USB0::0xF4EC::0xEE3A::SPD1168X-1000-1168X-0001::0::INSTR")

# Create an instance of the SPD1168X power supply
power_supply = SPD1168X(adapter)

# Connect to the power supply
power_supply.connect()

# Perform operations with the power supply
# For example, set the voltage and current limits
power_supply.ch_1.voltage_limit = 5  # Set the voltage limit to 5V
power_supply.ch_1.current_limit = 1  # Set the current limit to 1A

# Disconnect from the power supply
power_supply.disconnect()
```

Note: Replace the VISA address in the `VISAAdapter` constructor with the appropriate address for your instrument.

</TabItem>
</Tabs>