---
title: Qdac 2
description: QDAC-II is the next generation of the successful QDAC from QDevil. It has all the outstanding features from its predecessor but is even more versatile and with superior performance. QDAC-II is a high-precision ultra-low-noise computer controlled DAC with 24 voltage generators, operating at a sample rate of 1MS/s – a thousand times faster than its predecessor. It is designed for DC and intermediate-frequency control of quantum devices, including, for example, gate electrodes and flux bias coils in qubits, but is a very versatile instrument that can be used for many other purposes. Each of the 24 channels has five voltage generators working in parallel-> One for DC, a sine generator, a triangle generator, a square wave generator, and an arbitrary waveform generator (1 million points/second). Additionally, each channel is equipped with a DC current sensor with a resolution down to a few tens of pA, typically used for gate leakage detection and with sample rates up to 3 kHz.
keywords: [digital analog converter, Qdevil, Qcodes Community]
slug: /instruments-wiki/digital-analog-converter/qdevil/qdac-2
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106818/Instruments/Digital-Analog%20Converter/Qdac-2/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Qdac 2

## Instrument Card

<div className="flex">

<div>

QDAC-II is the next generation of the successful QDAC from QDevil. It has all the outstanding features from its predecessor but is even more versatile and with superior performance. QDAC-II is a high-precision ultra-low-noise computer controlled DAC with 24 voltage generators, operating at a sample rate of 1MS/s – a thousand times faster than its predecessor. It is designed for DC and intermediate-frequency control of quantum devices, including, for example, gate electrodes and flux bias coils in qubits, but is a very versatile instrument that can be used for many other purposes. Each of the 24 channels has five voltage generators working in parallel: One for DC, a sine generator, a triangle generator, a square wave generator, and an arbitrary waveform generator (1 million points/second). Additionally, each channel is equipped with a DC current sensor with a resolution down to a few tens of pA, typically used for gate leakage detection and with sample rates up to 3 kHz.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106818/Instruments/Digital-Analog%20Converter/Qdac-2/file.png" style={{ width: "325px", height: "200px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125970/Instruments/Vendor%20Logos/QDevils.png" style={{ width: "100%", objectFit: "cover" }} />

Founded in 2016, QDevil is an international quantum technology company focused on developing and manufacturing auxiliary electronics and specialized components, operating from mK to room temperature. The mission is to accelerate research and development in quantum electronics labs. To fulfill the mission QDevil helps customers around the world by supplying world-class auxiliary electronics. <a href="https://qdevil.com/">Website</a>.

<ul>
  <li>Headquarters: COPENHAGEN, DENMARK</li>
  <li>Yearly Revenue (millions, USD): 2.0</li>
</ul>
</details>

## Connect to the Qdac 2 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

To connect to a Qdac 2 Power Supply using Qcodes Community, you can follow these steps:

1. Import the necessary modules:

```python
from qcodes.instrument.visa import VisaInstrument
from qcodes.instrument.channel import ChannelList
from qcodes.instrument.parameter import Parameter
```

2. Create a class for the Qdac 2 Power Supply:

```python
class QDac2(VisaInstrument):
    def __init__(self, name, address):
        super().__init__(name, address)

        self.channels = ChannelList(self, "Channels", QDac2Channel)

        self.add_parameter(
            "firmware_version",
            label="Firmware Version",
            get_cmd="FIRMWARE?",
            get_parser=str
        )

        self.connect_message()
```

3. Create a class for the Qdac 2 Power Supply channel:

```python
class QDac2Channel(Parameter):
    def __init__(self, name, instrument, channel):
        super().__init__(name, instrument=instrument)
        self.channel = channel

    def get_raw(self):
        return self.instrument.ask(f"GET {self.channel}")
```

4. Create an instance of the Qdac 2 Power Supply and connect to it:

```python
qdac = QDac2("qdac", "TCPIP::192.168.1.1::INSTR")
qdac.connect()
```

5. Access the channels and read their values:

```python
for channel in qdac.channels:
    print(f"Channel {channel.channel}: {channel()}")
```

Note: Replace `"TCPIP::192.168.1.1::INSTR"` with the actual address of your Qdac 2 Power Supply.

This code provides a basic example of how to connect to a Qdac 2 Power Supply using Qcodes Community. You can extend it to include more functionality and customize it according to your specific requirements.

</TabItem>
</Tabs>