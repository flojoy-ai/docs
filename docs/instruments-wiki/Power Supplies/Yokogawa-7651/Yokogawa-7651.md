---
title: Connecting to Yokogawa 7651 by Yokogawa in Python
sidebar_label: Yokogawa 7651
description: The 7651 is a general-purpose DC source developed on YOKOGAWA's state-of-the-art DC standard technology. The dual multiplying D/A converter has enabled the compatibility of high-speed response and high resolution. The 7651 also provides high accuracy and stability. In addition to the source function (current supply), the sink function (current absorption) is also available, so the 7651 can be used as not only DC voltage/current source but also high-precision electronic load. Further, a series of powerful functions to meet the system use such as the programming function up to 50 steps, the IC memory card capable of storing 7 patterns of programs, and GP-IB interface are provided as standard. This 7651 can be used for a wide range of fields from R & D to production line, service and maintenance.
keywords: [power supplies, Yokogawa, Pymeasure, Instrumentkit]
slug: /instruments-wiki/power-supplies/yokogawa/yokogawa-7651
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692197344/Instruments/Power%20Supplies/Yokogawa-7651/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Yokogawa 7651

## Instrument Card

<div className="flex">

<div>

The 7651 is a general-purpose DC source developed on YOKOGAWA's state-of-the-art DC standard technology. The dual multiplying D/A converter has enabled the compatibility of high-speed response and high resolution. The 7651 also provides high accuracy and stability. In addition to the source function (current supply), the sink function (current absorption) is also available, so the 7651 can be used as not only DC voltage/current source but also high-precision electronic load. Further, a series of powerful functions to meet the system use such as the programming function up to 50 steps, the IC memory card capable of storing 7 patterns of programs, and GP-IB interface are provided as standard. This 7651 can be used for a wide range of fields from R & D to production line, service and maintenance.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692197344/Instruments/Power%20Supplies/Yokogawa-7651/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125993/Instruments/Vendor%20Logos/Yokogawa.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Yokogawa is a leading provider of Industrial Automation and Test and Measurement solutions. Combining superior technology with engineering services, project management, and maintenance, Yokogawa delivers field proven operational efficiency, safety, quality, and reliability. <a href="https://www.yokogawa.com/">Website</a>.

<ul>
  <li>Headquarters: Japan</li>
  <li>Yearly Revenue (millions, USD): 318.0</li>
</ul>
</details>

## Connect to the Yokogawa 7651 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.instruments.yokogawa import Yokogawa7651

# Connect to the Yokogawa 7651 Power Supply
yoko = Yokogawa7651("GPIB::1")

# Apply a current of 1 mA with a compliance voltage of 1 V
yoko.apply_current(max_current=1e-3, compliance_voltage=1)

# Enable the source
yoko.enable_source()

# Ramp the current to 5 mA over 0.5 seconds
yoko.ramp_to_current(5e-3, steps=25, duration=0.5)

# Shutdown the instrument
yoko.shutdown()
```

This script connects to the Yokogawa 7651 Power Supply using the GPIB address "GPIB::1". It applies a current of 1 mA with a compliance voltage of 1 V using the `apply_current` method. Then, it enables the source using the `enable_source` method. Next, it ramps the current to 5 mA over 0.5 seconds using the `ramp_to_current` method. Finally, it shuts down the instrument using the `shutdown` method.

Note: Make sure you have the necessary dependencies installed, such as `pymeasure` and the appropriate GPIB driver for your system.

</TabItem>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a Yokogawa 7651 Power Supply using Instrumentkit, you can use the following Python script:

```python
import instrumentkit as ik

# Connect to the Yokogawa 7651 Power Supply
yokogawa = ik.yokogawa.Yokogawa7651.open_gpibusb('/dev/ttyUSB0', 1)

# Set the voltage to 10V
yokogawa.voltage = 10 * ik.units.V

# Set the current to 50mA
yokogawa.current = 50 * ik.units.mA

# Enable the output
yokogawa.channel[0].output = True

# Disable the output
yokogawa.channel[0].output = False
```

This script imports the `instrumentkit` module as `ik` and uses the `open_gpibusb` method of the `Yokogawa7651` class to connect to the power supply. The first argument is the device path (`/dev/ttyUSB0`) and the second argument is the GPIB address (1).

Once connected, you can set the voltage and current using the `voltage` and `current` properties of the `Yokogawa7651` object. The values are specified using the `ik.units` module to provide the units (e.g., `10 * ik.units.V` for 10 volts).

You can also enable or disable the output using the `output` property of the power supply channel. Set it to `True` to enable the output and `False` to disable it.

Note that the script assumes you have already installed the `instrumentkit` package and its dependencies.

</TabItem>
</Tabs>