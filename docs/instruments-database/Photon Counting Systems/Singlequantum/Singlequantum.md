---
title: Connecting to Singlequantum by Singlequantum in Python
sidebar_label: Singlequantum
description: Currently no description
keywords: [photon counting systems, Singlequantum, QCodes Community]
slug: /instruments-database/photon-counting-systems/singlequantum/singlequantum
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692719266/Instruments/Photon%20Counting%20Systems/Singlequantum/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Singlequantum

## Instrument Card

<div className="flex">

<div>

Currently no description

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692719266/Instruments/Photon%20Counting%20Systems/Singlequantum/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806196/Instruments/Vendor%20Logos/SingleQuantum.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

At Single Quantum, we confront every challenge with innovation, dedication, and passion. Founded in 2012, our team emerged as true pioneers of single photon detection technology: we were among the first to manufacture and commercialize superconducting nanowire single photon detectors. Since then, our multi-channel Single Quantum Eos photon detection system has been chosen by more than 100 academic and industrial labs all over the world to perform complex optical measurements.

<ul>
  <li>Headquarters: Delft, Zuid-Holland, The Netherlands</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
  <li>Vendor Website: <a href="https://singlequantum.com/">here</a></li>
</ul>
</details>

## Connect to the Singlequantum in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to a Singlequantum Photon Counting System using Qcodes Community, you can use the provided `WebSQControlqcode` class. Here's an example script that demonstrates how to connect to the instrument and perform some basic operations:

```python
from qcodes import Station
from qcodes.instrument_drivers.singlequantum.WebSQControlqcode import WebSQControlqcode

# Create a station to hold the instrument
station = Station()

# Connect to the Singlequantum Photon Counting System
instrument = WebSQControlqcode('singlequantum', address='localhost', port=12000)
station.add_component(instrument)

# Set the bias current to 10 uA
instrument.bias_current(10)

# Enable the detectors
instrument.detectors(True)

# Set the measurement period to 100 ms
instrument.measurement_periode(100)

# Acquire 5 points
instrument.npts(5)
counts = instrument.counters()

# Print the acquired counts
print(counts)

# Disconnect from the instrument
instrument.close()
```

In this script, we first create a `Station` object to hold the instrument. Then, we create an instance of the `WebSQControlqcode` class and add it to the station. We can then use the instrument's parameters and methods to interact with the Singlequantum Photon Counting System. In this example, we set the bias current, enable the detectors, set the measurement period, and acquire counts for 5 points. Finally, we print the acquired counts and close the connection to the instrument.

</TabItem>
</Tabs>