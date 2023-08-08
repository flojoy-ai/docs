
# SFM

## Instrument Card

Generation of standard TV signals (standards B&G, D&K, L&L, I, M, N, K1) including stereo/dual sound and NICAM
Double-sideband test modulator for all IFs between 32 and 46 MHz
RF upconverter, 5 to 1000 MHz, with high frequency resolution (1 Hz)

<details open>
<summary><h2>Manufacturer Card</h2></summary>

Rohde & Schwarz GmbH & Co KG is an international electronics group specializing in the fields of electronic test equipment, broadcast & media, cybersecurity, radiomonitoring and radiolocation, and radiocommunication. <a href="https://www.rohde-schwarz.com/ca/home_48230.html">Website</a>.

<ul>
  <li>Headquarters: Munich, Germany</li>
  <li>Yearly Revenue (millions, USD): 2500.0</li>
</ul>
</details>

## Connect to the SFM in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Pymeasure

To connect to a SFM RF Signal Generator using Pymeasure, you can use the following Python script:

```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.rf import SFM

# Create a VISA adapter for communication
adapter = VISAAdapter("GPIB0::1::INSTR")

# Connect to the SFM RF Signal Generator
signal_generator = SFM(adapter)

# Perform operations on the signal generator
signal_generator.frequency = 100E6  # Set the frequency to 100 MHz
signal_generator.level = -10  # Set the output level to -10 dBm

# Disconnect from the signal generator
signal_generator.disconnect()
```

This script creates a `VISAAdapter` object to establish a connection with the SFM RF Signal Generator using the GPIB interface. Then, it creates an `SFM` object with the adapter to interact with the instrument.

You can perform various operations on the `signal_generator` object, such as setting the frequency and output level. Finally, you can disconnect from the signal generator using the `disconnect()` method.

Note: Make sure to replace the GPIB address (`GPIB0::1::INSTR`) with the correct address of your SFM RF Signal Generator.

