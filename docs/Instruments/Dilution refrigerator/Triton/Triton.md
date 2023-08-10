
# Triton

## Instrument Card

<div className="flex">

<div>

The Triton family of cryogen free dilution refrigerators has led
the way in ultra-low temperature experiment-readiness with its
leading-edge superconducting magnet integration, sample loading
mechanisms and sample wiring options.
With over 300 systems installed worldwide, Triton is used in worldleading science across quantum technology, spintronics, optics and
many other cutting-edge applications of condensed matter physics.

</div>

<img src={require("./Triton.jpg").default} style={{width:"256px", height: "200px"}} />

</div>

The Triton family of cryogen free dilution refrigerators has led
the way in ultra-low temperature experiment-readiness with its
leading-edge superconducting magnet integration, sample loading
mechanisms and sample wiring options.
With over 300 systems installed worldwide, Triton is used in worldleading science across quantum technology, spintronics, optics and
many other cutting-edge applications of condensed matter physics.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

Oxford Instruments plc is a United Kingdom manufacturing and research company that designs and manufactures tools and systems for industry and research. The company is headquartered in Abingdon, Oxfordshire, England, with sites in the United Kingdom, United States, Europe, and Asia.[2] It is listed on the London Stock Exchange and is a constituent of the FTSE 250 Index.[3]. <a href="https://www.oxinst.com/">Website</a>.

<ul>
  <li>Headquarters: Abingdon, United Kingdom</li>
  <li>Yearly Revenue (millions, USD): 367.3</li>
</ul>
</details>

## Connect to the Triton in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes


```python
import qcodes as qc
from qcodes.instrument_drivers.QuantumDesign.Triton import Triton

# Connect to the Triton cryogenic system
triton = Triton("triton", "TCPIP0::192.168.1.100::33576::SOCKET")

# Print the identification string of the Triton
print(triton.IDN())

# Close the connection to the Triton
triton.close()
```

In this script, we import the necessary modules from Qcodes and specifically import the `Triton` class from the `QuantumDesign.Triton` module. We then create an instance of the `Triton` class, passing the instrument name and the connection string as arguments. The connection string specifies the IP address and port number of the Triton cryogenic system.

We can then use the `IDN()` method of the `Triton` instance to retrieve the identification string of the Triton, which contains information about the instrument.

Finally, we close the connection to the Triton using the `close()` method of the `Triton` instance.

Note: Make sure to replace the IP address and port number in the connection string with the actual values for your Triton cryogenic system.

