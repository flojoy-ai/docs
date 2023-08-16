
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 33120A

## Instrument Card

<div className="flex">

<div>

33120A Function / Arbitrary Waveform Generator, 15 MHz

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118442/Instruments/Function%20Generators/Keysight-33120A/Keysight-33120A.png" style={{ width: "325px" }} />

</div>

33120A Function / Arbitrary Waveform Generator, 15 MHz>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125999/Instruments/Vendor%20Logos/HP.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight 33120A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments import HP33120A

# Create a VISA adapter for the instrument
adapter = VISAAdapter("GPIB0::10::INSTR")

# Connect to the instrument
instrument = HP33120A(adapter)

# Set the waveform shape to sinusoid
instrument.shape = 'sinusoid'

# Set the frequency to 1 kHz
instrument.frequency = 1000

# Set the amplitude to 1 Vpp
instrument.amplitude = 1

# Enable the output
instrument.output = True

# Generate a beep
instrument.beep()

# Disconnect from the instrument
instrument.disconnect()
```

This script first creates a VISA adapter using the GPIB address of the instrument. Then, it creates an instance of the `HP33120A` class, passing the adapter as an argument. It sets the waveform shape to sinusoid, frequency to 1 kHz, and amplitude to 1 Vpp. It enables the output and generates a beep. Finally, it disconnects from the instrument.

</TabItem>
</Tabs>