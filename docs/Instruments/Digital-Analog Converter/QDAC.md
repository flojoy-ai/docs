
# QDAC

## Instrument Card

QDAC is a high-precision, 25-bit resolution, ultra-low-noise computer-controlled DAC with 24 voltage channel generators operating at a sample rate of 1MS/s. It is designed for DC and intermediate-frequency control of quantum devices, including, for example, gate electrodes and flux bias coils in qubits. It is also a very versatile instrument that can be used for many other purposes.

<details open>
<summary><h2>Manufacturer Card</h2></summary>
Founded in 2016, QDevil is an international quantum technology company focused on developing and manufacturing auxiliary electronics and specialized components, operating from mK to room temperature. The mission is to accelerate research and development in quantum electronics labs. To fulfill the mission QDevil helps customers around the world by supplying world-class auxiliary electronics. <a href="https://qdevil.com/">Website</a>.
<br></br>
<ul>
  <li>Headquarters: COPENHAGEN, DENMARK</li>
  <li>Yearly Revenue (millions, USD): 2.0</li>
</ul>
</details>

## Connect to the QDAC in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes

Here is an example Python script that uses Qcodes to connect to a QDAC Power Supply:

```python
import qcodes as qc
from qcodes_contrib_drivers.drivers.QDevil.QDac import QDac

# Connect to the QDAC Power Supply
qdac = QDac('qdac', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Print the firmware version
print(f"Firmware Version: {qdac.version}")

# Reset the QDAC Power Supply
qdac.reset()

# Set the voltage of channel 1 to 2V
qdac.channels.ch01.v(2)

# Get the current of channel 1
current = qdac.channels.ch01.i()
print(f"Current of channel 1: {current} A")

# Ramp the voltage of channel 2 from 0V to 5V in 1 second
qdac.ramp_voltages([2], [0], [5], 1)

# Print the status of all channels
qdac.print_overview()

# Disconnect from the QDAC Power Supply
qdac.close()
```

Note: Replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual VISA address of your QDAC Power Supply.

