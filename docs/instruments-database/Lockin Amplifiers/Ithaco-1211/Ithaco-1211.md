---
title: Connecting to Ithaco 1211 by Ithaco in Python
sidebar_label: Ithaco 1211
description: The Ithaco 1211 Current Preamplifier measures current with full scale sensitivity ranging from 10-2 to 10-12 amperes
keywords: [lockin amplifiers, Ithaco, QCodes]
slug: /instruments-database/lockin-amplifiers/ithaco/ithaco-1211
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692719073/Instruments/Lockin%20Amplifiers/Ithaco-1211/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ithaco 1211

## Instrument Card

<div className="flex">

<div>

The Ithaco 1211 Current Preamplifier measures current with full scale sensitivity ranging from 10-2 to 10-12 amperes

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692719073/Instruments/Lockin%20Amplifiers/Ithaco-1211/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.artisantg.com/TestMeasurement/56129-1/DL-Instruments-Ithaco-1211-Current-Preamplifier#">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: ITHACO</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806141/Instruments/Vendor%20Logos/Ithaco.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Artisan Technology Group ® is a team of top-talent engineers and customer service specialists. We serve organizations that need to maintain and extend the life of their critical industrial, commercial, and military systems beyond obsolescence.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 17.0</li>
  <li>Vendor Website: <a href="https://www.artisantg.com/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='LOCKIN_AMPLIFIERS' manufacturer='ITHACO'></FeaturedInstrumentVideo>


## Connect to the Ithaco 1211 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='LOCKIN_AMPLIFIERS' manufacturer='ITHACO'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

To connect to an Ithaco 1211 Lockin Amplifier using Qcodes, you can use the following Python script:

```python
from qcodes.instrument.base import Instrument
from qcodes.instrument_drivers.ithaco.ithaco_1211 import Ithaco_1211

# Create an instance of the Ithaco_1211 instrument
ithaco = Ithaco_1211('ithaco', address='COM1')

# Connect to the instrument
ithaco.connect()

# Print the instrument's ID information
print(ithaco.get_idn())

# Set the sensitivity of the amplifier
ithaco.sens(1e-8)

# Set the output inversion
ithaco.invert(True)

# Set the sensitivity factor
ithaco.sens_factor(1)

# Set the suppression
ithaco.suppression(1e-7)

# Set the rise time
ithaco.risetime(0.3)

# Disconnect from the instrument
ithaco.disconnect()
```

This script creates an instance of the `Ithaco_1211` instrument, connects to it, and then performs various operations such as setting the sensitivity, inversion, sensitivity factor, suppression, and rise time. Finally, it disconnects from the instrument.

</TabItem>
</Tabs>