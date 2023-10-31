---
title: Connecting to Keysight (Agilent) N3300A by Keysight (Agilent) in Python
sidebar_label: Keysight (Agilent) N3300A
description: The Keysight (Agilent) N3300A is a full-rack width mainframe with 6-slots that accepts combinations of N330x user-installable load modules (150 W to 600 W) for easy system configuration and future reconfiguration. The N3300A holds up to six N3302A, N3303A, N3304A, N3307A load modules, or three N3305A, N3306A double-wide modules, allowing a total up to 1,800 watts of maximum power.
keywords: [electronic loads, Keysight, QCodes Community]
slug: /instruments-database/electronic-loads/keysight/keysight-n3300a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395746/Instruments/Electronic%20Loads/Keysight-N3300A/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight (Agilent) N3300A

## Instrument Card

<div className="flex">

<div>

The Keysight (Agilent) N3300A is a full-rack width mainframe with 6-slots that accepts combinations of N330x user-installable load modules (150 W to 600 W) for easy system configuration and future reconfiguration. The N3300A holds up to six N3302A, N3303A, N3304A, N3307A load modules, or three N3305A, N3306A double-wide modules, allowing a total up to 1,800 watts of maximum power.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395746/Instruments/Electronic%20Loads/Keysight-N3300A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-06712/data-sheets/5980-0232.pdf">here</a></p>

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

<FeaturedInstrumentVideo category='ELECTRONIC_LOADS' manufacturer='KEYSIGHT'></FeaturedInstrumentVideo>


## Connect to the Keysight (Agilent) N3300A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='ELECTRONIC_LOADS' manufacturer='KEYSIGHT'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to a Keysight (Agilent) N3300A Electronic Load using Qcodes Community, you can use the following code:

```python
from qcodes.instrument_drivers.Keysight.Keysight_N3300A import Keysight_N3300A

# Create an instance of the instrument
load = Keysight_N3300A('load', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Connect to the instrument
load.connect()

# Now you can use the instrument to perform operations
# For example, you can set the load current
load.current.set(1)  # Set the load current to 1 Ampere

# Disconnect from the instrument
load.disconnect()
```

Note: Replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual VISA address of your Keysight (Agilent) N3300A Electronic Load.

</TabItem>
</Tabs>