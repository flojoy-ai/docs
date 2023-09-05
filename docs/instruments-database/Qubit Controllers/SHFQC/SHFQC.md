---
title: Connecting to SHFQC by Zurich Instruments in Python
sidebar_label: SHFQC
description: The SHFQC Qubit Controller can control, read out and provide fast feedback on up to 6 superconducting qubits. It integrates the functionality of the SHFQA Quantum Analyzer, the SHFSG Signal Generator and more in a single instrument.
keywords: [qubit controllers, Zurich Instruments, QCodes]
slug: /instruments-database/qubit-controllers/zurich-instruments/shfqc
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395678/Instruments/Qubit%20Controllers/SHFQC/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SHFQC

## Instrument Card

<div className="flex">

<div>

The SHFQC Qubit Controller can control, read out and provide fast feedback on up to 6 superconducting qubits. It integrates the functionality of the SHFQA Quantum Analyzer, the SHFSG Signal Generator and more in a single instrument.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395678/Instruments/Qubit%20Controllers/SHFQC/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://docs.zhinst.com/pdf/ziSHFQC_UserManual.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806207/Instruments/Vendor%20Logos/Zurich_Instruments.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
  <li>Vendor Website: <a href="https://www.zhinst.com/americas/en">here</a></li>
</ul>
</details>

## Connect to the SHFQC in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

To connect to a SHFQC Qubit Controller using Qcodes, you can use the following code:

```python
import qcodes as qc
from qcodes.instrument_drivers.zhinst import SHFQC

# Connect to the SHFQC Qubit Controller
shfqc = SHFQC("shfqc", "dev1234")

# Print the available SGChannels
print(shfqc.sgchannels())

# Print the available QAChannels
print(shfqc.qachannels())

# Print the available Scopes
print(shfqc.scopes())

# Close the connection to the SHFQC Qubit Controller
shfqc.close()
```

This code imports the necessary modules and creates an instance of the `SHFQC` instrument driver. You can then use the `sgchannels()`, `qachannels()`, and `scopes()` methods to print the available SGChannels, QAChannels, and Scopes, respectively. Finally, the `close()` method is called to close the connection to the SHFQC Qubit Controller.

</TabItem>
</Tabs>