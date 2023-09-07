---
title: Connecting to Keysight 33220A by Agilent in Python
sidebar_label: Keysight 33220A
description: The Keysight 33220A is a 20 MHz synthesized function generator with built-in arbitrary waveform and pulse capabilities. Itscombination of bench-top and system features makes this function generator a versatile solution for your testing requirements now and in the future.
keywords: [rf signal generators, Agilent, InstrumentKit]
slug: /instruments-database/rf-signal-generators/agilent/keysight-33220a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692719424/Instruments/RF%20Signal%20Generators/Keysight-33220A/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 33220A

## Instrument Card

<div className="flex">

<div>

The Keysight 33220A is a 20 MHz synthesized function generator with built-in arbitrary waveform and pulse capabilities. Itscombination of bench-top and system features makes this function generator a versatile solution for your testing requirements now and in the future.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692719424/Instruments/RF%20Signal%20Generators/Keysight-33220A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-01144/data-sheets/5988-8544.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126006/Instruments/Vendor%20Logos/Agilent.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

## Connect to the Keysight 33220A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="InstrumentKit" label="InstrumentKit">


```python
from instrumentkit import Instrument, SCPIInstrument

# Define the SCPI commands for the Keysight 33220A RF Signal Generator
class Keysight33220A(SCPIInstrument):
    def __init__(self, resource_name):
        super().__init__(resource_name)
    
    def set_frequency(self, frequency):
        self.send_command(f"FREQ {frequency}")
    
    def set_amplitude(self, amplitude):
        self.send_command(f"VOLT {amplitude}")
    
    def enable_output(self):
        self.send_command("OUTP ON")
    
    def disable_output(self):
        self.send_command("OUTP OFF")

# Connect to the Keysight 33220A RF Signal Generator
signal_generator = Keysight33220A("TCPIP0::192.168.1.1::INSTR")

# Set the frequency to 1 MHz
signal_generator.set_frequency(1e6)

# Set the amplitude to 1 Vpp
signal_generator.set_amplitude(1)

# Enable the output
signal_generator.enable_output()

# Disable the output after 5 seconds
time.sleep(5)
signal_generator.disable_output()

# Disconnect from the signal generator
signal_generator.disconnect()
```

Make sure to replace `"TCPIP0::192.168.1.1::INSTR"` with the actual resource name or address of your Keysight 33220A RF Signal Generator.

</TabItem>
</Tabs>