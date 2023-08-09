
# Kelvinox

## Instrument Card

<div className="flex">

<div>



</div>

<img src={require("./Kelvinox.jpg").default} style={{width:"256px", height: "200px"}} />

</div>

>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

Oxford Instruments plc is a United Kingdom manufacturing and research company that designs and manufactures tools and systems for industry and research. The company is headquartered in Abingdon, Oxfordshire, England, with sites in the United Kingdom, United States, Europe, and Asia.[2] It is listed on the London Stock Exchange and is a constituent of the FTSE 250 Index.[3]. <a href="https://www.oxinst.com/">Website</a>.

<ul>
  <li>Headquarters: Abingdon, United Kingdom</li>
  <li>Yearly Revenue (millions, USD): 367.3</li>
</ul>
</details>

## Connect to the Kelvinox in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes Community


```python
import qcodes as qc
from qcodes.instrument_drivers.qblox import Kelvinox_100

# Connect to the Kelvinox
kelvinox = Kelvinox_100.KeystoneKelvinox100('kelvinox', 'ASRLCOM3::INSTR')

# Print the instrument ID
print(kelvinox.IDN())

# Set the temperature to 1 Kelvin
kelvinox.temperature(1)

# Close the connection
kelvinox.close()
```

In this example, we import the necessary modules from Qcodes and specifically import the `Kelvinox_100` driver from the `qblox` package. We then create an instance of the `Kelvinox_100` class, passing the instrument name and the connection string as arguments.

We can then use the various methods and properties of the `Kelvinox_100` class to interact with the instrument. In this example, we print the instrument ID using the `IDN()` method, set the temperature to 1 Kelvin using the `temperature()` method, and finally close the connection using the `close()` method.

Note that you may need to modify the connection string (`ASRLCOM3::INSTR`) to match the actual connection details of your Kelvinox instrument.

