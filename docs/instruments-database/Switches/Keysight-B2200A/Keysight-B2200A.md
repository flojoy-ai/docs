---
title: Connecting to Keysight B2200A by Keysight in Python
sidebar_label: Keysight B2200A
description: The Keysight B2200A fA leakage switch mainframe reduces the cost of test by enabling automatic characterization tests without compromising the measurement performance of the semiconductor parameter analyzer.
keywords: [switches, Keysight, QCodes]
slug: /instruments-database/switches/keysight/keysight-b2200a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395592/Instruments/Switches/Keysight-B2200A/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight B2200A

## Instrument Card

<div className="flex">

<div>

The Keysight B2200A fA leakage switch mainframe reduces the cost of test by enabling automatic characterization tests without compromising the measurement performance of the semiconductor parameter analyzer.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395592/Instruments/Switches/Keysight-B2200A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: KEYSIGHT</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='SWITCHES' manufacturer='KEYSIGHT'></FeaturedInstrumentVideo>


## Connect to the Keysight B2200A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='SWITCHES' manufacturer='KEYSIGHT'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

To connect to a Keysight B2200A Switch using Qcodes, you can use the following Python script:

```python
from qcodes.instrument.visa import VisaInstrument
from qcodes.instrument_drivers.Keysight.KeysightB2200 import KeysightB2200

# Create an instance of the KeysightB2200 instrument
switch = KeysightB2200('switch', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Connect to the instrument
switch.connect_message()

# Perform operations on the switch
switch.connect(1, 2)  # Connect input channel 1 to output channel 2
switch.disconnect(1, 2)  # Disconnect input channel 1 from output channel 2

# Close the connection to the instrument
switch.close()
```

This script creates an instance of the `KeysightB2200` instrument, specifying the instrument name and address. Then, it connects to the instrument using the `connect_message()` method. After that, you can perform operations on the switch, such as connecting and disconnecting input/output pairs using the `connect()` and `disconnect()` methods. Finally, the connection to the instrument is closed using the `close()` method.

Note: Make sure to replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual address of your Keysight B2200A Switch.

</TabItem>
</Tabs>