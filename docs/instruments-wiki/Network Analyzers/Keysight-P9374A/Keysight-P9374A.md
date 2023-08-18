---
title: Connecting to Keysight P9374A by Keysight in Python
sidebar_label: Keysight P9374A
description: P9374A Keysight Streamline USB Vector Network Analyzer, 20 GHz. Compact, faceless, USB vector network analyzer (VNA). Affordable full two-port VNA which dramatically reduces your size of test. Up to 20 GHz.
keywords: [network analyzers, Keysight, Qcodes]
slug: /instruments-wiki/network-analyzers/keysight/keysight-p9374a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692310129/Instruments/Network%20Analyzers/Keysight-P9374A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight P9374A

## Instrument Card

<div className="flex">

<div>

P9374A Keysight Streamline USB Vector Network Analyzer, 20 GHz. Compact, faceless, USB vector network analyzer (VNA). Affordable full two-port VNA which dramatically reduces your size of test. Up to 20 GHz.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692310129/Instruments/Network%20Analyzers/Keysight-P9374A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight P9374A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Qcodes" label="Qcodes">

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