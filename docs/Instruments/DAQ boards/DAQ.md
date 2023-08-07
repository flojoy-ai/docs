
# DAQ

## Instrument Card

Data acquisition (DAQ) is the process of measuring an electrical or physical phenomenon, such as voltage, current, temperature, pressure, or sound. A DAQ system consists of sensors, DAQ measurement hardware, and a computer with programmable software such as LabVIEW.

<details open>
<summary><h2>Manufacturer Card</h2></summary>
A producer of automated test equipment and virtual instrumentation software. Common applications include data acquisition, instrument control and machine vision. <a href="https://www.ni.com/en-ca.html">Website</a>.
<br></br>
<ul>
  <li>Headquarters: Austin, Texas, USA</li>
  <li>Yearly Revenue (millions, USD): 1657.0</li>
</ul>
</details>

## Connect to the DAQ in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes Community

To connect to a DAQ board using Qcodes Community, you can use the following Python script:

```python
import qcodes as qc
from qcodes_contrib_drivers.drivers.NI_DAQ import DAQAnalogInputs, DAQAnalogOutputs, DAQDigitalOutputs

# Create a connection to the DAQ board
daq = qc.Instrument('daq', 'DAQAnalogInputs', dev_name='Dev1', rate=1000, channels={'ch1': 0})

# Read analog input voltages
voltages = daq.voltage.get()

# Print the voltages
print(voltages)

# Write analog output voltage
daq_ao = qc.Instrument('daq_ao', 'DAQAnalogOutputs', dev_name='Dev1', channels={'ch0': 0})
daq_ao.voltage_ch0.set(2.5)

# Write digital output state
daq_do = qc.Instrument('daq_do', 'DAQDigitalOutputs', dev_name='Dev1', lines=['port0/line0'])
daq_do.state.set(True)
```

This script connects to a DAQ board with the name 'Dev1' and sets up an analog input channel 'ch1'. It then reads the analog input voltages and prints them. Next, it sets up an analog output channel 'ch0' and writes a voltage of 2.5 V. Finally, it sets up a digital output line 'port0/line0' and sets its state to True.

