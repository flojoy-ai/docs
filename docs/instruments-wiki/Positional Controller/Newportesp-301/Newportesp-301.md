---
title: Newportesp 301
description: The ESP301-3N 3 Axis Motion Controller and Driver is the successor of the popular ESP300 motion controller. The ESP301 provides the same functionality as the ESP300 with a standard USB interface and extended front panel functions. For maximum backward compatibility, the ESP301 features the same motion commands and control algorithms and the same casing as the ESP300. The ESP301-3N drives and controls up to three axes of motion using any combination of DC or 2-phase stepper motors up to 3A per axis. This capability enables driving a large selection of Newport stages and actuators. Featuring an integrated manual front panel interface and Newport's unique ESP stage auto-detection and auto-configuration, the ESP301 provides most easy operation and excellent functionality at an affordable price.
keywords: [positional controller, Newport, Instrumentkit]
slug: /instruments-wiki/positional-controller/newport/newportesp-301
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692197345/Instruments/Positional%20Controller/Newportesp-301/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Newportesp 301

## Instrument Card

<div className="flex">

<div>

The ESP301-3N 3 Axis Motion Controller and Driver is the successor of the popular ESP300 motion controller. The ESP301 provides the same functionality as the ESP300 with a standard USB interface and extended front panel functions. For maximum backward compatibility, the ESP301 features the same motion commands and control algorithms and the same casing as the ESP300. The ESP301-3N drives and controls up to three axes of motion using any combination of DC or 2-phase stepper motors up to 3A per axis. This capability enables driving a large selection of Newport stages and actuators. Featuring an integrated manual front panel interface and Newport's unique ESP stage auto-detection and auto-configuration, the ESP301 provides most easy operation and excellent functionality at an affordable price.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692197345/Instruments/Positional%20Controller/Newportesp-301/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125992/Instruments/Vendor%20Logos/Newport.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Newport provides a wide range of photonics technology and products designed to enhance the capabilities and productivity of our customers' applications. <a href="https://www.newport.com/">Website</a>.

<ul>
  <li>Headquarters: Irvine, California, United States</li>
  <li>Yearly Revenue (millions, USD): 3500.0</li>
</ul>
</details>

## Connect to the Newportesp 301 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

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