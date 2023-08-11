
# PL303QMT-P

## Instrument Card

<div className="flex">

<div>

Bench/System Linear Regulated DC Power Supply Triple Ouput, 2 x 30V/3A plus 6V/6A, USB, RS232 & LAN Interfaces

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1691782432/Instruments/Power%20Supplies/PL303QMD-P/PL303QMD-P.jpg" style={{width:"256px", height: "200px"}} />

</div>

Bench/System Linear Regulated DC Power Supply Triple Ouput, 2 x 30V/3A plus 6V/6A, USB, RS232 & LAN Interfaces>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1691785144/Instruments/Vendor%20Logos/Aimtti.jpg.jpg" style={{ width:"200px", height: "150px"}} />

TTi (Thurlby Thandar Instruments) is a leading manufacturer of electronic test and measurement instruments. These products are sold throughout the world via carefully selected distributors and agents in each country. We are located in Huntingdon near to the famous university city of Cambridge, within one of the high technology areas of the United Kingdom. <a href="https://www.aimtti.com/">Website</a>.

<ul>
  <li>Headquarters: UK</li>
  <li>Yearly Revenue (millions, USD): 9000.0</li>
</ul>
</details>

## Connect to the PL303QMT-P in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes

To connect to a PL303QMT-P Power Supply using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.aimtti.AimTTi import AimTTi

# Create an instance of the AimTTi instrument
aim_tti = AimTTi("aim_tti", "TCPIP0::192.168.1.1::inst0::INSTR")

# Connect to the instrument
aim_tti.connect()

# Now you can use the instrument to perform operations
# For example, to get the voltage of channel 1:
voltage = aim_tti.ch1.volt.get()
print("Voltage:", voltage)

# To set the current range of channel 2 to high range:
aim_tti.ch2.curr_range.set(2)

# To increment the voltage of channel 1 by the step size:
aim_tti.ch1.increment_volt_by_step_size()

# Disconnect from the instrument
aim_tti.disconnect()
```

Note: Replace `"TCPIP0::192.168.1.1::inst0::INSTR"` with the actual VISA resource address of your PL303QMT-P Power Supply.

