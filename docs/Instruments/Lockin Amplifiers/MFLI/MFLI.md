
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# MFLI

## Instrument Card

<div className="flex">

<div>

The Zurich Instruments MFLI is a digital lock-in amplifier that covers the frequency range from DC to 500 kHz (and up to 5 MHz when upgraded). Thanks to its embedded data and web servers, the MFLI can be used directly with any device running a web browser without further software installations

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106868/Instruments/Lockin%20Amplifiers/MFLI/file.webp" style={{width:"256px", height: "200px"}} />

</div>

The Zurich Instruments MFLI is a digital lock-in amplifier that covers the frequency range from DC to 500 kHz (and up to 5 MHz when upgraded). Thanks to its embedded data and web servers, the MFLI can be used directly with any device running a web browser without further software installations>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126012/Instruments/Vendor%20Logos/Zurich_Instruments.png" style={{ width:"200px", height: "150px"}} />

Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis. <a href="https://www.zhinst.com/americas/en">Website</a>.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
</ul>
</details>

## Connect to the MFLI in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

The provided code is a stub for connecting to a Zurich Instruments MFLI Lock-in Amplifier using Qcodes. To establish a connection and interact with the lock-in amplifier, you need to install the `zhinst-qcodes` package.

Here's an example Python script that uses Qcodes to connect to the MFLI Lock-in Amplifier:

```python
from qcodes import Station
from qcodes.instrument_drivers.zhinst import MFLI

# Create a station to hold the instruments
station = Station()

# Connect to the MFLI Lock-in Amplifier
mflilockin = MFLI("mflilockin", "dev1234", interface="1GbE")

# Add the MFLI instrument to the station
station.add_component(mflilockin)

# Print the available parameters of the MFLI Lock-in Amplifier
print(mflilockin.parameters)

# Perform some operations with the lock-in amplifier
mflilockin.frequency(1000)  # Set the frequency to 1000 Hz
mflilockin.amplitude(0.1)  # Set the amplitude to 0.1 V

# Close the connection to the MFLI Lock-in Amplifier
mflilockin.close()
```

Note: In the above script, replace `"dev1234"` with the actual device ID or name of your MFLI Lock-in Amplifier. The `"1GbE"` interface is used for connecting to the instrument over a 1 Gigabit Ethernet interface. Adjust the interface parameter according to your setup.

This script establishes a connection to the MFLI Lock-in Amplifier, adds it to a Qcodes station, and performs some basic operations like setting the frequency and amplitude. Finally, it closes the connection to the lock-in amplifier.

Remember to install the `zhinst-qcodes` package before running this script.

</TabItem>
</Tabs>