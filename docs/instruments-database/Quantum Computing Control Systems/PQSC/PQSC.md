---
title: Connecting to PQSC by Zurich Instruments in Python
sidebar_label: PQSC
description: The Zurich Instruments PQSC Programmable Quantum System Controller brings together the instrumentation required for quantum computers with up to 100 qubits. Its ZSync low-latency, real-time communication links are designed specifically for quantum computing-> the PQSC overcomes the practical limitations of traditional control methods, making automated and rapid qubit calibration routines a reality. Programming access to the powerful Xilinx UltraScale+ FPGA is the basis for developing new and optimized processing solutions for rapid tune-up and error correction adapted to the specific algorithm and computer architecture in use.
keywords: [quantum computing control systems, Zurich Instruments, QCodes]
slug: /instruments-database/quantum-computing-control-systems/zurich-instruments/pqsc
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395618/Instruments/Quantum%20Computing%20Control%20Systems/PQSC/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PQSC

## Instrument Card

<div className="flex">

<div>

The Zurich Instruments PQSC Programmable Quantum System Controller brings together the instrumentation required for quantum computers with up to 100 qubits. Its ZSync low-latency, real-time communication links are designed specifically for quantum computing: the PQSC overcomes the practical limitations of traditional control methods, making automated and rapid qubit calibration routines a reality. Programming access to the powerful Xilinx UltraScale+ FPGA is the basis for developing new and optimized processing solutions for rapid tune-up and error correction adapted to the specific algorithm and computer architecture in use.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395618/Instruments/Quantum%20Computing%20Control%20Systems/PQSC/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://docs.zhinst.com/pdf/ziPQSC_UserManual.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: MZ2000</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806207/Instruments/Vendor%20Logos/Zurich_Instruments.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
  <li>Vendor Website: <a href="https://www.zhinst.com/americas/en">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='WIDGET2000' manufacturer='MZ2000'></FeaturedInstrumentVideo>


## Connect to the PQSC in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

To connect to a PQSC Quantum Computing Control System using Qcodes, you can use the following Python script:

```python
import qcodes as qc
from qcodes.instrument_drivers.zhinst import PQSC

# Connect to the PQSC instrument
pqsc = PQSC("pqsc", "dev1234")

# Print the instrument ID
print(pqsc.IDN())

# Arm the PQSC
pqsc.arm()

# Start sending out triggers
pqsc.run()

# Wait until trigger generation and feedback processing is done
pqsc.wait_done()

# Stop the trigger generation
pqsc.stop()

# Close the connection to the instrument
pqsc.close()
```

In this script, we import the necessary modules and create an instance of the `PQSC` instrument driver. We provide the instrument name ("pqsc") and the instrument address ("dev1234") as arguments to the `PQSC` constructor.

We then use various methods of the `PQSC` instrument to interact with the instrument. For example, we can use the `arm()` method to prepare the PQSC for triggering the instruments, the `run()` method to start sending out triggers, and the `wait_done()` method to wait until trigger generation and feedback processing is done.

Finally, we close the connection to the instrument using the `close()` method.

Note: Replace "dev1234" with the actual address of your PQSC instrument.

</TabItem>
</Tabs>