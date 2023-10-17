---
title: Connecting to QDAC by Qdevil in Python
sidebar_label: QDAC
description: The original and popular QDAC from QDevil is a high-precision low-noise computer-controlled voltage generator designed for DC and low-frequency control of high impedance devices, such as gates in quantum electronics and quantum computer qubits. It also comes in a “high-current” version which can source up to 10 mA, for example for flux biasing of superconducting qubits. In addition to precise and stable voltage output, the QDAC can measure output currents, for example, to detect leaking gates or shorted bonding wires. The QDAC originates from the laboratories of the Center for Quantum Devices at the University of Copenhagen, where it is used for quantum computing research. The QDAC has 24 channels and offers a cost-effective way of getting many high-quality D/A converter channels.
keywords: [power supplies, Qdevil, QCodes]
slug: /instruments-database/power-supplies/qdevil/qdac
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395621/Instruments/Power%20Supplies/QDAC/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# QDAC

## Instrument Card

<div className="flex">

<div>

The original and popular QDAC from QDevil is a high-precision low-noise computer-controlled voltage generator designed for DC and low-frequency control of high impedance devices, such as gates in quantum electronics and quantum computer qubits. It also comes in a “high-current” version which can source up to 10 mA, for example for flux biasing of superconducting qubits. In addition to precise and stable voltage output, the QDAC can measure output currents, for example, to detect leaking gates or shorted bonding wires. The QDAC originates from the laboratories of the Center for Quantum Devices at the University of Copenhagen, where it is used for quantum computing research. The QDAC has 24 channels and offers a cost-effective way of getting many high-quality D/A converter channels.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395621/Instruments/Power%20Supplies/QDAC/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: QDEVIL</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125970/Instruments/Vendor%20Logos/QDevils.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Founded in 2016, QDevil is an international quantum technology company focused on developing and manufacturing auxiliary electronics and specialized components, operating from mK to room temperature. The mission is to accelerate research and development in quantum electronics labs. To fulfill the mission QDevil helps customers around the world by supplying world-class auxiliary electronics.

<ul>
  <li>Headquarters: COPENHAGEN, DENMARK</li>
  <li>Yearly Revenue (millions, USD): 2.0</li>
  <li>Vendor Website: <a href="https://qdevil.com/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='POWER_SUPPLIES' manufacturer='QDEVIL'></FeaturedInstrumentVideo>


## Connect to the QDAC in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='POWER_SUPPLIES' manufacturer='QDEVIL'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

Here is an example Python script that uses Qcodes to connect to a QDAC Power Supply:

```python
import qcodes as qc
from qcodes_contrib_drivers.drivers.QDevil.QDac import QDac

# Connect to the QDAC Power Supply
qdac = QDac('qdac', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Print the firmware version
print(f"Firmware Version: {qdac.version}")

# Reset the QDAC Power Supply
qdac.reset()

# Set the voltage of channel 1 to 2V
qdac.channels.ch01.v(2)

# Get the current of channel 1
current = qdac.channels.ch01.i()
print(f"Current of channel 1: {current} A")

# Ramp the voltage of channel 2 from 0V to 5V in 1 second
qdac.ramp_voltages([2], [0], [5], 1)

# Print the status of all channels
qdac.print_overview()

# Disconnect from the QDAC Power Supply
qdac.close()
```

Note: Make sure to replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual VISA address of your QDAC Power Supply.

</TabItem>
</Tabs>