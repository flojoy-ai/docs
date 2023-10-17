---
title: Connecting to Keithley 6220 by Keithley in Python
sidebar_label: Keithley 6220
description: The Model 6220 DC Current Source and Model 6221 AC and DC Current Source combine ease of use with exceptionally low current noise. Low current sourcing is critical to applications in test environments ranging from R&D to production, especially in the semiconductor, nanotechnology, and superconductor industries. High DC power supply sourcing accuracy and built-in control functions make the Models 6220 and 6221 ideal for applications like Hall measurements, resistance measurements using delta mode, pulsed measurements, and differential conductance measurements.
keywords: [power meters, Keithley, InstrumentKit]
slug: /instruments-database/power-meters/keithley/keithley-6220
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692393982/Instruments/Power%20Meters/Keithley-6220/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 6220

## Instrument Card

<div className="flex">

<div>

The Model 6220 DC Current Source and Model 6221 AC and DC Current Source combine ease of use with exceptionally low current noise. Low current sourcing is critical to applications in test environments ranging from R&D to production, especially in the semiconductor, nanotechnology, and superconductor industries. High DC power supply sourcing accuracy and built-in control functions make the Models 6220 and 6221 ideal for applications like Hall measurements, resistance measurements using delta mode, pulsed measurements, and differential conductance measurements.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692393982/Instruments/Power%20Meters/Keithley-6220/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.testequipmenthq.com/datasheets/KEITHLEY-6220-Datasheet.pdf">here</a></p>

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


## Connect to the Keithley 6220 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='POWER_METERS' manufacturer='KEITHLEY'></NodeCardCollection>

</TabItem>
<TabItem value="InstrumentKit" label="InstrumentKit">

To connect to a Keithley 6220 Power Supply using Instrumentkit, you can use the following Python script:

```python
import instrumentkit as ik

# Connect to the Keithley 6220 Power Supply
ccs = ik.keithley.Keithley6220.open_gpibusb("/dev/ttyUSB0", 10)

# Set the current to 10mA
ccs.current = 10 * ik.units.milliamp

# Disable the output and set the current to 0A
ccs.disable()
```

This script imports the `instrumentkit` module as `ik` and uses the `open_gpibusb` method from the `ik.keithley.Keithley6220` class to connect to the Keithley 6220 Power Supply. The first argument to `open_gpibusb` is the device path (`/dev/ttyUSB0` in this example) and the second argument is the GPIB address (10 in this example).

Once connected, you can use the `current` property to set the output current of the power supply. In this example, it sets the current to 10mA.

Finally, the `disable` method is called to set the output current to 0A and disable the output.

</TabItem>
</Tabs>