---
title: Lakeshore Model 325
description: The Model 325 dual-channel cryogenic temperature controller is capable of supporting nearly any diode, RTD, or thermocouple temperature sensor. Two independent PID control loops with heater outputs of 25 W and 2 W are configured to drive either a 50 Ω or 25 Ω load for optimal cryocooler control flexibility. Designed with ease of use, functionality, and value in mind, the Model 325 is ideal for general-purpose laboratory and industrial temperature measurement and control applications.
keywords: [temperature controllers, Lakeshore, Qcodes]
slug: /instruments-wiki/temperature-controllers/lakeshore/lakeshore-model-325
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692107081/Instruments/Temperature%20Controllers/Lakeshore-Model-325/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lakeshore Model 325

## Instrument Card

<div className="flex">

<div>

The Model 325 dual-channel cryogenic temperature controller is capable of supporting nearly any diode, RTD, or thermocouple temperature sensor. Two independent PID control loops with heater outputs of 25 W and 2 W are configured to drive either a 50 Ω or 25 Ω load for optimal cryocooler control flexibility. Designed with ease of use, functionality, and value in mind, the Model 325 is ideal for general-purpose laboratory and industrial temperature measurement and control applications.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692107081/Instruments/Temperature%20Controllers/Lakeshore-Model-325/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125966/Instruments/Vendor%20Logos/Lakeshore.png" style={{ width: "100%", objectFit: "cover" }} />

Supporting advanced scientific research, Lake Shore is a leading global innovator in measurement and control solutions. <a href="https://www.lakeshore.com/home">Website</a>.

<ul>
  <li>Headquarters: Westerville, Ohio, USA</li>
  <li>Yearly Revenue (millions, USD): 21.4</li>
</ul>
</details>

## Connect to the Lakeshore Model 325 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Lakeshore Model 325 Temperature Controller using Qcodes, you can use the following Python script:

```python
from qcodes.instrument.visa import VisaInstrument
from qcodes.instrument.channel import ChannelList
from qcodes.instrument.parameter import Parameter
from qcodes.utils.validators import Enum, Numbers


class LakeshoreModel325Sensor(Parameter):
    def __init__(self, name, parent, input_channel):
        super().__init__(name, label="Temperature", unit="K", get_cmd=f"KRDG? {input_channel}")
        self.parent = parent
        self.input_channel = input_channel

    def get(self):
        return float(self.parent.ask(f"KRDG? {self.input_channel}"))


class LakeshoreModel325Heater(Parameter):
    def __init__(self, name, parent, loop):
        super().__init__(name, label="Heater Output", unit="%", get_cmd=f"HTR? {loop}")
        self.parent = parent
        self.loop = loop

    def get(self):
        return float(self.parent.ask(f"HTR? {self.loop}"))


class LakeshoreModel325(VisaInstrument):
    def __init__(self, name, address, **kwargs):
        super().__init__(name, address, terminator="\r\n", **kwargs)

        self.add_parameter("sensor_A", parameter_class=LakeshoreModel325Sensor, input_channel="A")
        self.add_parameter("sensor_B", parameter_class=LakeshoreModel325Sensor, input_channel="B")
        self.add_parameter("heater_1", parameter_class=LakeshoreModel325Heater, loop=1)
        self.add_parameter("heater_2", parameter_class=LakeshoreModel325Heater, loop=2)

        self.connect_message()


# Connect to the Lakeshore Model 325 Temperature Controller
lakeshore = LakeshoreModel325("lakeshore", "TCPIP::192.168.1.1::INSTR")

# Print the temperature readings from sensor A and B
print("Sensor A Temperature:", lakeshore.sensor_A())
print("Sensor B Temperature:", lakeshore.sensor_B())

# Set the setpoint of heater 1 to 300 K
lakeshore.heater_1.set(300)

# Print the heater output of heater 2
print("Heater 2 Output:", lakeshore.heater_2())
```

Note: Replace `"TCPIP::192.168.1.1::INSTR"` with the actual address of your Lakeshore Model 325 Temperature Controller.

</TabItem>
</Tabs>