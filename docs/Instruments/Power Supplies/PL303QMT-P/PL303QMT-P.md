
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PL303QMT-P

## Instrument Card

<div className="flex">

<div>

Bench/System Linear Regulated DC Power Supply Triple Ouput, 2 x 30V/3A plus 6V/6A, USB, RS232 & LAN Interfaces

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118707/Instruments/Power%20Supplies/PL303QMT-P/PL303QMT-P.png" style={{ width: "325px" }} />

</div>

Bench/System Linear Regulated DC Power Supply Triple Ouput, 2 x 30V/3A plus 6V/6A, USB, RS232 & LAN Interfaces>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125963/Instruments/Vendor%20Logos/Aimtti.png" style={{ width: "100%", height: "200px",objectFit: "cover" }} />

TTi (Thurlby Thandar Instruments) is a leading manufacturer of electronic test and measurement instruments. These products are sold throughout the world via carefully selected distributors and agents in each country. We are located in Huntingdon near to the famous university city of Cambridge, within one of the high technology areas of the United Kingdom. <a href="https://www.aimtti.com/">Website</a>.

<ul>
  <li>Headquarters: UK</li>
  <li>Yearly Revenue (millions, USD): 9000.0</li>
</ul>
</details>

## Connect to the PL303QMT-P in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

Here is a Python script that uses Qcodes to connect to a PL303QMT-P Power Supply:

```python
from qcodes.instrument.visa import VisaInstrument
from qcodes.instrument.channel import ChannelList

class AimTTiChannel(VisaInstrument):
    def __init__(self, name, address, **kwargs):
        super().__init__(name, address, terminator="\n", **kwargs)
        self.add_parameter(
            "volt",
            get_cmd="V?",
            get_parser=float,
            set_cmd="V {}",
            label="Voltage",
            unit="V",
        )
        self.add_parameter(
            "curr",
            get_cmd="I?",
            get_parser=float,
            set_cmd="I {}",
            label="Current",
            unit="A",
        )

class AimTTi(VisaInstrument):
    def __init__(self, name, address, **kwargs):
        super().__init__(name, address, terminator="\n", **kwargs)
        channels = ChannelList(self, "Channels", AimTTiChannel, snapshotable=False)
        for i in range(1, 4):
            channel = AimTTiChannel(self, f"ch{i}", f"ch{i}")
            channels.append(channel)
            self.add_submodule(f"ch{i}", channel)
        self.add_submodule("channels", channels.to_channel_tuple())
        self.connect_message()

aim_tti = AimTTi("aim_tti", "TCPIP::192.168.1.1::INSTR")
print(aim_tti.get_idn())
print(aim_tti.channels.ch1.volt())
print(aim_tti.channels.ch2.curr())
```

This script defines two classes: `AimTTiChannel` and `AimTTi`. `AimTTiChannel` represents a single channel of the Aim TTi power supply and `AimTTi` represents the entire power supply instrument.

In the script, we create an instance of `AimTTi` called `aim_tti` and connect to the power supply using the specified address ("TCPIP::192.168.1.1::INSTR"). We then print the identification information of the power supply using `aim_tti.get_idn()`. Finally, we retrieve the voltage and current values of channel 1 and channel 2 using `aim_tti.channels.ch1.volt()` and `aim_tti.channels.ch2.curr()` respectively.

Note: Replace "TCPIP::192.168.1.1::INSTR" with the actual IP address or VISA resource address of your PL303QMT-P Power Supply.

</TabItem>
</Tabs>