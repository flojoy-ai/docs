---
title: Connecting to SCPI Instrument by Generic SCPI in Python
sidebar_label: SCPI Instrument
description: All SCPI Instrument
keywords: [protocols, Generic SCPI, InstrumentKit]
slug: /instruments-database/protocols/generic-scpi/SCPI-instrument
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692639436/Instruments/Protocols/SCPI-Instrument/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SCPI Instrument

## Instrument Card

<div className="flex">

<div>

All SCPI Instrument

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692639436/Instruments/Protocols/SCPI-Instrument/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: MZ2000</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692142672/Instruments/Vendor%20Logos/FLOJOY_TEXT.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

.

<ul>
  <li>Headquarters: nan</li>
  <li>Yearly Revenue (millions, USD): nan</li>
  <li>Vendor Website: <a href="https://en.wikipedia.org/wiki/Standard_Commands_for_Programmable_Instruments">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='WIDGET2000' manufacturer='MZ2000'></FeaturedInstrumentVideo>


## Connect to the SCPI Instrument in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="InstrumentKit" label="InstrumentKit">

Here is an example Python script that uses Instrumentkit to connect to a SCPI Instrument Miscellaneous:

```python
import instrumentkit as ik

# Connect to the SCPI instrument
inst = ik.generic_scpi.SCPIInstrument.open_tcpip('192.168.0.2', 8888)

# Get the name of the connected instrument
name = inst.name
print(name)

# Get the SCPI version supported by the instrument
scpi_version = inst.scpi_version
print(scpi_version)

# Check if all operations sent to the instrument have been completed
op_complete = inst.op_complete
print(op_complete)

# Get the power on status of the instrument
power_on_status = inst.power_on_status
print(power_on_status)

# Set the power on status of the instrument
inst.power_on_status = True

# Get the results of the instrument's self test
self_test_ok = inst.self_test_ok
print(self_test_ok)

# Reset the instrument
inst.reset()

# Clear the instrument
inst.clear()

# Send a software trigger event to the instrument
inst.trigger()

# Instruct the instrument to wait until it has completed all received commands before continuing
inst.wait_to_continue()

# Get the power line frequency setting for the instrument
line_frequency = inst.line_frequency
print(line_frequency)

# Set the power line frequency setting for the instrument
inst.line_frequency = 50

# Check and clear the error queue for the instrument
error_queue = inst.check_error_queue()
print(error_queue)

# Get the brightness of the display on the instrument
display_brightness = inst.display_brightness
print(display_brightness)

# Set the brightness of the display on the instrument
inst.display_brightness = 0.5

# Get the contrast of the display on the instrument
display_contrast = inst.display_contrast
print(display_contrast)

# Set the contrast of the display on the instrument
inst.display_contrast = 0.8

# Close the connection to the instrument
inst.close()
```

This script demonstrates how to connect to a SCPI instrument using Instrumentkit and perform various operations such as getting the instrument name, checking the power on status, setting the power on status, resetting the instrument, getting and setting the display brightness and contrast, and more.

</TabItem>
</Tabs>