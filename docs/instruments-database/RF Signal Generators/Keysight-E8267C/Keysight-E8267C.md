---
title: Connecting to Keysight E8267C by Agilent in Python
sidebar_label: Keysight E8267C
description: E8267C PSG Vector Signal Generator, up to 20 GHz
keywords: [rf signal generators, Agilent, QCodes]
slug: /instruments-database/rf-signal-generators/agilent/keysight-e8267c
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692639245/Instruments/RF%20Signal%20Generators/Keysight-E8267C/file.jpng
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight E8267C

## Instrument Card

<div className="flex">

<div>

E8267C PSG Vector Signal Generator, up to 20 GHz

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692639245/Instruments/RF%20Signal%20Generators/Keysight-E8267C/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: MZ2000</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126006/Instruments/Vendor%20Logos/Agilent.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

## Connect to the Keysight E8267C in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

To connect to a Keysight E8267C RF Signal Generator using Qcodes, you can use the following Python script:

```python
from qcodes.instrument.visa import VisaInstrument

# Create a class for the Keysight E8267C RF Signal Generator
class KeysightE8267C(VisaInstrument):
    def __init__(self, name, address, **kwargs):
        super().__init__(name, address, terminator="\n", **kwargs)
        # Add parameters and commands specific to the Keysight E8267C
        self.add_parameter(
            name="frequency",
            label="Frequency",
            unit="Hz",
            get_cmd="FREQ?",
            set_cmd="FREQ {}",
            get_parser=float,
            vals=Numbers(min_value=100e3, max_value=40e9),
        )
        # Add other parameters and commands as needed

# Create an instance of the Keysight E8267C RF Signal Generator
signal_generator = KeysightE8267C("signal_generator", "TCPIP0::192.168.1.1::INSTR")

# Connect to the signal generator
signal_generator.connect()

# Use the parameters and commands of the signal generator
frequency = signal_generator.frequency()
print(f"Current frequency: {frequency} Hz")

# Disconnect from the signal generator
signal_generator.disconnect()
```

This script creates a custom class `KeysightE8267C` that inherits from `VisaInstrument` provided by Qcodes. It adds parameters and commands specific to the Keysight E8267C RF Signal Generator, such as `frequency`. The script then creates an instance of the `KeysightE8267C` class, connects to the signal generator, retrieves the current frequency, and finally disconnects from the signal generator.

</TabItem>
</Tabs>