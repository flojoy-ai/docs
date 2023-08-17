---
title: Keithley 2700
description: The Model 2750 offers extended low ohms measurement capability and supports up to 5 7700 Switch cards for a maximum 200, 2-pole multiplexed channels. It also contains a built-in 20mV clamp that helps protect sensitive devices from damage and prevents self-heating errors during dry circuit testing.
keywords: [multimeters, Keithley, Pymeasure]
slug: /instruments-wiki/multimeters/keithley/keithley-2700
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201181/Instruments/Multimeters/Keithley-2700/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2700

## Instrument Card

<div className="flex">

<div>

The Model 2750 offers extended low ohms measurement capability and supports up to 5 7700 Switch cards for a maximum 200, 2-pole multiplexed channels. It also contains a built-in 20mV clamp that helps protect sensitive devices from damage and prevents self-heating errors during dry circuit testing.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201181/Instruments/Multimeters/Keithley-2700/file.png" style={{ width: "325px" }} />

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

## Connect to the Keithley 2700 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.instruments.keithley import Keithley2700

# Connect to the Keithley 2700
keithley = Keithley2700("GPIB::1")

# Perform measurements or other operations with the instrument
# For example, you can read the state of the channels
state = keithley.get_state_of_channels([101, 102, 103])
print("State of channels 101, 102, 103:", state)

# Close specific channels
keithley.closed_channels = [101, 102, 103]

# Open all channels
keithley.open_all_channels()

# Close rows to columns on the 7709 connection matrix
keithley.close_rows_to_columns([1, 2], [1, 2])

# Open rows to columns on the 7709 connection matrix
keithley.open_rows_to_columns([1, 2], [1, 2])

# Perform system operations
keithley.beep(1000, 1)
keithley.triad(1000, 1)
keithley.reset()

# Display closed channels on the instrument's display
keithley.display_closed_channels()

# Disconnect from the instrument
keithley.disconnect()
```

Note: This script assumes that you have already installed the `pymeasure` package and have the necessary GPIB connection set up for the Keithley 2700.

</TabItem>
</Tabs>