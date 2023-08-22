---
title: Connecting to R&S RTO1000 by Rohdes&Schwarz in Python
sidebar_label: R&S RTO1000
description: With an acquisition memory of 400 Mpts per channel simultaneously for all four channels, the oscilloscope offers up to 100 times the memory depth of comparable devices as standard.The R&S MXO 4 oscilloscopes offer the world's highest update rate of 4.5 million waveforms per second.
keywords: [oscilloscopes, Rohdes&Schwarz, QCodes]
slug: /instruments-wiki/oscilloscopes/rohdes-schwarz/rs-rto1000
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692719241/Instruments/Oscilloscopes/RS-RTO1000/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# R&S RTO1000

## Instrument Card

<div className="flex">

<div>

With an acquisition memory of 400 Mpts per channel simultaneously for all four channels, the oscilloscope offers up to 100 times the memory depth of comparable devices as standard.

The R&S MXO 4 oscilloscopes offer the world's highest update rate of 4.5 million waveforms per second.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692719241/Instruments/Oscilloscopes/RS-RTO1000/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692139604/Instruments/Vendor%20Logos/RohdeSchwarz.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Rohde & Schwarz GmbH & Co KG is an international electronics group specializing in the fields of electronic test equipment, broadcast & media, cybersecurity, radiomonitoring and radiolocation, and radiocommunication. <a href="https://www.rohde-schwarz.com/ca/home_48230.html">Website</a>.

<ul>
  <li>Headquarters: Munich, Germany</li>
  <li>Yearly Revenue (millions, USD): 2500.0</li>
</ul>
</details>

## Connect to the R&S RTO1000 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

Here is an example Python script that uses Qcodes to connect to a R&S RTO1000 Oscilloscope:

```python
import qcodes as qc
from qcodes.instrument_drivers.rohde_schwarz.RTO1000 import RTO1000

# Connect to the oscilloscope
oscilloscope = RTO1000('oscilloscope', 'TCPIP0::192.168.0.1::inst0::INSTR')

# Print the IDN of the oscilloscope
print(oscilloscope.IDN())

# Enable channel 1
oscilloscope.ch1.state('ON')

# Set the timebase scale to 1 us/div
oscilloscope.timebase_scale(1e-6)

# Set the trigger source to channel 1
oscilloscope.trigger_source('CH1')

# Set the trigger level to 0 V
oscilloscope.trigger_level(0)

# Acquire a single trace
oscilloscope.run_single()

# Wait for the acquisition to complete
while not oscilloscope.is_acquiring():
    pass

# Get the trace from channel 1
trace = oscilloscope.ch1.trace()

# Plot the trace
trace.plot()

# Disconnect from the oscilloscope
oscilloscope.close()
```

Note: Replace `'TCPIP0::192.168.0.1::inst0::INSTR'` with the actual VISA resource address of your oscilloscope.

</TabItem>
</Tabs>