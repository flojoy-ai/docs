
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rigol DS1000-Series

## Instrument Card

<div className="flex">

<div>

The 1000 Series from RIGOL include the B, D, and E series oscilloscopes. The E Series are the value leader with 50-100 MHz models that include 2 channels and 1 Million points of memory. The D Series add low speed digital capture enabling basic mixed signal analysis in a economic package. The B Series provide more speed and power including our economic 4 channel, 200 MHz DS1204B model which provides 2 GSa/sec sampling. With features including FFTs, record and replay, roll mode, alternate trigger mode, and adjustable trigger sensitivity the 1000 Series is a great entry for value oscilloscope requirements.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692078045/Instruments/Oscilloscopes/Rigol-DS1000-Series/Rigol-DS1000-Series.png" style={{ width: "325px" }} />

</div>

The 1000 Series from RIGOL include the B, D, and E series oscilloscopes. The E Series are the value leader with 50-100 MHz models that include 2 channels and 1 Million points of memory. The D Series add low speed digital capture enabling basic mixed signal analysis in a economic package. The B Series provide more speed and power including our economic 4 channel, 200 MHz DS1204B model which provides 2 GSa/sec sampling. With features including FFTs, record and replay, roll mode, alternate trigger mode, and adjustable trigger sensitivity the 1000 Series is a great entry for value oscilloscope requirements.>

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

## Connect to the Rigol DS1000-Series in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a Rigol DS1000-Series Oscilloscope using Instrumentkit, you can use the following Python script:

```python
from instrumentkit import RigolDS1000Series

# Connect to the oscilloscope
oscilloscope = RigolDS1000Series.connect()

# Access the channels
channel1 = oscilloscope.channel[0]
channel2 = oscilloscope.channel[1]

# Set the acquisition type
oscilloscope.acquire_type = RigolDS1000Series.AcquisitionType.normal

# Set the number of averages
oscilloscope.acquire_averages = 8

# Force a trigger
oscilloscope.force_trigger()

# Start running the oscilloscope trigger
oscilloscope.run()

# Stop running the oscilloscope trigger
oscilloscope.stop()

# Release any lockout of the local control panel
oscilloscope.release_panel()

# Disconnect from the oscilloscope
oscilloscope.disconnect()
```

This script connects to the oscilloscope, accesses the channels, sets the acquisition type and number of averages, forces a trigger, starts and stops the oscilloscope trigger, releases any lockout of the local control panel, and finally disconnects from the oscilloscope.

</TabItem>
</Tabs>