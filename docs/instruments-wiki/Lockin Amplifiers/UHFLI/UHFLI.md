---
title: Connecting to UHFLI by Zurich Instruments in Python
sidebar_label: UHFLI
description: The Zurich Instruments UHFLI is a digital lock-in amplifier that covers the frequency range from DC to 600 MHz. It offers a time constant of 30 ns for demodulation – resulting in a demodulation bandwidth that exceeds 5 MHz.
keywords: [lockin amplifiers, Zurich Instruments, QCodes]
slug: /instruments-wiki/lockin-amplifiers/zurich-instruments/uhfli
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395696/Instruments/Lockin%20Amplifiers/UHFLI/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# UHFLI

## Instrument Card

<div className="flex">

<div>

The Zurich Instruments UHFLI is a digital lock-in amplifier that covers the frequency range from DC to 600 MHz. It offers a time constant of 30 ns for demodulation – resulting in a demodulation bandwidth that exceeds 5 MHz.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395696/Instruments/Lockin%20Amplifiers/UHFLI/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://docs.zhinst.com/pdf/ziUHF_UserManual.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806207/Instruments/Vendor%20Logos/Zurich_Instruments.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
  <li>Vendor Website: <a href="https://www.zhinst.com/americas/en">here</a></li>
</ul>
</details>

## Connect to the UHFLI in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

Here is an example Python script that uses Qcodes to connect to a UHFLI Lockin Amplifier:

```python
import qcodes as qc
from qcodes.instrument_drivers.zhinst import UHFLI

# Connect to the UHFLI Lockin Amplifier
uhfli = UHFLI("uhfli", "dev1234")

# Print the available AWG channels
print(uhfli.awgs.channels)

# Enable the sequencer on AWG channel 0
uhfli.awgs[0].enable_sequencer(single=True)

# Wait until the AWG is finished
uhfli.awgs[0].wait_done()

# Compile and load a sequencer program
sequencer_program = """
    const N = 1000;
    wave w = ones(N);
    playWave(w);
"""
uhfli.awgs[0].compile_sequencer_program(sequencer_program)
uhfli.awgs[0].load_sequencer_program(sequencer_program)

# Write waveforms to the waveform memory
waveforms = qc.Waveforms()
waveforms["w1"] = [0, 1, 0, -1]
waveforms["w2"] = [1, 0, -1, 0]
uhfli.awgs[0].write_to_waveform_memory(waveforms)

# Read waveforms from the waveform memory
read_waveforms = uhfli.awgs[0].read_from_waveform_memory()
print(read_waveforms)

# Disconnect from the UHFLI Lockin Amplifier
uhfli.close()
```

Note: Replace `"dev1234"` with the actual device ID or address of your UHFLI Lockin Amplifier.

</TabItem>
</Tabs>