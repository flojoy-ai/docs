
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 33521 A

## Instrument Card

<div className="flex">

<div>

Keysight 33500 Series function/arbitrary waveform generators offer the highest signal fidelity and implement a new breakthrough technology that provides you with the ability to generate more accurate arbitrary waveforms. With 10x better jitter than anything in their class, they offer unparalleled control of signal frequency for your most challenging measurements.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692078069/Instruments/RF%20Signal%20Generator/Keysight-33521-A/Keysight-33521-A.png" style={{ width: "325px" }} />

</div>

Keysight 33500 Series function/arbitrary waveform generators offer the highest signal fidelity and implement a new breakthrough technology that provides you with the ability to generate more accurate arbitrary waveforms. With 10x better jitter than anything in their class, they offer unparalleled control of signal frequency for your most challenging measurements.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692126006/Instruments/Vendor%20Logos/Agilent.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight 33521 A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">

Here is a Python script that uses Pymeasure to connect to a Keysight 33521A RF Signal Generator:

```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments import Agilent33500

# Create a connection to the instrument
adapter = VISAAdapter("GPIB::1")
generator = Agilent33500(adapter)

# Set the output waveform shape to sine
generator.shape = 'SIN'

# Set the frequency to 1 kHz
generator.frequency = 1e3

# Set the amplitude to 1 Vpp
generator.amplitude = 1

# Enable the output
generator.output = True

# Disconnect from the instrument
generator.disconnect()
```

This script connects to the instrument using the VISAAdapter and creates an instance of the Agilent33500 class. It then sets the output waveform shape to sine, frequency to 1 kHz, amplitude to 1 Vpp, and enables the output. Finally, it disconnects from the instrument.

</TabItem>
</Tabs>