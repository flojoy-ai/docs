---
title: Connecting to SHFQA by Zurich Instruments in Python
sidebar_label: SHFQA
description: The Zurich Instruments SHFQA Quantum Analyzer integrates in a single instrument a full real-time readout setup for up to 64 superconducting and spin qubits. The SHFQA operates in a frequency range from 0.5 to 8.5 GHz with a clean analysis bandwidth of 1 GHz and without the need for mixer calibration. Each of its 2 or 4 readout channels can analyze up to 16 qubits, 8 qutrits or 5 ququads
keywords: [quantum analyzers, Zurich Instruments, QCodes]
slug: /instruments-database/quantum-analyzers/zurich-instruments/shfqa
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395676/Instruments/Quantum%20Analyzers/SHFQA/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SHFQA

## Instrument Card

<div className="flex">

<div>

The Zurich Instruments SHFQA Quantum Analyzer integrates in a single instrument a full real-time readout setup for up to 64 superconducting and spin qubits. The SHFQA operates in a frequency range from 0.5 to 8.5 GHz with a clean analysis bandwidth of 1 GHz and without the need for mixer calibration. Each of its 2 or 4 readout channels can analyze up to 16 qubits, 8 qutrits or 5 ququads

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395676/Instruments/Quantum%20Analyzers/SHFQA/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://docs.zhinst.com/pdf/ziSHFQA_UserManual.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: ZURICH</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806207/Instruments/Vendor%20Logos/Zurich_Instruments.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
  <li>Vendor Website: <a href="https://www.zhinst.com/americas/en">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='QUANTUM_ANALYZERS' manufacturer='ZURICH'></FeaturedInstrumentVideo>


## Connect to the SHFQA in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='QUANTUM_ANALYZERS' manufacturer='ZURICH'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

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