
# SHFQA

## Instrument Card

<div className="flex">

<div>

The Zurich Instruments SHFQA Quantum Analyzer integrates in a single instrument a full real-time readout setup for up to 64 superconducting and spin qubits. The SHFQA operates in a frequency range from 0.5 to 8.5 GHz with a clean analysis bandwidth of 1 GHz and without the need for mixer calibration. Each of its 2 or 4 readout channels can analyze up to 16 qubits, 8 qutrits or 5 ququads

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692077985/Instruments/Quantum%20Analyzer/SHFQA/SHFQA.webp" style={{ width: "325px" }} />

</div>

The Zurich Instruments SHFQA Quantum Analyzer integrates in a single instrument a full real-time readout setup for up to 64 superconducting and spin qubits. The SHFQA operates in a frequency range from 0.5 to 8.5 GHz with a clean analysis bandwidth of 1 GHz and without the need for mixer calibration. Each of its 2 or 4 readout channels can analyze up to 16 qubits, 8 qutrits or 5 ququads>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1691785489/Instruments/Vendor%20Logos/Zurich_Instruments.jpg.png" />

Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis. <a href="https://www.zhinst.com/americas/en">Website</a>.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
</ul>
</details>

## Connect to the SHFQA in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes

Here is an example Python script that uses Qcodes to connect to a SHFQA:

```python
import qcodes as qc
from qcodes.instrument_drivers.zhinst import SHFQA

# Connect to the SHFQA instrument
shfqa = SHFQA("shfqa", "dev1234")

# Print the available QA channels
print(shfqa.qachannels())

# Configure the first QA channel
channel = shfqa.qachannels[0]
channel.configure_channel(
    input_range=0,
    output_range=0,
    center_frequency=1e9,
    mode="spectroscopy"
)

# Run a spectroscopy measurement on the first QA channel
channel.spectroscopy.run()

# Wait for the measurement to finish
channel.spectroscopy.wait_done()

# Read the measurement data
data = channel.spectroscopy.read()

# Print the measurement data
print(data)

# Disconnect from the SHFQA instrument
shfqa.close()
```

This script connects to a SHFQA instrument with the serial number "dev1234". It configures the first QA channel for spectroscopy mode and runs a spectroscopy measurement. It then waits for the measurement to finish and reads the measurement data. Finally, it prints the measurement data and closes the connection to the SHFQA instrument.

