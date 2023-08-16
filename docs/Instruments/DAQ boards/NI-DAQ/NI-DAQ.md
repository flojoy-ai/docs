
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# NI DAQ

## Instrument Card

<div className="flex">

<div>

Data acquisition (DAQ) is the process of measuring an electrical or physical phenomenon, such as voltage, current, temperature, pressure, or sound. A DAQ system consists of sensors, DAQ measurement hardware, and a computer with programmable software such as LabVIEW.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118603/Instruments/DAQ%20boards/NI-DAQ/NI-DAQ.png" style={{ width: "325px" }} />

</div>

Data acquisition (DAQ) is the process of measuring an electrical or physical phenomenon, such as voltage, current, temperature, pressure, or sound. A DAQ system consists of sensors, DAQ measurement hardware, and a computer with programmable software such as LabVIEW.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125989/Instruments/Vendor%20Logos/National_Instruments.png" style={{ width: "100%", objectFit: "cover" }} />

A producer of automated test equipment and virtual instrumentation software. Common applications include data acquisition, instrument control and machine vision. <a href="https://www.ni.com/en-ca.html">Website</a>.

<ul>
  <li>Headquarters: Austin, Texas, USA</li>
  <li>Yearly Revenue (millions, USD): 1657.0</li>
</ul>
</details>

## Connect to the NI DAQ in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

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