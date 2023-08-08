
# MFLI

## Instrument Card

<div className="flex">

<div>

The Zurich Instruments MFLI is a digital lock-in amplifier that covers the frequency range from DC to 500 kHz (and up to 5 MHz when upgraded). Thanks to its embedded data and web servers, the MFLI can be used directly with any device running a web browser without further software installations

</div>

<img width="256" src="https://v5.airtableusercontent.com/v1/19/19/1691539200000/zd38xLdBacJXDN7GisgeDw/k1DycZ7zhb_1R_rT4QXSNXadp_5L2E-8tMuLrTcKMHO_UU2v-H952DHew8_CzSm3kqEXhKVWqQBH1QKPeDbvPABulDuxBk8SBFjht0JazTw/VLhNSWObPf_9hl5WCyQRfSNt9wadysxf7V2wJ7ZvPQw"/>

</div>

The Zurich Instruments MFLI is a digital lock-in amplifier that covers the frequency range from DC to 500 kHz (and up to 5 MHz when upgraded). Thanks to its embedded data and web servers, the MFLI can be used directly with any device running a web browser without further software installations>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis. <a href="https://www.zhinst.com/americas/en">Website</a>.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
</ul>
</details>

## Connect to the MFLI in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes

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

# Close the connection to the lock-in amplifier
mflilockin.close()
```

Note: Replace `"dev1234"` with the actual device ID or name of your MFLI Lock-in Amplifier. The `"interface"` argument specifies the interface to use for communication with the instrument, which can be `"1GbE"` for Ethernet or `"USB"` for USB connection.

This script creates a `Station` object to hold the instruments. It then connects to the MFLI Lock-in Amplifier using the `MFLI` class from the `zhinst-qcodes` package. The lock-in amplifier is added as a component to the station.

You can access and manipulate the lock-in amplifier's parameters using the `parameters` attribute of the `MFLI` object. In the example, it prints the available parameters. You can set the frequency and amplitude using the `frequency()` and `amplitude()` methods, respectively.

Finally, the script closes the connection to the lock-in amplifier using the `close()` method.

Remember to install the `zhinst-qcodes` package before running this script.

