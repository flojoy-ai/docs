
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rigol DP832

## Instrument Card

<div className="flex">

<div>

3 Outputs; total power up to 195W
Low Ripple Noise <350 uVrms/2mVpp
Fast transient response time: <50 us
Channel isolation: CH1 || CH2,CH3
OVP/OCP/OTP protection functions
Built in V, A, W measurements and waveform display

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692120049/Instruments/Power%20Supplies/Rigol-DP832/Rigol-DP832.png" style={{ width: "325px" }} />

</div>

3 Outputs; total power up to 195W
Low Ripple Noise <350 uVrms/2mVpp
Fast transient response time: <50 us
Channel isolation: CH1 || CH2,CH3
OVP/OCP/OTP protection functions
Built in V, A, W measurements and waveform display>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125991/Instruments/Vendor%20Logos/Rigol.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

RIGOL Technologies, Inc. specializes in development and production of test and measuring equipment and is one of the fastest growing Chinese companies in this sphere.
RIGOL’s line of products includes [digital storage oscilloscopes](https://www.tmatlantic.com/e-store/index.php?SECTION_ID=227), [function/arbitrary waveform generators](https://www.tmatlantic.com/e-store/index.php?SECTION_ID=230), [digital multimeters](https://www.tmatlantic.com/e-store/index.php?SECTION_ID=233), PC-based devices compatible with LXI standard etc. <a href="https://www.rigol.com/">Website</a>.

<ul>
  <li>Headquarters: Beijing, China</li>
  <li>Yearly Revenue (millions, USD): 23.0</li>
</ul>
</details>

## Connect to the Rigol DP832 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

```python
import qcodes as qc
from qcodes.instrument_drivers.rigol.DP8xx import RigolDP832

# Create an instance of the RigolDP832 driver
dp832 = RigolDP832('dp832', 'TCPIP0::192.168.1.10::INSTR')

# Connect to the instrument
dp832.connect()

# Perform operations using the instrument
# ...

# Disconnect from the instrument
dp832.disconnect()
```

This code imports the necessary modules and creates an instance of the `RigolDP832` driver. It then connects to the instrument using the specified IP address. You can perform various operations using the `dp832` object, and finally disconnect from the instrument.

</TabItem>
</Tabs>