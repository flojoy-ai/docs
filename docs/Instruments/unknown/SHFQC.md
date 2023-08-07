
# SHFQC

## Instrument Card

The SHFQC Qubit Controller can control, read out and provide fast feedback on up to 6 superconducting qubits. It integrates the functionality of the SHFQA Quantum Analyzer, the SHFSG Signal Generator and more in a single instrument.

<details open>
<summary><h2>Manufacturer Card</h2></summary>
Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis. <a href="https://www.zhinst.com/americas/en">Website</a>.
<br></br>
<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
</ul>
</details>

## Connect to the SHFQC in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes

```python
import qcodes as qc
from qcodes.instrument_drivers.zhinst import SHFQC

# Connect to the SHFQC
shfqc = SHFQC("shfqc", "dev1234")

# Print the available SG channels
print(shfqc.sgchannels())

# Configure the first SG channel
shfqc.sgchannels[0].configure_channel(
    enable=True,
    output_range=0,
    center_frequency=5e9,
    rf_path=True
)

# Enable the sequencer on the first SG channel
shfqc.sgchannels[0].awg.enable_sequencer(single=False)

# Upload a sequencer program to the first SG channel
sequencer_program = """
    const AWG_CHANNEL = 0
    const WAIT_TIME = 1000
    while (true) {
        playWave(AWG_CHANNEL, "waveform1")
        waitWave(AWG_CHANNEL)
        playWave(AWG_CHANNEL, "waveform2")
        waitWave(AWG_CHANNEL)
        wait(WAIT_TIME)
    }
"""
shfqc.sgchannels[0].awg.load_sequencer_program(sequencer_program)

# Start the sequencer on the first SG channel
shfqc.sgchannels[0].awg.enable_sequencer(single=False)

# Disconnect from the SHFQC
shfqc.close()
```

