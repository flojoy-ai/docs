
# Series

## Instrument Card

<div className="flex">

<div>



</div>

<img src="nan" style={{width:"256px", height: "200px"}} />

</div>

>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1691786524/Instruments/Vendor%20Logos/Rohde_Schwarz.jpg.png" style={{ width:"200px", height: "150px"}} />

Rohde & Schwarz GmbH & Co KG is an international electronics group specializing in the fields of electronic test equipment, broadcast & media, cybersecurity, radiomonitoring and radiolocation, and radiocommunication. <a href="https://www.rohde-schwarz.com/ca/home_48230.html">Website</a>.

<ul>
  <li>Headquarters: Munich, Germany</li>
  <li>Yearly Revenue (millions, USD): 2500.0</li>
</ul>
</details>

## Connect to the Series in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes

```python
import qcodes as qc
from qcodes.instrument_drivers.rohde_schwarz.ZNB import ZNB

# Connect to the Series Network Analyzer
znb = ZNB("znb", "TCPIP0::192.168.15.100::inst0::INSTR")

# Print the instrument ID
print(znb.get_idn())

# Turn on the RF output
znb.rf_power(True)

# Set the start and stop frequencies
znb.channels.ch1.start(1e9)
znb.channels.ch1.stop(10e9)

# Set the number of points in the frequency sweep
znb.channels.ch1.npts(1001)

# Perform a frequency sweep and get the magnitude and phase data
data = znb.channels.ch1.trace.get()

# Print the magnitude and phase data
print(data.magnitude)
print(data.phase)

# Turn off the RF output
znb.rf_power(False)

# Close the connection to the instrument
znb.close()
```
Note: Replace `"TCPIP0::192.168.15.100::inst0::INSTR"` with the actual address of your Series Network Analyzer.

