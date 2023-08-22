---
title: Connecting to USB SA 124 B by Signal Hound in Python
sidebar_label: USB SA 124 B
description: The Signal Hound USB-SA44B is a Software Defined Receiver (SDR) optimized as a narrow-band real-time RF spectrum analyzer. It is a compact, simple to use, effective troubleshooting tool for the general lab user, engineering students, and ham radio enthusiast.
keywords: [spectrum analyzers, Signal Hound, QCodes]
slug: /instruments-wiki/spectrum-analyzers/signal-hound/usb-sa-124-b
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395695/Instruments/Spectrum%20Analyzers/USB-SA-124-B/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# USB SA 124 B

## Instrument Card

<div className="flex">

<div>

The Signal Hound USB-SA44B is a Software Defined Receiver (SDR) optimized as a narrow-band real-time RF spectrum analyzer. It is a compact, simple to use, effective troubleshooting tool for the general lab user, engineering students, and ham radio enthusiast.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395695/Instruments/Spectrum%20Analyzers/USB-SA-124-B/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692126008/Instruments/Vendor%20Logos/Signalhound.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Signal Hound is a manufacturer of RF spectrum analyzers and signal generators. <a href="https://signalhound.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 3.6</li>
</ul>
</details>

## Connect to the USB SA 124 B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

```python
import qcodes as qc
from qcodes.instrument_drivers.signal_hound.USB_SA124B import SignalHoundUSBSA124B

# Create an instance of the SignalHoundUSBSA124B instrument
sa = SignalHoundUSBSA124B("sa", dll_path="C:\\Program Files\\Signal Hound\\Spike\\sa_api.dll")

# Connect to the instrument
sa.connect()

# Print the instrument IDN
print(sa.get_idn())

# Configure the instrument parameters
sa.frequency(1e9)
sa.span(1e6)
sa.rbw(1e3)
sa.vbw(1e3)
sa.ref_lvl(0)
sa.external_reference(False)
sa.scale("log-scale")

# Perform a frequency sweep and get the data
data = sa.freq_sweep()

# Print the data
print(data)

# Disconnect from the instrument
sa.disconnect()
```
Note: Make sure to replace the `dll_path` argument with the correct path to the `sa_api.dll` file on your system.

</TabItem>
</Tabs>