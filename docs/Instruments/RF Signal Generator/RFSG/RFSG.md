
# RFSG

## Instrument Card

<div className="flex">

<div>



</div>

<img src={require("./RFSG.jpg").default} style={{width:"256px", height: "200px"}}/>

</div>

>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

A producer of automated test equipment and virtual instrumentation software. Common applications include data acquisition, instrument control and machine vision. <a href="https://www.ni.com/en-ca.html">Website</a>.

<ul>
  <li>Headquarters: Austin, Texas, USA</li>
  <li>Yearly Revenue (millions, USD): 1657.0</li>
</ul>
</details>

## Connect to the RFSG in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes Community

Here is an example Python script that uses Qcodes Community to connect to a RFSG RF Signal Generator:

```python
import qcodes as qc
from qcodes.instrument_drivers.ni.NIRFSG import NI_RFSG

# Connect to the RF Signal Generator
rfsg = NI_RFSG('rfsg', 'PXI1Slot2')

# Print the IDN information
print(rfsg.get_idn())

# Set the frequency and power level
rfsg.frequency(1e9)  # 1 GHz
rfsg.power_level(-10)  # -10 dBm

# Enable the RF output
rfsg.output_enabled(True)

# Close the connection
rfsg.close()
```

Note: Make sure you have installed the `qcodes` package and the necessary dependencies before running this script.

