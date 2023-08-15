
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Kelvinox IGH

## Instrument Card

<div className="flex">

<div>



</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692107094/Instruments/Dilution%20Refrigerator/Kelvinox-IGH/file.png" style={{width:"256px", height: "200px"}} />

</div>

>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125988/Instruments/Vendor%20Logos/Oxford_Instruments.png" style={{ width:"200px", height: "150px"}} />

Oxford Instruments plc is a United Kingdom manufacturing and research company that designs and manufactures tools and systems for industry and research. The company is headquartered in Abingdon, Oxfordshire, England, with sites in the United Kingdom, United States, Europe, and Asia.[2] It is listed on the London Stock Exchange and is a constituent of the FTSE 250 Index.[3]. <a href="https://www.oxinst.com/">Website</a>.

<ul>
  <li>Headquarters: Abingdon, United Kingdom</li>
  <li>Yearly Revenue (millions, USD): 367.3</li>
</ul>
</details>

## Connect to the Kelvinox IGH in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">


```python
import qcodes as qc
from qcodes.instrument_drivers.oxford.Kelvinox_IGH import Kelvinox_IGH

# Connect to the dilution refrigerator
dilution_fridge = Kelvinox_IGH("dilution_fridge", "COM1")

# Print the current temperature of the mixing chamber
print(dilution_fridge.mixing_chamber.temperature())

# Close the connection to the dilution refrigerator
dilution_fridge.close()
```

In this example, we import the necessary modules from Qcodes and specifically import the `Kelvinox_IGH` instrument driver for the Kelvinox IGH Dilution Refrigerator. We then create an instance of the `Kelvinox_IGH` class, passing in the name of the instrument and the communication port (e.g., `"COM1"` for a serial connection).

We can then use the various methods provided by the `Kelvinox_IGH` instrument driver to interact with the dilution refrigerator. In this example, we print the current temperature of the mixing chamber using the `temperature()` method.

Finally, we close the connection to the dilution refrigerator using the `close()` method.

Note: Make sure to replace `"COM1"` with the appropriate communication port for your setup.

</TabItem>
</Tabs>