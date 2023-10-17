---
title: Connecting to Keithley 195 by Keithley in Python
sidebar_label: Keithley 195
description: The Keithley 195A Digital Multimeter is a fully programmable instrument with a 5.5 digit resolution. In standard configuration, the Model 195A is capable of DC voltage measurements between 100nV and 1000V on six ranges, 2-terminal and 4-terminal resistance measurements between 100µO and 20MO on seven ranges. The instrument is designed to work with platinum RTD probes, a factor which contributes to high accuracy.
keywords: [multimeters, Keithley, InstrumentKit]
slug: /instruments-database/multimeters/keithley/keithley-195
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692719171/Instruments/Multimeters/Keithley-195/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 195

## Instrument Card

<div className="flex">

<div>

The Keithley 195A Digital Multimeter is a fully programmable instrument with a 5.5 digit resolution. In standard configuration, the Model 195A is capable of DC voltage measurements between 100nV and 1000V on six ranges, 2-terminal and 4-terminal resistance measurements between 100µO and 20MO on seven ranges. The instrument is designed to work with platinum RTD probes, a factor which contributes to high accuracy.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692719171/Instruments/Multimeters/Keithley-195/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="http://chrisgrossman.com/manuals/keithley/KEITHLEY-195A-Datasheet.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806202/Instruments/Vendor%20Logos/Keithley.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
  <li>Vendor Website: <a href="https://www.tek.com/en">here</a></li>
</ul>
</details>

## Connect to the Keithley 195 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="InstrumentKit" label="InstrumentKit">

To connect to a Keithley 195 Multimeter using Instrumentkit, you can use the following code:

```python
import instrumentkit as ik

# Connect to the Keithley 195 Multimeter
dmm = ik.keithley.Keithley195.open_gpibusb('/dev/ttyUSB0', 12)

# Perform a measurement
measurement = dmm.measure(dmm.Mode.resistance)

# Print the measurement result
print(measurement)
```

This code imports the `instrumentkit` module and uses the `open_gpibusb` method from the `ik.keithley.Keithley195` class to connect to the Keithley 195 Multimeter. The `open_gpibusb` method takes the device path (`'/dev/ttyUSB0'`) and the GPIB address (`12`) as arguments.

After connecting, you can use the `measure` method to perform a measurement. In this example, the measurement mode is set to resistance (`dmm.Mode.resistance`), but you can change it to other modes like voltage_dc or current_dc.

Finally, the measurement result is printed to the console.

</TabItem>
</Tabs>