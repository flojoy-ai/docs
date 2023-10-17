---
title: Connecting to Newmark-NSC-A1 by Newmark in Python
sidebar_label: Newmark-NSC-A1
description: The NSC-A1 Series motion controller is a powerful single axis stepper motor control system which combines a microstepping driver with a programmable controller into a compact envelope
keywords: [motor controllers, Newmark, Instrumental]
slug: /instruments-database/motor-controllers/newmark/newmark-nsc-a1
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692639360/Instruments/Motor%20Controllers/Newmark-NSC-A1/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Newmark-NSC-A1

## Instrument Card

<div className="flex">

<div>

The NSC-A1 Series motion controller is a powerful single axis stepper motor control system which combines a microstepping driver with a programmable controller into a compact envelope

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692639360/Instruments/Motor%20Controllers/Newmark-NSC-A1/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.newmarksystems.com/downloads/software/NSC-A/NSC-A1/NSC-A1_Manual_Rev_1.3.0.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: NEWMARK</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806153/Instruments/Vendor%20Logos/Newmark.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

**Newmark Systems** is a world leader in precision rotary table technology designed for critical positioning applications.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 12.0</li>
  <li>Vendor Website: <a href="https://www.newmarksystems.com/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='MOTOR_CONTROLLERS' manufacturer='NEWMARK'></FeaturedInstrumentVideo>


## Connect to the Newmark-NSC-A1 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='MOTOR_CONTROLLERS' manufacturer='NEWMARK'></NodeCardCollection>

</TabItem>
<TabItem value="Instrumental" label="Instrumental">

To connect to a Newmark-NSC-A1 Motion using Instrumental, you can use the following Python script:

```python
from instrumental import instrument, list_instruments

# Find the Newmark-NSC-A1 Motion instrument
instruments = list_instruments()
newmark_instrument = None
for instrument in instruments:
    if 'Newmark-NSC-A1' in instrument:
        newmark_instrument = instrument
        break

# Connect to the Newmark-NSC-A1 Motion instrument
if newmark_instrument:
    motion = instrument(newmark_instrument)
    print("Connected to Newmark-NSC-A1 Motion")
    
    # Get the current angle of the stage
    angle = motion.angle
    print(f"Current angle: {angle}")

    # Rotate the stage clockwise by 90 degrees
    motion.cw(90)

    # Set the velocity of the stage to 10 degrees per second
    motion.velocity = 10

    # Disconnect from the motion controller
    motion.close()
else:
    print("Newmark-NSC-A1 Motion not found")
```

This script first imports the necessary functions from the `instrumental` module. It then uses the `list_instruments()` function to get a list of available instruments. It searches for an instrument with the name containing "Newmark-NSC-A1" and assigns it to the `newmark_instrument` variable.

If a Newmark-NSC-A1 Motion instrument is found, it uses the `instrument()` function to connect to the instrument and assigns it to the `motion` variable. Finally, it prints a message indicating whether the connection was successful or not.

Note: The script assumes that you have already installed the `instrumental` package.

</TabItem>
</Tabs>