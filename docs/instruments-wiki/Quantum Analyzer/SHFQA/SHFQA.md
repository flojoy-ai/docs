---
title: Connecting to SHFQA by Zurich Instruments in Python
sidebar_label: SHFQA
description: The Zurich Instruments SHFQA Quantum Analyzer integrates in a single instrument a full real-time readout setup for up to 64 superconducting and spin qubits. The SHFQA operates in a frequency range from 0.5 to 8.5 GHz with a clean analysis bandwidth of 1 GHz and without the need for mixer calibration. Each of its 2 or 4 readout channels can analyze up to 16 qubits, 8 qutrits or 5 ququads
keywords: [quantum analyzer, Zurich Instruments, Qcodes]
slug: /instruments-wiki/quantum-analyzer/zurich instruments/shfqa
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201093/Instruments/Quantum%20Analyzer/SHFQA/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SHFQA

## Instrument Card

<div className="flex">

<div>

The Zurich Instruments SHFQA Quantum Analyzer integrates in a single instrument a full real-time readout setup for up to 64 superconducting and spin qubits. The SHFQA operates in a frequency range from 0.5 to 8.5 GHz with a clean analysis bandwidth of 1 GHz and without the need for mixer calibration. Each of its 2 or 4 readout channels can analyze up to 16 qubits, 8 qutrits or 5 ququads

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201093/Instruments/Quantum%20Analyzer/SHFQA/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692126012/Instruments/Vendor%20Logos/Zurich_Instruments.png" style={{ width: "100%", objectFit: "cover" }} />

Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis. <a href="https://www.zhinst.com/americas/en">Website</a>.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
</ul>
</details>

## Connect to the SHFQA in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

Here is an example Python script that uses Qcodes to connect to a SHFQA Quantum Analyzer:

```python
import qcodes as qc
from qcodes.instrument_drivers.zhinst import SHFQA

# Connect to the SHFQA Quantum Analyzer
shfqa = SHFQA("shfqa", "dev1234")

# Print the available QA channels
print(shfqa.qachannels())

# Configure the first QA channel
channel = shfqa.qachannels[0]
channel.configure_channel(
    input_range=0,
    output_range=0,
    center_frequency=5e9,
    mode="spectroscopy"
)

# Run the spectroscopy measurement
channel.spectroscopy.run()

# Wait for the measurement to finish
channel.spectroscopy.wait_done()

# Read the measurement data
data = channel.spectroscopy.read()

# Print the measurement data
print(data)

# Disconnect from the SHFQA Quantum Analyzer
shfqa.close()
```

Note: Replace `"dev1234"` with the actual serial number of your SHFQA Quantum Analyzer.

</TabItem>
</Tabs>