
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SHFQC

## Instrument Card

<div className="flex">

<div>

The SHFQC Qubit Controller can control, read out and provide fast feedback on up to 6 superconducting qubits. It integrates the functionality of the SHFQA Quantum Analyzer, the SHFSG Signal Generator and more in a single instrument.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118350/Instruments/Qubit%20Controller/SHFQC/SHFQC.png" style={{ width: "325px" }} />

</div>

The SHFQC Qubit Controller can control, read out and provide fast feedback on up to 6 superconducting qubits. It integrates the functionality of the SHFQA Quantum Analyzer, the SHFSG Signal Generator and more in a single instrument.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692126012/Instruments/Vendor%20Logos/Zurich_Instruments.png" style={{ width: "100%", objectFit: "cover" }} />

Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis. <a href="https://www.zhinst.com/americas/en">Website</a>.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
</ul>
</details>

## Connect to the SHFQC in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

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

# Close the connection
shfqc.close()
```

This code imports the necessary modules and creates an instance of the `SHFQC` instrument driver. You can then use the `sgchannels()`, `qachannels()`, and `scopes()` methods to print the available SGChannels, QAChannels, and Scopes, respectively. Finally, the connection is closed using the `close()` method.

</TabItem>
</Tabs>