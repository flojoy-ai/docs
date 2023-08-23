---
title: Connecting to Series by Rohdes&Schwarz in Python
sidebar_label: Series
description: Currently no description
keywords: [network analyzers, Rohdes&Schwarz, QCodes]
slug: /instruments-wiki/network-analyzers/rohdes-schwarz/series
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692808740/Instruments/Network%20Analyzers/Series/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Series

## Instrument Card

<div className="flex">

<div>

Currently no description

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692808740/Instruments/Network%20Analyzers/Series/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://scdn.rohde-schwarz.com/ur/pws/dl_downloads/dl_common_library/dl_brochures_and_datasheets/pdf_1/ZNB_bro_en_3608-3278-12_v0301.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806194/Instruments/Vendor%20Logos/RohdeSchwarz.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Rohde & Schwarz GmbH & Co KG is an international electronics group specializing in the fields of electronic test equipment, broadcast & media, cybersecurity, radiomonitoring and radiolocation, and radiocommunication.

<ul>
  <li>Headquarters: Munich, Germany</li>
  <li>Yearly Revenue (millions, USD): 2500.0</li>
  <li>Vendor Website: <a href="https://www.rohde-schwarz.com/ca/home_48230.html">here</a></li>
</ul>
</details>

## Connect to the Series in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

```python
import qcodes as qc
from qcodes.instrument_drivers.rohde_schwarz.ZNB import ZNB

# Connect to the Series Network Analyzer
znb = ZNB("znb", "TCPIP0::192.168.15.100::inst0::INSTR")

# Print the instrument ID
print(znb.get_idn())

# Turn on the RF output
znb.rf_power(True)

# Set the start and stop frequencies
znb.channels.ch1.start(1e9)
znb.channels.ch1.stop(10e9)

# Set the number of points in the frequency sweep
znb.channels.ch1.npts(1001)

# Perform a frequency sweep and get the magnitude and phase data
data = znb.channels.ch1.trace.get()

# Print the magnitude and phase data
print(data.magnitude)
print(data.phase)

# Turn off the RF output
znb.rf_power(False)

# Close the connection to the instrument
znb.close()
```
Note: Replace `"TCPIP0::192.168.15.100::inst0::INSTR"` with the actual address of your Series Network Analyzer.

</TabItem>
</Tabs>