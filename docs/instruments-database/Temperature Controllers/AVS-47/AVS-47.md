---
title: Connecting to AVS 47 by Picowatt in Python
sidebar_label: AVS 47
description: The Picowatt AVS 47 is a resistance bridge used to measure the resistance of low-temperature sensors.
keywords: [temperature controllers, Picowatt, InstrumentKit]
slug: /instruments-database/temperature-controllers/picowatt/avs-47
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692394036/Instruments/Temperature%20Controllers/AVS-47/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AVS 47

## Instrument Card

<div className="flex">

<div>

The Picowatt AVS 47 is a resistance bridge used to measure the resistance of low-temperature sensors.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692394036/Instruments/Temperature%20Controllers/AVS-47/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.picowatt.fi/interfacing/avs47_serial_usb/avs47_serial_usb_w_userguide.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: MZ2000</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806114/Instruments/Vendor%20Logos/Picowatt.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

RV-Elektroniikka Oy PICOWATT is specialized in manufacturing instruments for thermometry at ultralow temperatures. Founded in February 1978, we have gathered 45 years of experience in designing and manufacturing low-noise precision.

<ul>
  <li>Headquarters: Finland</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
  <li>Vendor Website: <a href="https://www.picowatt.fi/index1.html">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='WIDGET2000' manufacturer='MZ2000'></FeaturedInstrumentVideo>


## Connect to the AVS 47 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="InstrumentKit" label="InstrumentKit">

Here is an example Python script that uses Instrumentkit to connect to a Picowatt AVS 47 resistance bridge:

```python
import instrumentkit as ik

# Connect to the AVS 47 resistance bridge
bridge = ik.picowatt.PicowattAVS47.open_gpibusb('/dev/ttyUSB0', 1)

# Set the input source to actual
bridge.input_source = bridge.InputSource.actual

# Set the multiplexer channel to 0
bridge.mux_channel = 0

# Get the resistance of the sensor at channel 0
resistance = bridge.sensor[0].resistance

# Print the resistance
print(resistance)
```

In this script, we first import the `instrumentkit` module as `ik`. Then, we use the `open_gpibusb` method of the `PicowattAVS47` class to connect to the AVS 47 resistance bridge. We pass the serial port path (`/dev/ttyUSB0`) and the GPIB address (1) as arguments to the `open_gpibusb` method.

Next, we set the input source to actual by assigning the `InputSource.actual` value to the `input_source` property of the `bridge` object.

Then, we set the multiplexer channel to 0 by assigning the value 0 to the `mux_channel` property of the `bridge` object.

Finally, we get the resistance of the sensor at channel 0 by accessing the `resistance` property of the `sensor` object at index 0. We store the resistance in the `resistance` variable and print it.

Note: This script assumes that you have installed the `instrumentkit` library and have the necessary hardware and drivers set up to communicate with the AVS 47 resistance bridge.

</TabItem>
</Tabs>