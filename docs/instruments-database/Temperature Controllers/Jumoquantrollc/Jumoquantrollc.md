---
title: Connecting to Jumoquantrollc by Jumo in Python
sidebar_label: Jumoquantrollc
description: Control Of The Jumo Quantrol Lc100/Lc200/Lc300, Universal Pid Controller
keywords: [temperature controllers, Jumo, PyTango]
slug: /instruments-database/temperature-controllers/jumo/jumoquantrollc
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395489/Instruments/Temperature%20Controllers/Jumoquantrollc/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Jumoquantrollc

## Instrument Card

<div className="flex">

<div>

Control Of The Jumo Quantrol Lc100/Lc200/Lc300, Universal Pid Controller

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395489/Instruments/Temperature%20Controllers/Jumoquantrollc/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.jumo.net/attachments/JUMO/attachmentdownload?id=64643">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: JUMO</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806195/Instruments/Vendor%20Logos/Jumo.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

**JUMO** is your expert partner and manufacturer for industrial sensor technology up to the automation solution for temperature, pressure, and liquids.

<ul>
  <li>Headquarters: Canada</li>
  <li>Yearly Revenue (millions, USD): 69.0</li>
  <li>Vendor Website: <a href="https://jumo.ca/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='TEMPERATURE_CONTROLLERS' manufacturer='JUMO'></FeaturedInstrumentVideo>


## Connect to the Jumoquantrollc in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='TEMPERATURE_CONTROLLERS' manufacturer='JUMO'></NodeCardCollection>

</TabItem>
<TabItem value="PyTango" label="PyTango">


```python
import PyTango

# Define the Tango device name for the Jumoquantrollc Temperature Controller
device_name = "tango://localhost:10000/sys/tg_test/1"

# Create a Tango device proxy for the Jumoquantrollc Temperature Controller
device_proxy = PyTango.DeviceProxy(device_name)

# Read the current temperature from the device
temperature = device_proxy.read_attribute("Temperature").value

# Print the temperature
print("Current temperature: {} °C".format(temperature))
```

In this script, we first import the `PyTango` module. Then, we define the Tango device name for the Jumoquantrollc Temperature Controller. This device name is in the format `tango://<host>:<port>/<device>`, where `<host>` is the hostname or IP address of the Tango server, `<port>` is the port number of the Tango server, and `<device>` is the device name.

Next, we create a Tango device proxy using the `PyTango.DeviceProxy()` function and pass in the device name. This proxy allows us to interact with the Jumoquantrollc Temperature Controller.

We then use the `read_attribute()` method of the device proxy to read the current temperature attribute of the device. The attribute name is specified as a string, in this case, "Temperature". The `read_attribute()` method returns a `PyTango.AttributeValue` object, from which we extract the value using the `value` attribute.

Finally, we print the current temperature using the `print()` function.

Note: Make sure to replace the `device_name` variable with the actual Tango device name of your Jumoquantrollc Temperature Controller.

<<<<<<< HEAD:docs/instruments-database/Temperature Controllers/Jumoquantrollc/Jumoquantrollc.md
</TabItem>
</Tabs>
=======
<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/instruments-database/Temperature%20Controllers/Jumoquantrollc/Jumoquantrollc.md)
>>>>>>> d898a0e0 (feat: Concluded adding unique links to GitHub Edit page sources.):docs/Instruments/Temperature Controllers/Jumoquantrollc.md
