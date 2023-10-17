---
title: Connecting to Attocube ECC 100 by Attocube in Python
sidebar_label: Attocube ECC 100
description: The ECC100 is a state-ofthe-art motion controller, allowing the simultaneous operation of up to three positioners from attocube’s industrial ECS Drive series.
keywords: [motor controllers, Attocube, Instrumental]
slug: /instruments-database/motor-controllers/attocube/attocube-ecc-100
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395132/Instruments/Motor%20Controllers/Attocube-ECC-100/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Attocube ECC 100

## Instrument Card

<div className="flex">

<div>

The ECC100 is a state-ofthe-art motion controller, allowing the simultaneous operation of up to three positioners from attocube’s industrial ECS Drive series.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395132/Instruments/Motor%20Controllers/Attocube-ECC-100/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.attocube.com/application/files/6416/3697/3543/Specifications_ECC100.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: ATTOCUBE</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806147/Instruments/Vendor%20Logos/Attocube.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

**Attocube** is a leading pioneer for nanotechnology solutions in precision motion and nanopositioning applications, cryogenic microscopy,.

<ul>
  <li>Headquarters: Germany</li>
  <li>Yearly Revenue (millions, USD): 14.0</li>
  <li>Vendor Website: <a href="https://www.attocube.com/en">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='MOTOR_CONTROLLERS' manufacturer='ATTOCUBE'></FeaturedInstrumentVideo>


## Connect to the Attocube ECC 100 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='MOTOR_CONTROLLERS' manufacturer='ATTOCUBE'></NodeCardCollection>

</TabItem>
<TabItem value="Instrumental" label="Instrumental">

To connect to an Attocube ECC 100 Motion using Instrumental, you can use the following Python script:

```python
from instrumental import instrument, list_instruments

# List all available instruments
instruments = list_instruments()
print(instruments)

# Connect to the Attocube ECC 100 Motion
ecc100 = instrument(instruments[0])

# Get the current position of the linear stage
position = ecc100.get_position()
print("Current position:", position)

# Move the linear stage to a new position
new_position = 100  # Replace with the desired position
ecc100.move_to(new_position, wait=True)

# Get the new position of the linear stage
position = ecc100.get_position()
print("New position:", position)

# Disconnect from the Attocube ECC 100 Motion
ecc100.close()
```

Note: Make sure to replace `instruments[0]` with the appropriate instrument name from the list of available instruments.

</TabItem>
</Tabs>