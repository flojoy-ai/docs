---
title: Connecting to NI DAQ by National Instruments in Python
sidebar_label: NI DAQ
description: Data acquisition (DAQ) is the process of measuring an electrical or physical phenomenon, such as voltage, current, temperature, pressure, or sound. A DAQ system consists of sensors, DAQ measurement hardware, and a computer with programmable software such as LabVIEW.
keywords: [daq boards, National Instruments, QCodes Community]
slug: /instruments-database/daq-boards/national-instruments/ni-daq
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395713/Instruments/DAQ%20boards/NI-DAQ/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# NI DAQ

## Instrument Card

<div className="flex">

<div>

Data acquisition (DAQ) is the process of measuring an electrical or physical phenomenon, such as voltage, current, temperature, pressure, or sound. A DAQ system consists of sensors, DAQ measurement hardware, and a computer with programmable software such as LabVIEW.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395713/Instruments/DAQ%20boards/NI-DAQ/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: MZ2000</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806169/Instruments/Vendor%20Logos/National_Instruments.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

A producer of automated test equipment and virtual instrumentation software. Common applications include data acquisition, instrument control and machine vision.

<ul>
  <li>Headquarters: Austin, Texas, USA</li>
  <li>Yearly Revenue (millions, USD): 1657.0</li>
  <li>Vendor Website: <a href="https://www.ni.com/en-ca.html">here</a></li>
</ul>
</details>

## Connect to the NI DAQ in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to a NI DAQ board using Qcodes Community, you can use the following Python script:

```python
import qcodes as qc
from qcodes_contrib_drivers.drivers.NI_DAQ import DAQAnalogInputs, DAQAnalogOutputs, DAQDigitalOutputs

# Create a connection to the NI DAQ board
daq = qc.Instrument('daq', 'DAQAnalogInputs', dev_name='Dev1', rate=1000, channels={'ch1': 0})

# Read analog input voltage
voltage = daq.voltage.get()

# Write analog output voltage
daq_ao = qc.Instrument('daq_ao', 'DAQAnalogOutputs', dev_name='Dev1', channels={'ch1': 0})
daq_ao.voltage_ch1.set(1.23)

# Write digital output state
daq_do = qc.Instrument('daq_do', 'DAQDigitalOutputs', dev_name='Dev1', lines=['port0/line0'])
daq_do.state.set(True)
```

Note: Replace `'Dev1'` with the appropriate device name for your NI DAQ board, and adjust the channel and line configurations as needed.

</TabItem>
</Tabs>