---
title: Connecting to Keithley 2182 by Keithley in Python
sidebar_label: Keithley 2182
description: The two-channel Model 2182A Nanovoltmeter is optimized for making stable, low noise voltage measurements and for characterizing low resistance materials and devices reliably and repeatably. It provides higher measurement speed and significantly better noise performance than alternative low voltage measurement solutions. It offers a simplified delta mode for making resistance measurements in combination with a reversing current source, such as the Model 6220 or 6221.
keywords: [power meters, Keithley, InstrumentKit]
slug: /instruments-database/power-meters/keithley/keithley-2182
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692394002/Instruments/Power%20Meters/Keithley-2182/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2182

## Instrument Card

<div className="flex">

<div>

The two-channel Model 2182A Nanovoltmeter is optimized for making stable, low noise voltage measurements and for characterizing low resistance materials and devices reliably and repeatably. It provides higher measurement speed and significantly better noise performance than alternative low voltage measurement solutions. It offers a simplified delta mode for making resistance measurements in combination with a reversing current source, such as the Model 6220 or 6221.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692394002/Instruments/Power%20Meters/Keithley-2182/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://download.tek.com/datasheet/2182A-15912.pdf">here</a></p>

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


## Connect to the Keithley 2182 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='POWER_METERS' manufacturer='KEITHLEY'></NodeCardCollection>

</TabItem>
<TabItem value="InstrumentKit" label="InstrumentKit">

To connect to a Keithley 2182 Power Meter using Instrumentkit, you can use the following Python script:

```python
import instrumentkit as ik

# Connect to the Keithley 2182 Power Meter
meter = ik.keithley.Keithley2182.open_gpibusb("/dev/ttyUSB0", 10)

# Perform a measurement
measurement = meter.measure(meter.Mode.voltage_dc)

# Print the measurement value
print(measurement)
```

This script imports the `instrumentkit` module and uses the `open_gpibusb` method of the `Keithley2182` class to connect to the Keithley 2182 Power Meter. The first argument of `open_gpibusb` is the device path (`/dev/ttyUSB0` in this example) and the second argument is the GPIB address (10 in this example).

After connecting to the power meter, the script performs a measurement using the `measure` method of the `Keithley2182` class. The measurement mode is specified as `meter.Mode.voltage_dc`, which represents the DC voltage measurement mode.

Finally, the script prints the measurement value.

</TabItem>
</Tabs>