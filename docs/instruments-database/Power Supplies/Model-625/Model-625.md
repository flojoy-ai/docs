---
title: Connecting to Model 625 by Lakeshore in Python
sidebar_label: Model 625
description: The Model 625 superconducting magnet power supply is the ideal supply for small to medium sized superconducting magnets used in high sensitivity materials research applications. The Model 625 is a practical alternative to both the larger, one size fits all, superconducting magnet supplies and the endless adaptations of generic power supplies. By limiting output power, Lake Shore was able to concentrate on the performance requirements of the most demanding magnet users. The resulting Model 625 provides high precision, low noise, safety, and convenience.
keywords: [power supplies, Lakeshore, QCodes Community]
slug: /instruments-database/power-supplies/lakeshore/model-625
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395782/Instruments/Power%20Supplies/Model-625/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Model 625

## Instrument Card

<div className="flex">

<div>

The Model 625 superconducting magnet power supply is the ideal supply for small to medium sized superconducting magnets used in high sensitivity materials research applications. The Model 625 is a practical alternative to both the larger, one size fits all, superconducting magnet supplies and the endless adaptations of generic power supplies. By limiting output power, Lake Shore was able to concentrate on the performance requirements of the most demanding magnet users. The resulting Model 625 provides high precision, low noise, safety, and convenience.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395782/Instruments/Power%20Supplies/Model-625/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.lakeshore.com/docs/default-source/product-downloads/catalog/lstc_625_l.pdf?sfvrsn=35bdc355_1">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: LAKESHORE</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692813206/Instruments/Vendor%20Logos/Lakeshore_Cryotronics.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Supporting advanced scientific research, Lake Shore is a leading global innovator in measurement and control solutions.

<ul>
  <li>Headquarters: Westerville, Ohio, USA</li>
  <li>Yearly Revenue (millions, USD): 21.4</li>
  <li>Vendor Website: <a href="https://www.lakeshore.com/home">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='POWER_SUPPLIES' manufacturer='LAKESHORE'></FeaturedInstrumentVideo>


## Connect to the Model 625 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='POWER_SUPPLIES' manufacturer='LAKESHORE'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to a Model 625 Power Supply using Qcodes Community, you can use the following Python script:

```python
from qcodes import Station, initialise_or_create_database_at
from qcodes.instrument_drivers.Lakeshore.Model_625 import Lakeshore625

# Create a station to hold the instrument
station = Station()

# Initialize or create a database for storing the instrument settings
initialise_or_create_database_at('path_to_database')

# Connect to the Model 625 Power Supply
magnet = Lakeshore625('magnet', coil_constant=1.0, field_ramp_rate=0.1, address='GPIB0::1::INSTR')

# Add the instrument to the station
station.add_component(magnet)

# Print the current field
print('Current field:', magnet.field())

# Set the field to 1 Tesla
magnet.set_field(1.0)

# Print the current field again
print('Current field:', magnet.field())

# Disconnect from the instrument
magnet.close()
```

Note: Replace `'path_to_database'` with the actual path where you want to store the instrument settings.

</TabItem>
</Tabs>