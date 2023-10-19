---
title: Connecting to Keysight (Agilent) P9374A by Keysight (Agilent) in Python
sidebar_label: Keysight (Agilent) P9374A
description: P9374A Keysight (Agilent) Streamline USB Vector Network Analyzer, 20 GHz. Compact, faceless, USB vector network analyzer (VNA). Affordable full two-port VNA which dramatically reduces your size of test. Up to 20 GHz.
keywords: [network analyzers, Keysight, QCodes]
slug: /instruments-database/network-analyzers/keysight/keysight-p9374a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395601/Instruments/Network%20Analyzers/Keysight-P9374A/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight (Agilent) P9374A

## Instrument Card

<div className="flex">

<div>

P9374A Keysight (Agilent) Streamline USB Vector Network Analyzer, 20 GHz. Compact, faceless, USB vector network analyzer (VNA). Affordable full two-port VNA which dramatically reduces your size of test. Up to 20 GHz.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395601/Instruments/Network%20Analyzers/Keysight-P9374A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-06033/data-sheets/5992-2765.pdf">here</a></p>

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


## Connect to the Keysight (Agilent) P9374A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='NETWORK_ANALYZERS' manufacturer='KEYSIGHT'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

```python
import qcodes as qc
from qcodes.instrument_drivers.Keysight.Keysight_P9374A import KeysightP9374A

# Create an instance of the KeysightP9374A instrument
pna = KeysightP9374A('pna', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Connect to the instrument
pna.connect()

# Perform operations with the instrument
pna.get_options()

# Disconnect from the instrument
pna.disconnect()
```

Explanation:
1. Import the necessary modules: `qcodes` and the `KeysightP9374A` instrument driver.
2. Create an instance of the `KeysightP9374A` instrument with a name ('pna') and the instrument's address ('TCPIP0::192.168.1.1::inst0::INSTR').
3. Connect to the instrument using the `connect()` method.
4. Perform operations with the instrument, in this case, calling the `get_options()` method.
5. Disconnect from the instrument using the `disconnect()` method.

</TabItem>
</Tabs>