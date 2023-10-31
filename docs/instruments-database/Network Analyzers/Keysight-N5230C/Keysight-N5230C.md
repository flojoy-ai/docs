---
title: Connecting to Keysight (Agilent) N5230C by Keysight (Agilent) in Python
sidebar_label: Keysight (Agilent) N5230C
description: The Keysight (Agilent) N5230C PNA-L is a microwave network analyzer made to test amplifiers, passive parts, and frequency converters using S-parameters and basic nonlinearity. The Keysight (Agilent) N5230C has a 110 dB system / 122 dB receiver dynamic range. The N5230C has a 300 kHz to 20 GHz frequency range and has 2 or 4 ports with built-in sources.
keywords: [network analyzers, Keysight, QCodes]
slug: /instruments-database/network-analyzers/keysight/keysight-n5230c
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395598/Instruments/Network%20Analyzers/Keysight-N5230C/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight (Agilent) N5230C

## Instrument Card

<div className="flex">

<div>

The Keysight (Agilent) N5230C PNA-L is a microwave network analyzer made to test amplifiers, passive parts, and frequency converters using S-parameters and basic nonlinearity. The Keysight (Agilent) N5230C has a 110 dB system / 122 dB receiver dynamic range. The N5230C has a 300 kHz to 20 GHz frequency range and has 2 or 4 ports with built-in sources.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395598/Instruments/Network%20Analyzers/Keysight-N5230C/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-01701/data-sheets/5989-7607.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: KEYSIGHT</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight (Agilent) Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='NETWORK_ANALYZERS' manufacturer='KEYSIGHT'></FeaturedInstrumentVideo>


## Connect to the Keysight (Agilent) N5230C in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='NETWORK_ANALYZERS' manufacturer='KEYSIGHT'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

```python
import qcodes as qc
from qcodes.instrument_drivers.Keysight.Keysight_N5230C import Keysight_N5230C

# Create an instance of the Keysight_N5230C instrument
n5230c = Keysight_N5230C('n5230c', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Connect to the instrument
n5230c.connect()

# Perform operations with the instrument

# Disconnect from the instrument
n5230c.disconnect()
```

Note: Replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual IP address or VISA resource string of your N5230C Network Analyzer.

</TabItem>
</Tabs>