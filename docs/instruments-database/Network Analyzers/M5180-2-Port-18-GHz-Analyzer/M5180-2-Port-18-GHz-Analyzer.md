---
title: Connecting to M5180 2-Port 18 GHz Analyzer by Coppermountain in Python
sidebar_label: M5180 2-Port 18 GHz Analyzer
description: The M5180 is a 2-port, 18 GHz Vector Network Analyzer that delivers metrology-grade performance in a more economical package that excludes a number of advanced features
keywords: [network analyzers, Coppermountain, QCodes Community]
slug: /instruments-database/network-analyzers/coppermountain/m5180-2-port-18-ghz-analyzer
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395776/Instruments/Network%20Analyzers/M5180-2-Port-18-GHz-Analyzer/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# M5180 2-Port 18 GHz Analyzer

## Instrument Card

<div className="flex">

<div>

The M5180 is a 2-port, 18 GHz Vector Network Analyzer that delivers metrology-grade performance in a more economical package that excludes a number of advanced features

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395776/Instruments/Network%20Analyzers/M5180-2-Port-18-GHz-Analyzer/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://coppermountaintech.com/m-series-data-sheet/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806129/Instruments/Vendor%20Logos/Coppermountain.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

**Copper Mountain Technologies** develops innovative RF test and measurement solutions for engineers worldwide that enable engineers to extend their reach.

<ul>
  <li>Headquarters: US</li>
  <li>Yearly Revenue (millions, USD): 301.0</li>
  <li>Vendor Website: <a href="https://coppermountaintech.com/">here</a></li>
</ul>
</details>

## Connect to the M5180 2-Port 18 GHz Analyzer in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

```python
from qcodes import Station
from qcodes.instrument_drivers.copper_mountain.m5180 import M5180

# Create a station to hold the instruments
station = Station()

# Connect to the M5180 instrument
m5180 = M5180('m5180', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Add the M5180 instrument to the station
station.add_component(m5180)

# Print the available parameters of the M5180 instrument
print(m5180.parameters)

# Set the start frequency to 1 GHz
m5180.start(1e9)

# Set the stop frequency to 10 GHz
m5180.stop(10e9)

# Set the number of points to 1001
m5180.npts(1001)

# Perform a frequency sweep and get the S11 magnitude and phase
s11_mag, s11_phase = m5180.s11()

# Print the S11 magnitude and phase
print("S11 Magnitude:", s11_mag)
print("S11 Phase:", s11_phase)

# Disconnect from the instruments
m5180.close()
```
Note: Replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual address of your M5180 instrument.

</TabItem>
</Tabs>