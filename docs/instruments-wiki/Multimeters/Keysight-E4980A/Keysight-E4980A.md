---
title: Keysight E4980A
description: The E4980A precision LCR meter provides the best combination of accuracy, speed, and versatility for a wide range of component measurements.
keywords: [multimeters, Keysight, Pymeasure, Qcodes]
slug: /instruments-wiki/multimeters/keysight/keysight-e4980a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106813/Instruments/Multimeters/Keysight-E4980A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight E4980A

## Instrument Card

<div className="flex">

<div>

The E4980A precision LCR meter provides the best combination of accuracy, speed, and versatility for a wide range of component measurements.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106813/Instruments/Multimeters/Keysight-E4980A/file.png" style={{ width: "325px" }} />

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

## Connect to the Keysight E4980A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments import Instrument
from pymeasure.instruments.validators import strict_discrete_set, strict_range

class AgilentE4980(Instrument):
    """Represents LCR meter E4980A/AL"""

    ac_voltage = Instrument.control(":VOLT:LEV?", ":VOLT:LEV %g",
                                    "AC voltage level, in Volts",
                                    validator=strict_range,
                                    values=[0, 20])

    ac_current = Instrument.control(":CURR:LEV?", ":CURR:LEV %g",
                                    "AC current level, in Amps",
                                    validator=strict_range,
                                    values=[0, 0.1])

    frequency = Instrument.control(":FREQ:CW?", ":FREQ:CW %g",
                                   "AC frequency (range depending on model), in Hertz",
                                   validator=strict_range,
                                   values=[20, 2e6])

    impedance = Instrument.measurement(
        ":FETCH?",
        "Measured data A and B, according to :attr:`~.AgilentE4980.mode`",
        get_process=lambda x: x[:2])

    mode = Instrument.control("FUNCtion:IMPedance:TYPE?", "FUNCtion:IMPedance:TYPE %s",
                              """
Select quantities to be measured:
...
""",
                              validator=strict_discrete_set,
                              values=["CPD", "CPQ", "CPG", "CPRP",
                                      "CSD", "CSQ", "CSRS",
                                      "LPD", "LPQ", "LPG", "LPRP",
                                      "LSD", "LSQ", "LSRS",
                                      "RX", "ZTD", "ZTR", "GB", "YTD", "YTR", ])

    trigger_source = Instrument.control("TRIG:SOUR?", "TRIG:SOUR %s",
                                        """
Select trigger source; accept the values:
...
""",
                                        validator=strict_discrete_set,
                                        values=["HOLD", "INT", "BUS", "EXT"])

    def __init__(self, adapter, name="Agilent E4980A/AL LCR meter", **kwargs):
        super().__init__(
            adapter, name, **kwargs
        )
        self.timeout = 30000
        self.write("FORM ASC")

    def freq_sweep(self, freq_list, return_freq=False):
        """
        Run frequency list sweep using sequential trigger.
        ...
        """

    def aperture(self, time=None, averages=1):
        """
        Set and get aperture.
        ...
        """

# Connect to the instrument
adapter = VISAAdapter("TCPIP::192.168.1.1::INSTR")  # Replace with the actual IP address of the instrument
meter = AgilentE4980(adapter)

# Set the AC voltage level
meter.ac_voltage = 10

# Set the AC current level
meter.ac_current = 0.05

# Set the frequency
meter.frequency = 1000

# Set the measurement mode
meter.mode = "CPD"

# Set the trigger source
meter.trigger_source = "INT"

# Perform a frequency sweep
freq_list = [100, 1000, 10000]
a_data, b_data = meter.freq_sweep(freq_list)

# Get the impedance measurement
impedance = meter.impedance

# Set the aperture
meter.aperture(time="SHORT", averages=10)
```

Please note that you need to replace `"TCPIP::192.168.1.1::INSTR"` with the actual IP address of your instrument.

</TabItem>
<TabItem value="Qcodes" label="Qcodes">

Here is a Python script that uses Qcodes to connect to a Keysight E4980A Multimeter:

```python
from qcodes.instrument_drivers.Keysight.Keysight_E4980A import KeysightE4980A

# Create an instance of the instrument
meter = KeysightE4980A("meter", "TCPIP0::192.168.1.1::INSTR")

# Connect to the instrument
meter.connect()

# Perform measurements
impedance = meter.measure_impedance.get()
print("Impedance:", impedance)

# Disconnect from the instrument
meter.disconnect()
```

In this script, we import the `KeysightE4980A` class from the `qcodes.instrument_drivers.Keysight.Keysight_E4980A` module. We then create an instance of the instrument by providing a name and the instrument's address (in this case, a TCP/IP address). We connect to the instrument using the `connect()` method.

We can then perform measurements using the instrument's parameters. In this example, we use the `measure_impedance` parameter to get the impedance measurement. Finally, we disconnect from the instrument using the `disconnect()` method.

</TabItem>
</Tabs>