
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ERASYNTH


## Instrument Card

<div className="flex">

<div>

ERASynth removes the cost barriers and makes quality RF signal synthesis accessible to everyone, especially budget-conscious makers.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106832/Instruments/RF%20Signal%20Generator/ERASYNTH/file.jpg" style={{width:"256px", height: "200px"}} />

</div>

ERASynth removes the cost barriers and makes quality RF signal synthesis accessible to everyone, especially budget-conscious makers.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692139600/Instruments/Vendor%20Logos/ERAInstruments.png" style={{ width:"200px", height: "150px"}} />

**ERA Instruments** is a startup technology company based in Istanbul, Turkey. With its young and dynamic engineering team, ERA specializes in: RF Signal Generators. <a href="https://erainstruments.com/#home">Website</a>.

<ul>
  <li>Headquarters: Turkey</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
</ul>
</details>

## Connect to the ERASYNTH
 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">


```python
from qcodes_contrib_drivers.drivers.ERAInstruments import ERASynth

# Connect to the ERASynth signal generator
lo = ERASynth("ERASynth", 'ASRL/dev/cu.usbmodem14101::INSTR')

# Turn off the output
lo.off()

# Print updated snapshot once to make sure the snapshot will be up-to-date
# This may take a few seconds
lo.print_readable_snapshot(update=True)

# Configure the local oscillator
lo.ref_osc_source("int")  # Use internal reference
lo.frequency(4.7e9)
lo.power(10)  # Set the amplitude to 10 dBm
lo.on()  # Turn on the output
```

This script connects to the ERASynth signal generator using the specified address (`ASRL/dev/cu.usbmodem14101::INSTR`). It then turns off the RF output, prints the updated snapshot of the instrument's parameters, configures the local oscillator to use the internal reference, sets the frequency to 4.7 GHz, sets the power to 10 dBm, and finally turns on the output.

Note: Make sure to replace `'ASRL/dev/cu.usbmodem14101::INSTR'` with the actual address of your ERASynth signal generator.

</TabItem>
</Tabs>