---
title: Connecting to PL303QMT-P by Aimtti in Python
sidebar_label: PL303QMT-P
description: Bench/System Linear Regulated DC Power Supply Triple Ouput, 2 x 30V/3A plus 6V/6A, USB, RS232 & LAN Interfaces
keywords: [power supplies, Aimtti, QCodes]
slug: /instruments-database/power-supplies/aimtti/pl303qmt-p
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395507/Instruments/Power%20Supplies/PL303QMT-P/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PL303QMT-P

## Instrument Card

<div className="flex">

<div>

Bench/System Linear Regulated DC Power Supply Triple Ouput, 2 x 30V/3A plus 6V/6A, USB, RS232 & LAN Interfaces

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395507/Instruments/Power%20Supplies/PL303QMT-P/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://resources.aimtti.com/datasheets/AIM-PL+PL-P_series_DC_power_supplies_data_sheet-Iss5.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: MZ2000</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125963/Instruments/Vendor%20Logos/Aimtti.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

TTi (Thurlby Thandar Instruments) is a leading manufacturer of electronic test and measurement instruments. These products are sold throughout the world via carefully selected distributors and agents in each country. We are located in Huntingdon near to the famous university city of Cambridge, within one of the high technology areas of the United Kingdom.

<ul>
  <li>Headquarters: UK</li>
  <li>Yearly Revenue (millions, USD): 9000.0</li>
  <li>Vendor Website: <a href="https://www.aimtti.com/">here</a></li>
</ul>
</details>

## Connect to the PL303QMT-P in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

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

aim_tti = AimTTi("aim_tti", "TCPIP0::192.168.1.1::inst0::INSTR")
```

This script defines two classes: `AimTTiChannel` and `AimTTi`. `AimTTiChannel` represents a single channel of the Aim TTi power supply and `AimTTi` represents the entire power supply instrument.

In the `AimTTiChannel` class, two parameters are defined: `volt` and `curr`. These parameters allow you to get and set the voltage and current values of the channel.

In the `AimTTi` class, a `ChannelList` is created to hold the channels of the power supply. The number of channels is set to 3. Each channel is represented by an instance of `AimTTiChannel` and added as a submodule to the `AimTTi` instrument.

Finally, an instance of `AimTTi` is created with the name "aim_tti" and the VISA address of the power supply.

</TabItem>
</Tabs>