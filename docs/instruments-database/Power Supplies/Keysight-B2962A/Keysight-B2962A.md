---
title: Connecting to Keysight (Agilent) B2962A by Keysight (Agilent) in Python
sidebar_label: Keysight (Agilent) B2962A
description: The Keysight (Agilent) B2962A source / measure unit (SMU) is a 6.5-digit low noise power source that provides a power supply and source solution that meets the difficult measurement challenges researchers, designers, and developers face working on advanced components, circuits, and materials.
keywords: [power supplies, Keysight, QCodes]
slug: /instruments-database/power-supplies/keysight/keysight-b2962a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395593/Instruments/Power%20Supplies/Keysight-B2962A/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight (Agilent) B2962A

## Instrument Card

<div className="flex">

<div>

The Keysight (Agilent) B2962A source / measure unit (SMU) is a 6.5-digit low noise power source that provides a power supply and source solution that meets the difficult measurement challenges researchers, designers, and developers face working on advanced components, circuits, and materials.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395593/Instruments/Power%20Supplies/Keysight-B2962A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: KEYSIGHT</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight (Agilent) Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='POWER_SUPPLIES' manufacturer='KEYSIGHT'></FeaturedInstrumentVideo>


## Connect to the Keysight (Agilent) B2962A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='POWER_SUPPLIES' manufacturer='KEYSIGHT'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

```python
from qcodes import Station
from qcodes.instrument_drivers.Keysight.Keysight_B2962A import KeysightB2962A

# Create a station to hold the instrument
station = Station()

# Connect to the instrument
instrument = KeysightB2962A('power_supply', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Add the instrument to the station
station.add_component(instrument)

# Print the instrument IDN
print(instrument.get_idn())

# Set the voltage and current for channel 1
instrument.ch1.source_voltage(1.0)
instrument.ch1.source_current(0.1)

# Enable channel 1
instrument.ch1.enable('on')

# Measure the voltage and current for channel 1
voltage = instrument.ch1.voltage()
current = instrument.ch1.current()

# Print the measured values
print(f"Voltage: {voltage} V")
print(f"Current: {current} A")

# Disconnect from the instrument
instrument.close()
```


</TabItem>
</Tabs>