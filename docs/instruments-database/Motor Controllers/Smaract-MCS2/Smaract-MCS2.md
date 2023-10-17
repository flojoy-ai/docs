---
title: Connecting to Smaract-MCS2 by Smaract in Python
sidebar_label: Smaract-MCS2
description: The MCS2 is SmarAct’s most versatile and modular control system.Its stringent modular design approach makes it the perfect choice for all field of applications
keywords: [motor controllers, Smaract, Instrumental]
slug: /instruments-database/motor-controllers/smaract/smaract-mcs2
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692639545/Instruments/Motor%20Controllers/Smaract-MCS2/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Smaract-MCS2

## Instrument Card

<div className="flex">

<div>

The MCS2 is SmarAct’s most versatile and modular control system.

Its stringent modular design approach makes it the perfect choice for all field of applications

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692639545/Instruments/Motor%20Controllers/Smaract-MCS2/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.smaract.com/en/control-systems-and-software/product/mcs2?download=files/media/files/MCS2_Modular_Concept.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: SMARACT</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806184/Instruments/Vendor%20Logos/SmartAct.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

In our [Motion](https://www.smaract.com/en/motion) business unit, we develop and produce high-precision, compact products for nano-positioning that meet the highest demands while being easy to handle.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 15.0</li>
  <li>Vendor Website: <a href="https://www.smaract.com/en/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='MOTOR_CONTROLLERS' manufacturer='SMARACT'></FeaturedInstrumentVideo>


## Connect to the Smaract-MCS2 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='MOTOR_CONTROLLERS' manufacturer='SMARACT'></NodeCardCollection>

</TabItem>
<TabItem value="Instrumental" label="Instrumental">

To connect to a Smaract-MCS2 Motion using Instrumental, you can use the following Python script:

```python
from instrumental import instrument

# Get the list of available instruments
paramsets = list_instruments()

# Connect to the first instrument in the list
dev = instrument(paramsets[0])

# Perform operations on the connected device
dev.move_home()
# Check the current position of the device
pos = dev.check_position()
print("Current position:", pos)
# Close the connection to the device
dev.close()
```

This script imports the `instrument` function from the `instrumental` module and uses it to connect to the first instrument in the list returned by the `list_instruments` function. It then performs some operations on the connected device, such as moving the device to its home position and checking its current position. Finally, it closes the connection to the device using the `close` method.

</TabItem>
</Tabs>