---
title: Connecting to Keysight E8257D by Agilent in Python
sidebar_label: Keysight E8257D
description: Metrology-grade analog signal generator offering industry-leading output power, level accuracy, and phase noise, with frequency coverage from 100 kHz to 67 GHz (extendable to 500 GHz) for testing advanced RF and microwave radar
keywords: [rf signal generators, Agilent, QCodes]
slug: /instruments-wiki/rf-signal-generators/agilent/keysight-e8257d
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395529/Instruments/RF%20Signal%20Generators/Keysight-E8257D/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight E8257D

## Instrument Card

<div className="flex">

<div>

Metrology-grade analog signal generator offering industry-leading output power, level accuracy, and phase noise, with frequency coverage from 100 kHz to 67 GHz (extendable to 500 GHz) for testing advanced RF and microwave radar

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395529/Instruments/RF%20Signal%20Generators/Keysight-E8257D/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692126006/Instruments/Vendor%20Logos/Agilent.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight E8257D in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

To connect to a Keysight E8257D RF Signal Generator using Qcodes, you can use the following Python script:

```python
import qcodes as qc
from qcodes.instrument_drivers.Keysight.Keysight_E8257D import Keysight_E8257D

# Create an instance of the instrument
signal_generator = Keysight_E8257D("signal_generator", "TCPIP0::192.168.1.1::INSTR")

# Connect to the instrument
signal_generator.connect()

# Print the instrument ID
print("Instrument ID:", signal_generator.IDN())

# Set the frequency to 1 GHz
signal_generator.frequency(1e9)

# Set the power to -10 dBm
signal_generator.power(-10)

# Enable the output
signal_generator.output_enabled(True)

# Disable the output after 1 second
qc.sleep(1)
signal_generator.output_enabled(False)

# Disconnect from the instrument
signal_generator.disconnect()
```

This script creates an instance of the `Keysight_E8257D` instrument class from the Qcodes driver. It then connects to the instrument using the specified address (`TCPIP0::192.168.1.1::INSTR`). The instrument ID is printed using the `IDN()` method.

The frequency is set to 1 GHz using the `frequency()` method, and the power is set to -10 dBm using the `power()` method. The output is enabled using the `output_enabled()` method.

After a delay of 1 second, the output is disabled by setting `output_enabled` to `False`.

Finally, the script disconnects from the instrument using the `disconnect()` method.

</TabItem>
</Tabs>