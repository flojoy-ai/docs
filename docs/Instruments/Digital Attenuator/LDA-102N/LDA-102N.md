
# LDA-102N

## Instrument Card

<div className="flex">

<div>

The LDA-102N Lab Brick USB programmable 50 Ohm digital attenuator has an input power of up to +22 dBm, and offers frequency coverage of 10 to 1,000 MHz. It has an attenuation range of 63 dB and a step size of 0.5 dB. The unit is powered and controlled by USB connection to a PC or self-powered hub, and is programmable for fixed attenuation or swept attenuation ramps directly from the included graphical user interface (GUI) software.

</div>

<img src={require("./LDA-102N.jpg").default} style={{width:"256px", height: "200px"}} />

</div>

The LDA-102N Lab Brick USB programmable 50 Ohm digital attenuator has an input power of up to +22 dBm, and offers frequency coverage of 10 to 1,000 MHz. It has an attenuation range of 63 dB and a step size of 0.5 dB. The unit is powered and controlled by USB connection to a PC or self-powered hub, and is programmable for fixed attenuation or swept attenuation ramps directly from the included graphical user interface (GUI) software.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

Vaunix Technology Corp. designs, manufactures, and services RF and microwave test equipment and digital radio communications products. Utilizing our deep RF and software engineering expertise, rooted in microwave radio and wireless equipment repair and testing, Vaunix developed the Lab Brick® family of electronic test products, which set a new standard for cost, size, and simplicity of wireless testing devices. Powered by a USB connection and controlled by easy-to-use, graphical-user-interface (GUI) software, Lab Bricks have been designed to meet the needs of wireless engineers and technicians who want to create flexible, customized system solutions either in the lab or in the field. We 've expanded our Lab Brick® family of electronic test products to include Attenuator Matrix solutions that double as Wireless [Handover Test Systems](https://vaunix.com/handover-test-systems/) to give our test technicians and product engineers the advanced capability to solve unique wireless _handover _testing challenges and bring affordability, functionality, reliability and simplicity to the microwave test bench. <a href="https://vaunix.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
</ul>
</details>

## Connect to the LDA-102N in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes Community

To connect to a LDA-102N using Qcodes Community, you can use the following Python script:

```python
from qcodes import Station
from qcodes_contrib_drivers.drivers.Vaunix_LDA import LDA

# Create a station to hold the instruments
station = Station()

# Connect to the LDA-102N
lda = LDA('lda', serial_number=102)

# Add the LDA to the station
station.add_component(lda)

# Print the IDN of the LDA
print(lda.get_idn())

# Set the attenuation to 10 dB
lda.attenuation(10)

# Close the connection to the LDA
lda.close()
```

This script creates a `Station` object to hold the instruments. It then connects to the LDA-102N by creating an instance of the `LDA` driver and passing the serial number of the instrument as an argument. The LDA is added to the station using the `add_component` method. The IDN of the LDA is printed using the `get_idn` method. The attenuation is set to 10 dB using the `attenuation` parameter. Finally, the connection to the LDA is closed using the `close` method.
