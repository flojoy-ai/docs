
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight E8257D

## Instrument Card

<div className="flex">

<div>

Metrology-grade analog signal generator offering industry-leading output power, level accuracy, and phase noise, with frequency coverage from 100 kHz to 67 GHz (extendable to 500 GHz) for testing advanced RF and microwave radar

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692077798/Instruments/RF%20Signal%20Generator/Keysight-E8257D/Keysight-E8257D.png" style={{ width: "325px" }} />

</div>

Metrology-grade analog signal generator offering industry-leading output power, level accuracy, and phase noise, with frequency coverage from 100 kHz to 67 GHz (extendable to 500 GHz) for testing advanced RF and microwave radar>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692126006/Instruments/Vendor%20Logos/Agilent.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight E8257D in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Keysight E8257D RF Signal Generator using Qcodes, you can use the following Python script:

```python
import qcodes as qc
from qcodes.instrument_drivers.Keysight.Keysight_E8257D import Keysight_E8257D

# Create an instance of the instrument
signal_generator = Keysight_E8257D("signal_generator", "TCPIP0::192.168.1.1::INSTR")

# Connect to the instrument
signal_generator.connect()

# Print the instrument ID
print("Instrument ID:", signal_generator.IDN())

# Set the frequency to 1 GHz
signal_generator.frequency(1e9)

# Set the power to -10 dBm
signal_generator.power(-10)

# Enable the output
signal_generator.output_enabled(True)

# Disable the output after 1 second
qc.sleep(1)
signal_generator.output_enabled(False)

# Disconnect from the instrument
signal_generator.disconnect()
```

This script imports the necessary modules and creates an instance of the `Keysight_E8257D` instrument class from the `qcodes.instrument_drivers.Keysight.Keysight_E8257D` module. It then connects to the instrument using the specified address (replace `"TCPIP0::192.168.1.1::INSTR"` with the actual address of your instrument).

After connecting, you can use the instrument's methods and parameters to control the signal generator. In the example script, it sets the frequency to 1 GHz, power to -10 dBm, and enables the output. After 1 second, it disables the output and then disconnects from the instrument.

Note: Make sure you have QCoDeS and the necessary dependencies installed before running this script.

</TabItem>
</Tabs>