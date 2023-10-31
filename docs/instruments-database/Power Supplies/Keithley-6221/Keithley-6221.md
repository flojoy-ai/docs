---
title: Connecting to Keithley 6221 by Keithley in Python
sidebar_label: Keithley 6221
description: The 6221 AC and DC Current Source combine ease of use with exceptionally low current noise. Low current sourcing is critical to applications in test environments ranging from R&D to production, especially in the semiconductor, nanotechnology, and superconductor industries. High sourcing accuracy and built-in control functions make the 6221 ideal for applications like Hall measurements, resistance measurements using delta mode, pulsed measurements, and differential conductance measurements.
keywords: [power supplies, Keithley, PyMeasure]
slug: /instruments-database/power-supplies/keithley/keithley-6221
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692719327/Instruments/Power%20Supplies/Keithley-6221/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 6221

## Instrument Card

<div className="flex">

<div>

The 6221 AC and DC Current Source combine ease of use with exceptionally low current noise. Low current sourcing is critical to applications in test environments ranging from R&D to production, especially in the semiconductor, nanotechnology, and superconductor industries. High sourcing accuracy and built-in control functions make the 6221 ideal for applications like Hall measurements, resistance measurements using delta mode, pulsed measurements, and differential conductance measurements.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692719327/Instruments/Power%20Supplies/Keithley-6221/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://download.tek.com/datasheet/6220-6221.pdf">here</a></p>

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


## Connect to the Keithley 6221 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='POWER_SUPPLIES' manufacturer='KEITHLEY'></NodeCardCollection>

</TabItem>
<TabItem value="PyMeasure" label="PyMeasure">

Here is an example Python script that uses Pymeasure to connect to a Keithley 6221 Power Supply:

```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.keithley import Keithley6221

# Create a VISA adapter for the instrument
adapter = VISAAdapter("GPIB::1")

# Connect to the Keithley 6221 Power Supply
keithley = Keithley6221(adapter)

# Enable the source
keithley.enable_source()

# Set the source current to 0.05 Amps
keithley.source_current = 0.05

# Set the source compliance to 10 Volts
keithley.source_compliance = 10

# Set the waveform function to square
keithley.waveform_function = "square"

# Set the waveform amplitude to 0.05 Amps
keithley.waveform_amplitude = 0.05

# Set the waveform offset to 0 Amps
keithley.waveform_offset = 0

# Set the waveform frequency to 347 Hz
keithley.waveform_frequency = 347

# Set the waveform duty cycle to 50%
keithley.waveform_dutycycle = 50

# Set the waveform ranging to "best"
keithley.waveform_ranging = "best"

# Set the waveform duration in cycles to 100
keithley.waveform_duration_cycles = 100

# Arm (load) the waveform
keithley.waveform_arm()

# Start the waveform
keithley.waveform_start()

# Wait for the waveform to finish
keithley.adapter.wait_for_srq()

# Disarm (unload) the waveform
keithley.waveform_abort()

# Disable the source
keithley.disable_source()

# Close the connection to the Keithley 6221 Power Supply
keithley.shutdown()
```

This script connects to the Keithley 6221 Power Supply using a VISA adapter and sets various properties of the instrument, such as the source current, source compliance, waveform function, waveform amplitude, waveform offset, waveform frequency, waveform duty cycle, waveform ranging, and waveform duration. It then arms and starts the waveform, waits for it to finish, and finally disables the source and closes the connection to the instrument.

</TabItem>
</Tabs>