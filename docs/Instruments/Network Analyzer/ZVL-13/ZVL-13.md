
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ZVL 13

## Instrument Card

<div className="flex">

<div>

The ZVL is a compact, cost-efficient, powerful and portable network analyzer. It is ideal for use in development, production, and service. It is the only instrument to combine the functions of a network analyzer, spectrum analyzer, and power meter in a single box, making you much more efficient.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106868/Instruments/Spectrum%20Analyzers/ZVL-13/file.webp" style={{width:"256px", height: "200px"}} />

</div>

The ZVL is a compact, cost-efficient, powerful and portable network analyzer. It is ideal for use in development, production, and service. It is the only instrument to combine the functions of a network analyzer, spectrum analyzer, and power meter in a single box, making you much more efficient.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692139604/Instruments/Vendor%20Logos/RohdeSchwarz.png" style={{ width:"200px", height: "150px"}} />

Rohde & Schwarz GmbH & Co KG is an international electronics group specializing in the fields of electronic test equipment, broadcast & media, cybersecurity, radiomonitoring and radiolocation, and radiocommunication. <a href="https://www.rohde-schwarz.com/ca/home_48230.html">Website</a>.

<ul>
  <li>Headquarters: Munich, Germany</li>
  <li>Yearly Revenue (millions, USD): 2500.0</li>
</ul>
</details>

## Connect to the ZVL 13 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

To connect to a ZVL 13 Network Analyzer using Qcodes Community, you can use the following Python script:

```python
from qcodes import Station
from qcodes.instrument_drivers.rohde_schwarz.ZVL13 import ZVL13

# Create a station to hold the instruments
station = Station()

# Connect to the ZVL 13 Network Analyzer
zvl13 = ZVL13('zvl13', 'TCPIP0::192.168.1.1::inst0::INSTR')
station.add_component(zvl13)

# Print the available parameters of the ZVL 13 Network Analyzer
print(zvl13.parameters)

# Set the start frequency to 1 GHz
zvl13.start(1e9)

# Set the stop frequency to 10 GHz
zvl13.stop(10e9)

# Set the number of points to 1001
zvl13.npts(1001)

# Set the power to -10 dBm
zvl13.power(-10)

# Set the measurement format to magnitude
zvl13.format('magnitude')

# Perform a frequency sweep and get the data
data = zvl13.trace()

# Print the acquired data
print(data)
```

Note: Replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual address of your ZVL 13 Network Analyzer.

</TabItem>
</Tabs>