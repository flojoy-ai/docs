---
title: Connecting to DMM6500 Keithley by Keithley in Python
sidebar_label: DMM6500 Keithley
description: 6½ digit bench/system digital multimeter with large 5" (12.7cm) multi touch capacitive touchscreen and graphical display. It supports SCPI, TSP® scripting, Keithley 2000 SCPI emulation and Keysight 34401A SCPI emulation language modes.
keywords: [multimeters, Keithley, QCodes]
slug: /instruments-database/multimeters/keithley/DMM6500-keithley
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395564/Instruments/Multimeters/DMM6500-Keithley/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# DMM6500 Keithley

## Instrument Card

<div className="flex">

<div>

6½ digit bench/system digital multimeter with large 5" (12.7cm) multi touch capacitive touchscreen and graphical display. It supports SCPI, TSP® scripting, Keithley 2000 SCPI emulation and Keysight 34401A SCPI emulation language modes.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395564/Instruments/Multimeters/DMM6500-Keithley/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.farnell.com/datasheets/2607096.pdf?_ga=2.134065926.922366921.1579493884-611634051.1579231713">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806202/Instruments/Vendor%20Logos/Keithley.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
  <li>Vendor Website: <a href="https://www.tek.com/en">here</a></li>
</ul>
</details>

## Connect to the DMM6500 Keithley in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

Here is a Python script that uses Qcodes to connect to a Keithley DMM6500 Multimeter:

```python
from qcodes.instrument.visa import VisaInstrument
from qcodes.instrument.parameter import Parameter
from qcodes.utils.validators import Numbers


class KeithleyDMM6500(VisaInstrument):
    def __init__(self, name, address, **kwargs):
        super().__init__(name, address, terminator="\n", **kwargs)

        self.add_parameter(
            "voltage",
            get_cmd="MEAS:VOLT:DC?",
            get_parser=float,
            unit="V",
            vals=Numbers(),
        )

        self.add_parameter(
            "current",
            get_cmd="MEAS:CURR:DC?",
            get_parser=float,
            unit="A",
            vals=Numbers(),
        )

        self.add_parameter(
            "resistance",
            get_cmd="MEAS:RES?",
            get_parser=float,
            unit="Ohm",
            vals=Numbers(),
        )

        self.connect_message()

    def reset(self):
        self.write("*RST")


# Connect to the Keithley DMM6500
dmm = KeithleyDMM6500("dmm", "TCPIP0::192.168.1.1::INSTR")

# Reset the device
dmm.reset()

# Read voltage
voltage = dmm.voltage()
print("Voltage:", voltage)

# Read current
current = dmm.current()
print("Current:", current)

# Read resistance
resistance = dmm.resistance()
print("Resistance:", resistance)

# Close the connection
dmm.close()
```

This script creates a `KeithleyDMM6500` class that inherits from `VisaInstrument` provided by Qcodes. It adds three parameters: `voltage`, `current`, and `resistance`, which are used to read the corresponding measurements from the multimeter.

The `reset` method is used to reset the device.

To use the script, you need to provide the appropriate address for your Keithley DMM6500 in the `KeithleyDMM6500` instantiation. Then, you can call the parameter methods (`voltage()`, `current()`, `resistance()`) to read the measurements from the multimeter.

Note: Make sure you have Qcodes and the necessary dependencies installed before running this script.

</TabItem>
</Tabs>