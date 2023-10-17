---
title: Connecting to SHFSG by Zurich Instruments in Python
sidebar_label: SHFSG
description: The Zurich Instruments SHFSG Signal Generator produces qubit control signals in the frequency range from DC to 8.5 GHz with a spurious-free modulation bandwidth of 1 GHz. The SHFSG uses a double superheterodyne technique for frequency up-conversion, which eliminates the need for mixer calibration and saves time on system tune-up. Each SHFSG comes with 4 or 8 analog output channels with 14-bit vertical resolution. Controlled by LabOne, its APIs or the LabOne Q Software, the SHFSG supports quantum computing projects with sizes ranging from a few to several hundred qubits.
keywords: [rf signal generators, Zurich Instruments, QCodes]
slug: /instruments-database/rf-signal-generators/zurich-instruments/shfsg
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395679/Instruments/RF%20Signal%20Generators/SHFSG/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SHFSG

## Instrument Card

<div className="flex">

<div>

The Zurich Instruments SHFSG Signal Generator produces qubit control signals in the frequency range from DC to 8.5 GHz with a spurious-free modulation bandwidth of 1 GHz. The SHFSG uses a double superheterodyne technique for frequency up-conversion, which eliminates the need for mixer calibration and saves time on system tune-up. Each SHFSG comes with 4 or 8 analog output channels with 14-bit vertical resolution. Controlled by LabOne, its APIs or the LabOne Q Software, the SHFSG supports quantum computing projects with sizes ranging from a few to several hundred qubits.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395679/Instruments/RF%20Signal%20Generators/SHFSG/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://docs.zhinst.com/pdf/ziSHFSG_UserManual.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: MZ2000</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806207/Instruments/Vendor%20Logos/Zurich_Instruments.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
  <li>Vendor Website: <a href="https://www.zhinst.com/americas/en">here</a></li>
</ul>
</details>

## Connect to the SHFSG in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

Here is an example Python script that uses Qcodes to connect to a SHFSG RF Signal Generator:

```python
import qcodes as qc
from qcodes.instrument_drivers.zhinst import SHFSG

# Connect to the SHFSG RF Signal Generator
shfsg = SHFSG("shfsg", "dev1234")

# Print the available trigger inputs
print(shfsg.sgchannels[0].awg.available_trigger_inputs())

# Configure the RF output of channel 1
shfsg.sgchannels[0].configure_channel(
    enable=True,
    output_range=0,
    center_frequency=1e9,
    rf_path=True
)

# Enable the sequencer of channel 1
shfsg.sgchannels[0].awg.enable_sequencer(single=False)

# Load a sequencer program to channel 1
sequencer_program = """
    const AWG_CHANNEL = 0
    wave w1 = gauss(64, 0.1, 0.5)
    playWave(w1, AWG_CHANNEL)
"""
shfsg.sgchannels[0].awg.load_sequencer_program(sequencer_program)

# Enable the AWG output of channel 1
shfsg.sgchannels[0].awg.enable(True)

# Disconnect from the SHFSG RF Signal Generator
shfsg.close()
```

This script connects to a SHFSG RF Signal Generator with the name "dev1234" and sets up the RF output of channel 1. It then enables the sequencer, loads a sequencer program, and enables the AWG output of channel 1. Finally, it disconnects from the SHFSG RF Signal Generator.

</TabItem>
</Tabs>
<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/instruments-database/RF%20Signal%20Generators/SHFSG/SHFSG.md)
