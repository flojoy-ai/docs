
# UHFQA

## Instrument Card

<div className="flex">

<div>

The Zurich Instruments UHFQA Quantum Analyzer is a unique instrument for parallel readout of up to 10 superconducting or spin qubits with highest speed and fidelity. The UHFQA operates on a frequency span of up to ±600 MHz with nanosecond timing resolution, and it features 2 signal inputs and outputs for IQ base-band operation. Thanks to its low-latency signal processing chain of matched filters, real-time matrix operations, and state discrimination, the UHFQA supports the development of ambitious quantum computing projects for 100 qubits and more.

</div>

<img src={require("./UHFQA.jpg").default} style={{width:"256px", height: "200px"}}/>

</div>

The Zurich Instruments UHFQA Quantum Analyzer is a unique instrument for parallel readout of up to 10 superconducting or spin qubits with highest speed and fidelity. The UHFQA operates on a frequency span of up to ±600 MHz with nanosecond timing resolution, and it features 2 signal inputs and outputs for IQ base-band operation. Thanks to its low-latency signal processing chain of matched filters, real-time matrix operations, and state discrimination, the UHFQA supports the development of ambitious quantum computing projects for 100 qubits and more.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis. <a href="https://www.zhinst.com/americas/en">Website</a>.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
</ul>
</details>

## Connect to the UHFQA in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes

Here is an example Python script that uses Qcodes to connect to a UHFQA:

```python
import qcodes as qc
from qcodes.instrument_drivers.zhinst import UHFQA

# Connect to the UHFQA instrument
uhfqa = UHFQA("uhfqa", "dev1234")

# Print the instrument ID
print("Instrument ID:", uhfqa.IDN())

# Set the integration time
uhfqa.integration_time(0.1)

# Perform a measurement
result = uhfqa.measure()

# Print the measurement result
print("Measurement result:", result)

# Close the connection to the instrument
uhfqa.close()
```

In this example, we import the necessary modules and create an instance of the UHFQA instrument using the `UHFQA` class from the `qcodes.instrument_drivers.zhinst` module. We then print the instrument ID, set the integration time to 0.1 seconds, perform a measurement, and print the measurement result. Finally, we close the connection to the instrument using the `close()` method.

