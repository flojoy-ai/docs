---
title: Connecting to Keithley 6517A by Keithley in Python
sidebar_label: Keithley 6517A
description: The Keithley 6517A 5 1/2 digit Electrometer / High Resistance Meter offers extreme accuracy and sensitivity specifications. It also offers a variety of features that simplify measuring high resistances and the resistivity of insulating materials. With reading rates of up to 125 readings/ second, the Keithley 6517A is also significantly faster than competitive electrometers, so it offers a quick, easy way to measure low-level curs.The half-rack-sized Keithley 6517A has a special low cur input amplifier with an input bias cur ofThe Keithley 6517A offers full autoranging over the full span of ranges on cur, resistance, voltage, and charge measurements
keywords: [power meters, Keithley, PyMeasure]
slug: /instruments-database/power-meters/keithley/keithley-6517a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395437/Instruments/Power%20Meters/Keithley-6517A/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 6517A

## Instrument Card

<div className="flex">

<div>

The Keithley 6517A 5 1/2 digit Electrometer / High Resistance Meter offers extreme accuracy and sensitivity specifications. It also offers a variety of features that simplify measuring high resistances and the resistivity of insulating materials. With reading rates of up to 125 readings/ second, the Keithley 6517A is also significantly faster than competitive electrometers, so it offers a quick, easy way to measure low-level curs.The half-rack-sized Keithley 6517A has a special low cur input amplifier with an input bias cur ofThe Keithley 6517A offers full autoranging over the full span of ranges on cur, resistance, voltage, and charge measurements

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395437/Instruments/Power%20Meters/Keithley-6517A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.testequipmenthq.com/datasheets/KEITHLEY-6517A-Datasheet.pdf">here</a></p>

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

<FeaturedInstrumentVideo category='POWER_METERS' manufacturer='KEITHLEY'></FeaturedInstrumentVideo>


## Connect to the Keithley 6517A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='POWER_METERS' manufacturer='KEITHLEY'></NodeCardCollection>

</TabItem>
<TabItem value="PyMeasure" label="PyMeasure">


```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.keithley import Keithley6517B

# Create a VISA adapter for the instrument
adapter = VISAAdapter("GPIB::1")

# Connect to the Keithley 6517A Power Meter
keithley = Keithley6517B(adapter)

# Enable the source output
keithley.enable_source()

# Set the source voltage range to 200 V
keithley.source_voltage_range = 200

# Set the source voltage to 20 V
keithley.source_voltage = 20

# Set up to measure resistance
keithley.measure_resistance()

# Ramp the voltage to 50 V
keithley.ramp_to_voltage(50)

# Print the measured resistance in Ohms
print(keithley.resistance)

# Ramp the voltage to 0 V and disable the output
keithley.shutdown()

# Disconnect from the instrument
keithley.disconnect()
```

This script connects to the Keithley 6517A Power Meter using a VISA adapter and creates an instance of the `Keithley6517B` class. It then enables the source output, sets the source voltage range and voltage, and configures the instrument to measure resistance. It ramps the voltage to 50 V and prints the measured resistance. Finally, it ramps the voltage to 0 V and disables the output before disconnecting from the instrument.

</TabItem>
</Tabs>