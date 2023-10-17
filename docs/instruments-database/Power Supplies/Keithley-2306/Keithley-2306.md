---
title: Connecting to Keithley 2306 by Keithley in Python
sidebar_label: Keithley 2306
description: The dual channel Battery/Charger Simulator was designed specifically for development and test applications of portable, battery-operated products, such as cellular and cordless telephones, mobile radios, and pagers. This precision DC power supply product has ultrafast transient response so it can have output characteristics identical to actual batteries. This supply employs a unique variable output resistance so the voltage output can emulate a battery's response. It provides stable voltage outputs, even when a device-under-test (DUT) makes the rapid transition from the standby (low current) state to the RF transmission (high current) state. In addition, they can monitor DUT power consumption by measuring both DC currents and pulse load currents. The battery-simulator channel can be programmed to operate like a discharged rechargeable battery, sinking current from a separate charger.
keywords: [power supplies, Keithley, PyMeasure]
slug: /instruments-database/power-supplies/keithley/keithley-2306
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395428/Instruments/Power%20Supplies/Keithley-2306/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2306

## Instrument Card

<div className="flex">

<div>

The dual channel Battery/Charger Simulator was designed specifically for development and test applications of portable, battery-operated products, such as cellular and cordless telephones, mobile radios, and pagers. This precision DC power supply product has ultrafast transient response so it can have output characteristics identical to actual batteries. This supply employs a unique variable output resistance so the voltage output can emulate a battery's response. It provides stable voltage outputs, even when a device-under-test (DUT) makes the rapid transition from the standby (low current) state to the RF transmission (high current) state. In addition, they can monitor DUT power consumption by measuring both DC currents and pulse load currents. The battery-simulator channel can be programmed to operate like a discharged rechargeable battery, sinking current from a separate charger.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395428/Instruments/Power%20Supplies/Keithley-2306/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.farnell.com/datasheets/1626633.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: KEITHLEY</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806202/Instruments/Vendor%20Logos/Keithley.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
  <li>Vendor Website: <a href="https://www.tek.com/en">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='POWER_SUPPLIES' manufacturer='KEITHLEY'></FeaturedInstrumentVideo>


## Connect to the Keithley 2306 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='POWER_SUPPLIES' manufacturer='KEITHLEY'></NodeCardCollection>

</TabItem>
<TabItem value="PyMeasure" label="PyMeasure">


```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.keithley import Keithley2306

# Create a VISA adapter for communication
adapter = VISAAdapter("TCPIP::192.168.1.1::INSTR")  # Replace with your instrument's IP address

# Connect to the Keithley 2306 Power Supply
power_supply = Keithley2306(adapter)

# Enable both channels
power_supply.both_channels_enabled = True

# Set the voltage and current limits for channel 1
power_supply.ch(1).source_voltage = 5.0  # Set the voltage to 5V
power_supply.ch(1).source_current_limit = 1.0  # Set the current limit to 1A

# Enable channel 1
power_supply.ch(1).enabled = True

# Measure the voltage and current on channel 1
voltage = power_supply.ch(1).measured_voltage
current = power_supply.ch(1).measured_current

print(f"Voltage: {voltage} V")
print(f"Current: {current} A")

# Disconnect from the power supply
power_supply.disconnect()
```

Make sure to replace `"TCPIP::192.168.1.1::INSTR"` with the appropriate VISA address for your Keithley 2306 Power Supply.

</TabItem>
</Tabs>