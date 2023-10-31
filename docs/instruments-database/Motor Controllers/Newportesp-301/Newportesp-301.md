---
title: Connecting to Newportesp 301 by Newport in Python
sidebar_label: Newportesp 301
description: The ESP301-3N 3 Axis Motion Controller and Driver is the successor of the popular ESP300 motion controller. The ESP301 provides the same functionality as the ESP300 with a standard USB interface and extended front panel functions. For maximum backward compatibility, the ESP301 features the same motion commands and control algorithms and the same casing as the ESP300. The ESP301-3N drives and controls up to three axes of motion using any combination of DC or 2-phase stepper motors up to 3A per axis. This capability enables driving a large selection of Newport stages and actuators. Featuring an integrated manual front panel interface and Newport's unique ESP stage auto-detection and auto-configuration, the ESP301 provides most easy operation and excellent functionality at an affordable price.
keywords: [motor controllers, Newport, InstrumentKit]
slug: /instruments-database/motor-controllers/newport/newportesp-301
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692394031/Instruments/Motor%20Controllers/Newportesp-301/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Newportesp 301

## Instrument Card

<div className="flex">

<div>

The ESP301-3N 3 Axis Motion Controller and Driver is the successor of the popular ESP300 motion controller. The ESP301 provides the same functionality as the ESP300 with a standard USB interface and extended front panel functions. For maximum backward compatibility, the ESP301 features the same motion commands and control algorithms and the same casing as the ESP300. The ESP301-3N drives and controls up to three axes of motion using any combination of DC or 2-phase stepper motors up to 3A per axis. This capability enables driving a large selection of Newport stages and actuators. Featuring an integrated manual front panel interface and Newport's unique ESP stage auto-detection and auto-configuration, the ESP301 provides most easy operation and excellent functionality at an affordable price.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692394031/Instruments/Motor%20Controllers/Newportesp-301/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.newport.com/medias/sys_master/images/images/hda/h3e/9117547069470/ESP301-User-s-Manual.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: NEWPORT</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806178/Instruments/Vendor%20Logos/Newport.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Newport provides a wide range of photonics technology and products designed to enhance the capabilities and productivity of our customers' applications.

<ul>
  <li>Headquarters: Irvine, California, United States</li>
  <li>Yearly Revenue (millions, USD): 3500.0</li>
  <li>Vendor Website: <a href="https://www.newport.com/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='MOTOR_CONTROLLERS' manufacturer='NEWPORT'></FeaturedInstrumentVideo>


## Connect to the Newportesp 301 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='MOTOR_CONTROLLERS' manufacturer='NEWPORT'></NodeCardCollection>

</TabItem>
<TabItem value="InstrumentKit" label="InstrumentKit">

To connect to a Newport ESP-301 Positional Controller using Instrumentkit, you can use the following code:

```python
from instrumentkit import NewportESP301

# Connect to the controller
controller = NewportESP301.open_serial("COM3")

# Move the axis to a specific position
controller.axis[0].move(0.001, absolute=False)

# Close the connection
controller.close()
```

In this code, we first import the `NewportESP301` class from the `instrumentkit` module. Then, we use the `open_serial` method to connect to the controller using the specified serial port (in this case, "COM3").

Next, we can use the `controller.axis` property to access the individual axes of the controller. In this example, we move the first axis (`controller.axis[0]`) by 0.001 units relative to its current position.

Finally, we close the connection to the controller using the `close` method.

Note: Make sure to replace "COM3" with the correct serial port for your setup.

</TabItem>
</Tabs>