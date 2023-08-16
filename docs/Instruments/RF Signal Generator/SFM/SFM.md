
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SFM

## Instrument Card

<div className="flex">

<div>

Generation of standard TV signals (standards B&G, D&K, L&L, I, M, N, K1) including stereo/dual sound and NICAM
Double-sideband test modulator for all IFs between 32 and 46 MHz
RF upconverter, 5 to 1000 MHz, with high frequency resolution (1 Hz)

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118499/Instruments/RF%20Signal%20Generator/SFM/SFM.png" style={{ width: "325px" }} />

</div>

Generation of standard TV signals (standards B&G, D&K, L&L, I, M, N, K1) including stereo/dual sound and NICAM
Double-sideband test modulator for all IFs between 32 and 46 MHz
RF upconverter, 5 to 1000 MHz, with high frequency resolution (1 Hz)>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692139604/Instruments/Vendor%20Logos/RohdeSchwarz.png" style={{ width: "100%", objectFit: "cover" }} />

Rohde & Schwarz GmbH & Co KG is an international electronics group specializing in the fields of electronic test equipment, broadcast & media, cybersecurity, radiomonitoring and radiolocation, and radiocommunication. <a href="https://www.rohde-schwarz.com/ca/home_48230.html">Website</a>.

<ul>
  <li>Headquarters: Munich, Germany</li>
  <li>Yearly Revenue (millions, USD): 2500.0</li>
</ul>
</details>

## Connect to the SFM in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.instruments.rohde_schwarz import SFM
from pymeasure.adapters import VISAAdapter

# Create a VISA adapter for communication
adapter = VISAAdapter("TCPIP::192.168.1.1::INSTR")

# Connect to the SFM RF Signal Generator
signal_generator = SFM(adapter)

# Set the frequency to 100 MHz
signal_generator.frequency = 100E6

# Set the output level to -10 dBm
signal_generator.level = -10

# Enable the RF output
signal_generator.rf_out_enabled = True

# Disconnect from the SFM RF Signal Generator
signal_generator.disconnect()
```

This script connects to the SFM RF Signal Generator using a VISA adapter and sets the frequency to 100 MHz and the output level to -10 dBm. It then enables the RF output and disconnects from the signal generator.

</TabItem>
</Tabs>