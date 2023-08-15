
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PQSC

## Instrument Card

<div className="flex">

<div>

The Zurich Instruments PQSC Programmable Quantum System Controller brings together the instrumentation required for quantum computers with up to 100 qubits. Its ZSync low-latency, real-time communication links are designed specifically for quantum computing: the PQSC overcomes the practical limitations of traditional control methods, making automated and rapid qubit calibration routines a reality. Programming access to the powerful Xilinx UltraScale+ FPGA is the basis for developing new and optimized processing solutions for rapid tune-up and error correction adapted to the specific algorithm and computer architecture in use.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692107004/Instruments/Quantum%20Computing%20Control%20System/PQSC/file.webp" style={{width:"256px", height: "200px"}} />

</div>

The Zurich Instruments PQSC Programmable Quantum System Controller brings together the instrumentation required for quantum computers with up to 100 qubits. Its ZSync low-latency, real-time communication links are designed specifically for quantum computing: the PQSC overcomes the practical limitations of traditional control methods, making automated and rapid qubit calibration routines a reality. Programming access to the powerful Xilinx UltraScale+ FPGA is the basis for developing new and optimized processing solutions for rapid tune-up and error correction adapted to the specific algorithm and computer architecture in use.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126012/Instruments/Vendor%20Logos/Zurich_Instruments.png" style={{ width:"200px", height: "150px"}} />

Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis. <a href="https://www.zhinst.com/americas/en">Website</a>.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
</ul>
</details>

## Connect to the PQSC in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

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