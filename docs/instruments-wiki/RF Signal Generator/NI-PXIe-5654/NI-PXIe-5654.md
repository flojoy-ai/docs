---
title: Connecting to NI PXIe-5654 by National Instruments in Python
sidebar_label: NI PXIe-5654
description: PXIe, 250 kHz to 20 GHz, PXI RF Analog Signal Generator—The PXIe-5654 features a combination of exceptional phase noise and frequency tuning time. These features address applications such as blocker test/receiver desensitization, high-performance intermodulation distortion measurements, and various electronic warfare applications. The PXIe-5654 is designed to meet the challenging requirements of RFIC characterization, satellite test, and radar applications. Some PXIe-5654 options include a PXIe-5696 Amplitude Extender Module. The PXIe-5696 supports a frequency range of 250 kHz to 20 GHz and an extended amplitude range up to 27 dBm.
keywords: [rf signal generator, National Instruments, Qcodes Community]
slug: /instruments-wiki/rf-signal-generator/national-instruments/ni-pxie-5654
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200803/Instruments/RF%20Signal%20Generator/NI-PXIe-5654/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# NI PXIe-5654

## Instrument Card

<div className="flex">

<div>

PXIe, 250 kHz to 20 GHz, PXI RF Analog Signal Generator—The PXIe-5654 features a combination of exceptional phase noise and frequency tuning time. These features address applications such as blocker test/receiver desensitization, high-performance intermodulation distortion measurements, and various electronic warfare applications. The PXIe-5654 is designed to meet the challenging requirements of RFIC characterization, satellite test, and radar applications. Some PXIe-5654 options include a PXIe-5696 Amplitude Extender Module. The PXIe-5696 supports a frequency range of 250 kHz to 20 GHz and an extended amplitude range up to 27 dBm.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200803/Instruments/RF%20Signal%20Generator/NI-PXIe-5654/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125989/Instruments/Vendor%20Logos/National_Instruments.png" style={{ width: "100%", objectFit: "cover" }} />

A producer of automated test equipment and virtual instrumentation software. Common applications include data acquisition, instrument control and machine vision. <a href="https://www.ni.com/en-ca.html">Website</a>.

<ul>
  <li>Headquarters: Austin, Texas, USA</li>
  <li>Yearly Revenue (millions, USD): 1657.0</li>
</ul>
</details>

## Connect to the NI PXIe-5654 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

To connect to a NI PXIe-5654 RF Signal Generator using Qcodes Community, you can use the following Python script:

```python
import qcodes as qc
from qcodes_contrib_drivers.drivers.NationalInstruments.NI_PXIe_5654 import NI_PXIe_5654

# Create an instance of the instrument
signal_generator = NI_PXIe_5654('signal_generator', 'PXI1Slot2')

# Connect to the instrument
signal_generator.connect()

# Perform operations with the instrument
frequency = 1e6  # Set the frequency to 1 MHz
signal_generator.frequency(frequency)

power_level = 0  # Set the power level to 0 dBm
signal_generator.power_level(power_level)

# Disconnect from the instrument
signal_generator.disconnect()
```

Make sure you have installed the `qcodes_contrib_drivers` package, which contains the `NI_PXIe_5654` driver. You can install it using `pip install qcodes_contrib_drivers`.

Replace `'PXI1Slot2'` with the appropriate resource name for your specific setup.

Note that this script assumes you have already set up the necessary hardware and drivers for the NI PXIe-5654 RF Signal Generator.

</TabItem>
</Tabs>