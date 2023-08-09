
# HDAWG

## Instrument Card

<div className="flex">

<div>

The Zurich Instruments HDAWG multi-channel Arbitrary Waveform Generator has one of the highest channel densities available in its class and is designed for advanced signal generation up to 750 MHz bandwidth. The HDAWG comes with either 4 or 8 DC-coupled, single-ended analog output channels with 16-bit vertical resolution.

</div>

<img src={require("./HDAWG.jpg").default} width="256" height="150"/>

</div>

The Zurich Instruments HDAWG multi-channel Arbitrary Waveform Generator has one of the highest channel densities available in its class and is designed for advanced signal generation up to 750 MHz bandwidth. The HDAWG comes with either 4 or 8 DC-coupled, single-ended analog output channels with 16-bit vertical resolution.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis. <a href="https://www.zhinst.com/americas/en">Website</a>.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
</ul>
</details>

## Connect to the HDAWG in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes Community

To connect to a HDAWG Wavemeter using Qcodes Community, you can use the following Python script:

```python
from qcodes import Station, Instrument
from qcodes_contrib_drivers.drivers.ZI.ZIHDAWG8 import ZIHDAWG8

# Create a station to hold the instruments
station = Station()

# Connect to the HDAWG Wavemeter
hdawg = ZIHDAWG8('hdawg', 'dev1234')  # Replace 'dev1234' with the actual device ID
station.add_component(hdawg)

# Now you can use the HDAWG Wavemeter
hdawg.enable_channel(1)
hdawg.start_awg(1)

# Disconnect from the instruments
station.close_all_registered_instruments()
```

Note: Replace `'dev1234'` with the actual device ID of your HDAWG Wavemeter.

### Qcodes

```python
import qcodes as qc
from qcodes.instrument_drivers.zhinst import HDAWG

# Connect to the HDAWG instrument
hdawg = HDAWG("hdawg", "dev1234")

# Enable QCCS mode
hdawg.enable_qccs_mode()

# Print the available AWG channels
print(hdawg.awgs.channels)

# Load a sequencer program to AWG channel 0
sequencer_program = """
    const N = 1000;
    wave w = ones(N);
    playWave(w);
"""
hdawg.awgs[0].load_sequencer_program(sequencer_program)

# Enable the sequencer on AWG channel 0
hdawg.awgs[0].enable_sequencer(single=True)

# Wait for the AWG to finish
hdawg.awgs[0].wait_done()

# Disconnect from the instrument
hdawg.close()
```
This script connects to a HDAWG instrument, enables QCCS mode, loads a sequencer program to AWG channel 0, enables the sequencer, waits for the AWG to finish, and then disconnects from the instrument.

