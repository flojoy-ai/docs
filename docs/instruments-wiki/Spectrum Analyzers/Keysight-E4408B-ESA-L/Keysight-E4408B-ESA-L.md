---
title: Connecting to Keysight E4408B ESA-L by Agilent in Python
sidebar_label: Keysight E4408B ESA-L
description: E4408B ESA-L Basic Spectrum Analyzer, 9 kHz to 26.5 GHz
keywords: [spectrum analyzers, Agilent, Pymeasure]
slug: /instruments-wiki/spectrum-analyzers/agilent/keysight-e4408b-esa-l
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200766/Instruments/Spectrum%20Analyzers/Keysight-E4408B-ESA-L/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight E4408B ESA-L

## Instrument Card

<div className="flex">

<div>

E4408B ESA-L Basic Spectrum Analyzer, 9 kHz to 26.5 GHz

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200766/Instruments/Spectrum%20Analyzers/Keysight-E4408B-ESA-L/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692126006/Instruments/Vendor%20Logos/Agilent.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight E4408B ESA-L in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">

```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments import AgilentE4408B

# Create a VISA adapter for the instrument
adapter = VISAAdapter("TCPIP::192.168.1.1::INSTR")

# Connect to the instrument
instrument = AgilentE4408B(adapter)

# Set the start and stop frequencies
instrument.start_frequency = 1e9  # 1 GHz
instrument.stop_frequency = 2e9  # 2 GHz

# Set the number of frequency points
instrument.frequency_points = 1001

# Set the frequency step
instrument.frequency_step = 1e6  # 1 MHz

# Set the center frequency
instrument.center_frequency = 1.5e9  # 1.5 GHz

# Set the sweep time
instrument.sweep_time = 0.1  # 100 ms

# Get the frequencies
frequencies = instrument.frequencies

# Get the trace data for trace 1
trace_data = instrument.trace(1)

# Get the trace data as a pandas DataFrame for trace 1
trace_df = instrument.trace_df(1)
```

This script connects to a Keysight E4408B ESA-L Spectrum Analyzer using a VISA adapter. It sets the start and stop frequencies, number of frequency points, frequency step, center frequency, and sweep time. It then retrieves the frequencies, trace data for trace 1, and trace data as a pandas DataFrame for trace 1.

</TabItem>
</Tabs>