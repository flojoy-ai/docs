
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ithaco 1211

## Instrument Card

<div className="flex">

<div>

The Ithaco 1211 Current Preamplifier measures current with full scale sensitivity ranging from 10-2 to 10-12 amperes

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692107080/Instruments/Lockin%20Amplifiers/Ithaco-1211/file.jpg" style={{width:"256px", height: "200px"}} />

</div>

The Ithaco 1211 Current Preamplifier measures current with full scale sensitivity ranging from 10-2 to 10-12 amperes>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125969/Instruments/Vendor%20Logos/Ithaco.png" style={{ width:"200px", height: "150px"}} />

Artisan Technology Group ® is a team of top-talent engineers and customer service specialists. We serve organizations that need to maintain and extend the life of their critical industrial, commercial, and military systems beyond obsolescence. <a href="https://www.artisantg.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 17.0</li>
</ul>
</details>

## Connect to the Ithaco 1211 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to an Ithaco 1211 Lockin Amplifier using Qcodes, you can use the following Python script:

```python
from qcodes.instrument.base import Instrument
from qcodes.instrument_drivers.ithaco.ithaco_1211 import Ithaco_1211

# Create an instance of the Ithaco_1211 instrument
ithaco = Ithaco_1211('ithaco', address='COM1')

# Connect to the instrument
ithaco.connect()

# Print the instrument's ID information
print(ithaco.get_idn())

# Set the sensitivity of the amplifier
ithaco.sens(1e-8)

# Set the output to be inverted
ithaco.invert(True)

# Read the current value from the instrument
current = ithaco.curr()

# Print the current value
print(f"Current: {current} A")

# Disconnect from the instrument
ithaco.disconnect()
```

Note: Replace `'COM1'` with the appropriate address for your Ithaco 1211 Lockin Amplifier.

</TabItem>
</Tabs>