---
title: Keysight N5767A
description: The single output, 1500 W N5767A, provides universal AC input, GPIB, LAN, USB, LXI compliance, and analog/resistance control of output voltage and current. It delivers reliable performance and enhanced capabilities in a compact 1U package.
keywords: [power supplies, Keysight, Pymeasure]
slug: /instruments-wiki/power-supplies/keysight/keysight-n5767a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201191/Instruments/Power%20Supplies/Keysight-N5767A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight N5767A

## Instrument Card

<div className="flex">

<div>

The single output, 1500 W N5767A, provides universal AC input, GPIB, LAN, USB, LXI compliance, and analog/resistance control of output voltage and current. It delivers reliable performance and enhanced capabilities in a compact 1U package.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201191/Instruments/Power%20Supplies/Keysight-N5767A/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight N5767A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">

Here is a Python script that uses Pymeasure to connect to a Keysight N5767A Power Supply:

```python
from pymeasure.instruments import Instrument
from pymeasure.adapters import VISAAdapter

class KeysightN5767A(Instrument):
    # Current (A)
    current_range = Instrument.control(
        ":CURR?", ":CURR %g",
        """ A floating point property that controls the DC current range in
        Amps, which can take values from 0 to 25 A.
        Auto-range is disabled when this property is set. """,
        validator=truncated_range,
        values=[0, 25],
    )

    current = Instrument.measurement(":MEAS:CURR?",
                                     """ Reads a setting current in Amps. """
                                     )

    # Voltage (V)
    voltage_range = Instrument.control(
        ":VOLT?", ":VOLT %g V",
        """ A floating point property that controls the DC voltage range in
        Volts, which can take values from 0 to 60 V.
        Auto-range is disabled when this property is set. """,
        validator=truncated_range,
        values=[0, 60]
    )

    voltage = Instrument.measurement("MEAS:VOLT?",
                                     """ Reads a DC voltage measurement in Volts. """
                                     )

    # _status (0/1)
    _status = Instrument.measurement(":OUTP?",
                                     """ Read power supply current output status. """
                                     )

    def enable(self):
        """ Enables the flow of current. """
        self.write(":OUTP 1")

    def disable(self):
        """ Disables the flow of current. """
        self.write(":OUTP 0")

    def is_enabled(self):
        """ Returns True if the current supply is enabled. """
        return bool(self._status)

# Create a VISA adapter for communication
adapter = VISAAdapter("GPIB0::22::INSTR")

# Create an instance of the KeysightN5767A power supply
power_supply = KeysightN5767A(adapter)

# Connect to the power supply
power_supply.open()

# Example usage
print("Current Range:", power_supply.current_range)
print("Voltage Range:", power_supply.voltage_range)

power_supply.enable()
print("Is Enabled:", power_supply.is_enabled())

power_supply.disable()
print("Is Enabled:", power_supply.is_enabled())

# Close the connection
power_supply.close()
```

This script creates a class `KeysightN5767A` that represents the Keysight N5767A Power Supply. It defines properties and methods to control and measure the current and voltage of the power supply.

The script then creates a VISA adapter using `VISAAdapter("GPIB0::22::INSTR")`, where `"GPIB0::22::INSTR"` is the address of the power supply. You may need to change this address to match your setup.

An instance of the `KeysightN5767A` class is created using the adapter, and the power supply is opened with `power_supply.open()`.

The script demonstrates some example usage by printing the current range, voltage range, enabling and disabling the power supply, and checking if it is enabled.

Finally, the connection is closed with `power_supply.close()`.

</TabItem>
</Tabs>