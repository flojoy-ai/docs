---
title: Connecting to Keithley 6514 by Keithley in Python
sidebar_label: Keithley 6514
description: 6514 electrometer combines flexible interfacing capabilities with current sensitivity, charge measurement capabilities, resolution, and speed that are equal or superior to our earlier electrometers. The Model 6514’s built-in IEEE-488, RS-232, and digital I/O interfaces make it simple to configure fully automated, high speed systems for low-level testing. The 5½-digit Model 6514 is designed for applications that demand fast, yet precise measurements of low currents, voltages from high resistance sources, charges, or high resistances. The Model 6514’s exceptional measurement performance comes at an affordable price. While its cost is comparable with that of many high end DMMs, the Model 6514 offers far greater current sensitivity and significantly lower voltage burden (as low as 20μV) than other instruments can provide.
keywords: [power meters, Keithley, Instrumentkit]
slug: /instruments-wiki/power-meters/keithley/keithley-6514
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201265/Instruments/Power%20Meters/Keithley-6514/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 6514

## Instrument Card

<div className="flex">

<div>

6514 electrometer combines flexible interfacing capabilities with current sensitivity, charge measurement capabilities, resolution, and speed that are equal or superior to our earlier electrometers. The Model 6514’s built-in IEEE-488, RS-232, and digital I/O interfaces make it simple to configure fully automated, high speed systems for low-level testing. The 5½-digit Model 6514 is designed for applications that demand fast, yet precise measurements of low currents, voltages from high resistance sources, charges, or high resistances. The Model 6514’s exceptional measurement performance comes at an affordable price. While its cost is comparable with that of many high end DMMs, the Model 6514 offers far greater current sensitivity and significantly lower voltage burden (as low as 20μV) than other instruments can provide.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201265/Instruments/Power%20Meters/Keithley-6514/file.png" style={{ width: "325px", height: "200px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126010/Instruments/Vendor%20Logos/Keithley.png" style={{ width: "100%", objectFit: "cover" }} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
</ul>
</details>

## Connect to the Keithley 6514 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

Here is an example Python script that uses Instrumentkit to connect to a Keithley 6514 electrometer:

```python
import instrumentkit as ik

# Connect to the Keithley 6514 electrometer
dmm = ik.keithley.Keithley6514.open_gpibusb('/dev/ttyUSB0', 12)

# Set the measurement mode to voltage
dmm.mode = ik.keithley.Keithley6514.Mode.voltage

# Set the input range to 10 V
dmm.input_range = 10 * ik.units.volt

# Enable auto range
dmm.auto_range = True

# Perform an auto configuration for the current mode
dmm.auto_config(ik.keithley.Keithley6514.Mode.voltage)

# Fetch the latest reading
reading, timestamp = dmm.fetch()

# Print the reading and timestamp
print(f"Reading: {reading}")
print(f"Timestamp: {timestamp}")

# Close the connection to the Keithley 6514 electrometer
dmm.close()
```

This script demonstrates how to connect to the Keithley 6514 electrometer, set the measurement mode to voltage, set the input range, enable auto range, perform an auto configuration, fetch the latest reading, and print the reading and timestamp. Finally, it closes the connection to the electrometer.

</TabItem>
</Tabs>