
# PQSC

## Instrument Card

<div className="flex">

<div>

The Zurich Instruments PQSC Programmable Quantum System Controller brings together the instrumentation required for quantum computers with up to 100 qubits. Its ZSync low-latency, real-time communication links are designed specifically for quantum computing: the PQSC overcomes the practical limitations of traditional control methods, making automated and rapid qubit calibration routines a reality. Programming access to the powerful Xilinx UltraScale+ FPGA is the basis for developing new and optimized processing solutions for rapid tune-up and error correction adapted to the specific algorithm and computer architecture in use.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692078031/Instruments/Quantum%20Computing%20Control%20System/PQSC/PQSC.webp" style={{ width: "325px", height: "150px" }} />

</div>

The Zurich Instruments PQSC Programmable Quantum System Controller brings together the instrumentation required for quantum computers with up to 100 qubits. Its ZSync low-latency, real-time communication links are designed specifically for quantum computing: the PQSC overcomes the practical limitations of traditional control methods, making automated and rapid qubit calibration routines a reality. Programming access to the powerful Xilinx UltraScale+ FPGA is the basis for developing new and optimized processing solutions for rapid tune-up and error correction adapted to the specific algorithm and computer architecture in use.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1691785489/Instruments/Vendor%20Logos/Zurich_Instruments.jpg.png" />

Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis. <a href="https://www.zhinst.com/americas/en">Website</a>.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
</ul>
</details>

## Connect to the PQSC in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes

To connect to a PQSC using Qcodes, you can use the following Python script:

```python
import qcodes as qc
from qcodes.instrument_drivers.zhinst import PQSC

# Create a connection to the PQSC instrument
pqsc = PQSC("pqsc", "dev1234")

# Connect to the instrument
pqsc.connect()

# Now you can use the instrument for measurements
# For example, you can arm and run the PQSC
pqsc.arm_and_run()

# Stop the trigger generation
pqsc.stop()

# Disconnect from the instrument
pqsc.disconnect()
```

In this script, we import the necessary modules and create an instance of the `PQSC` instrument driver. We provide a name for the instrument ("pqsc") and the device identifier ("dev1234") as arguments to the `PQSC` constructor.

Then, we connect to the instrument using the `connect()` method. After connecting, we can use the instrument for measurements. In this example, we arm and run the PQSC using the `arm_and_run()` method, and then stop the trigger generation using the `stop()` method.

Finally, we disconnect from the instrument using the `disconnect()` method.

Note: Make sure to replace "dev1234" with the actual device identifier of your PQSC instrument.

