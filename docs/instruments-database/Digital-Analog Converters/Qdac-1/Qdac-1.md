---
title: Connecting to Qdac 1 by Qdevil in Python
sidebar_label: Qdac 1
description: The original and popular QDAC from QDevil is a high-precision low-noise computer-controlled voltage generator designed for DC and low-frequency control of high impedance devices, such as gates in quantum electronics and quantum computer qubits. It also comes in a “high-current” version which can source up to 10 mA, for example for flux biasing of superconducting qubits. In addition to precise and stable voltage output, the QDAC can measure output currents, for example, to detect leaking gates or shorted bonding wires. The QDAC originates from the laboratories of the Center for Quantum Devices at the University of Copenhagen, where it is used for quantum computing research. The QDAC has 24 channels and offers a cost-effective way of getting many high-quality D/A converter channels.
keywords: [digital analog converters, Qdevil, QCodes Community]
slug: /instruments-database/digital-analog-converters/qdevil/qdac-1
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395788/Instruments/Digital-Analog%20Converters/Qdac-1/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Qdac 1

## Instrument Card

<div className="flex">

<div>

The original and popular QDAC from QDevil is a high-precision low-noise computer-controlled voltage generator designed for DC and low-frequency control of high impedance devices, such as gates in quantum electronics and quantum computer qubits. It also comes in a “high-current” version which can source up to 10 mA, for example for flux biasing of superconducting qubits. In addition to precise and stable voltage output, the QDAC can measure output currents, for example, to detect leaking gates or shorted bonding wires. The QDAC originates from the laboratories of the Center for Quantum Devices at the University of Copenhagen, where it is used for quantum computing research. The QDAC has 24 channels and offers a cost-effective way of getting many high-quality D/A converter channels.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395788/Instruments/Digital-Analog%20Converters/Qdac-1/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: MZ2000</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125970/Instruments/Vendor%20Logos/QDevils.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Founded in 2016, QDevil is an international quantum technology company focused on developing and manufacturing auxiliary electronics and specialized components, operating from mK to room temperature. The mission is to accelerate research and development in quantum electronics labs. To fulfill the mission QDevil helps customers around the world by supplying world-class auxiliary electronics.

<ul>
  <li>Headquarters: COPENHAGEN, DENMARK</li>
  <li>Yearly Revenue (millions, USD): 2.0</li>
  <li>Vendor Website: <a href="https://qdevil.com/">here</a></li>
</ul>
</details>

## Connect to the Qdac 1 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to a Qdac 1 Power Supply using Qcodes Community, you can use the following code:

```python
from qcodes.instrument_drivers.QDevil.QDac import QDac

# Create an instance of the QDac instrument
qdac = QDac('qdac', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Print the IDN of the instrument
print(qdac.IDN())

# Set the voltage of channel 1 to 1V
qdac.channels.ch01.v(1)

# Get the voltage of channel 1
voltage = qdac.channels.ch01.v()
print(f"Voltage of channel 1: {voltage} V")

# Close the connection to the instrument
qdac.close()
```

Note: Replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual VISA address of your Qdac instrument.

</TabItem>
</Tabs>