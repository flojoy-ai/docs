---
title: Connecting to Keysight (Agilent) N9030B PXA by Keysight (Agilent) in Python
sidebar_label: Keysight (Agilent) N9030B PXA
description: PXA signal analyzers are ideally suited for high-performance research and development (R&D) applications in aerospace/defense and commercial wireless communications. The PXA analyzes signals over wider bandwidths, reduces measurement uncertainty, and reveals previously hidden signals with noise floor extension (NFE). Unravel complex signals through the PXA’s broad set of measurement applications and demodulation capabilities or add real-time spectrum analysis capabilities with an upgradeable option.
keywords: [rf signal generators, Keysight, QCodes]
slug: /instruments-database/rf-signal-generators/keysight/keysight-n9030b-pxa
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395600/Instruments/RF%20Signal%20Generators/Keysight-N9030B-PXA/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight (Agilent) N9030B PXA

## Instrument Card

<div className="flex">

<div>

PXA signal analyzers are ideally suited for high-performance research and development (R&D) applications in aerospace/defense and commercial wireless communications. The PXA analyzes signals over wider bandwidths, reduces measurement uncertainty, and reveals previously hidden signals with noise floor extension (NFE). Unravel complex signals through the PXA’s broad set of measurement applications and demodulation capabilities or add real-time spectrum analysis capabilities with an upgradeable option.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395600/Instruments/RF%20Signal%20Generators/Keysight-N9030B-PXA/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-05093/data-sheets/5992-1317.pdf">here</a></p>

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

<FeaturedInstrumentVideo category='RF_SIGNAL_GENERATORS' manufacturer='KEYSIGHT'></FeaturedInstrumentVideo>


## Connect to the Keysight (Agilent) N9030B PXA in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='RF_SIGNAL_GENERATORS' manufacturer='KEYSIGHT'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

Here's an example Python script that uses Qcodes to connect to a Keysight (Agilent) N9030B PXA RF Signal Generator:

```python
from qcodes.instrument_drivers.Keysight.KeysightN9030B import KeysightN9030B

# Connect to the instrument
instrument = KeysightN9030B("instrument_name", "TCPIP0::xxx.xxx.xxx.xxx::inst0::INSTR")

# Print the available modes
print(instrument.mode())

# Set the mode to Spectrum Analyzer
instrument.mode("SA")

# Set the start and stop frequencies
instrument.sa.start(1e9)
instrument.sa.stop(10e9)

# Set the number of points for the sweep
instrument.sa.npts(1001)

# Enable continuous measurement
instrument.cont_meas(True)

# Perform a measurement
instrument.sa.trace()

# Disconnect from the instrument
instrument.close()
```

Note: Replace `"instrument_name"` with the desired name for your instrument and `"TCPIP0::xxx.xxx.xxx.xxx::inst0::INSTR"` with the actual IP address or VISA resource string of your instrument.

</TabItem>
</Tabs>