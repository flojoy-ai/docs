
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ATS9870 - 8 bit, 1 GS/s

## Instrument Card

<div className="flex">

<div>

ATS9870 is the world's first Giga-sample waveform digitizer based on the 8-lane PCI Express interface

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118630/Instruments/DAQ%20boards/ATS9870---8-bit%2C-1-GS-s/ATS9870---8-bit_-1-GS-s.png" style={{ width: "325px" }} />

</div>

ATS9870 is the world's first Giga-sample waveform digitizer based on the 8-lane PCI Express interface>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125979/Instruments/Vendor%20Logos/Alazartech.png" style={{ width: "100%", objectFit: "cover" }} />

Alazar Technologies Inc. (AlazarTech) was founded in 2003 with the goal of serving the test and measurement market, in general, and the embedded waveform digitizer (OEM) market segment, in particular, by providing highly differentiated, high performance instrumentation products at affordable prices. <a href="https://www.alazartech.com/">Website</a>.

<ul>
  <li>Headquarters: CANADA - QC</li>
  <li>Yearly Revenue (millions, USD): 4.0</li>
</ul>
</details>

## Connect to the ATS9870 - 8 bit, 1 GS/s in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to an ATS9870 board using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.AlazarTech.ATS9870 import AlazarTechATS9870

# Create an instance of the AlazarTechATS9870 driver
ats9870 = AlazarTechATS9870('ats9870', dll_path='C:\\WINDOWS\\System32\\ATSApi.dll')

# Connect to the board
ats9870.connect()

# Perform operations with the board

# Disconnect from the board
ats9870.disconnect()
```

This script creates an instance of the `AlazarTechATS9870` driver, specifying the name of the instrument as `'ats9870'` and the path to the ATSApi.dll file. Then, it connects to the board using the `connect()` method and performs any desired operations. Finally, it disconnects from the board using the `disconnect()` method.

Note: Make sure to replace `'C:\\WINDOWS\\System32\\ATSApi.dll'` with the actual path to the ATSApi.dll file on your system.

</TabItem>
</Tabs>