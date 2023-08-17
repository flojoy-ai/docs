---
title: Triton
description: The Triton family of cryogen free dilution refrigerators has ledthe way in ultra-low temperature experiment-readiness with itsleading-edge superconducting magnet integration, sample loadingmechanisms and sample wiring options.With over 300 systems installed worldwide, Triton is used in worldleading science across quantum technology, spintronics, optics andmany other cutting-edge applications of condensed matter physics.
keywords: [dilution refrigerator, Oxford Instruments, Qcodes]
slug: /instruments-wiki/dilution-refrigerator/oxford instruments/triton
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201132/Instruments/Dilution%20Refrigerator/Triton/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201132/Instruments/Dilution%20Refrigerator/Triton/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125988/Instruments/Vendor%20Logos/Oxford_Instruments.png" style={{ width: "100%", objectFit: "cover" }} />

Oxford Instruments plc is a United Kingdom manufacturing and research company that designs and manufactures tools and systems for industry and research. The company is headquartered in Abingdon, Oxfordshire, England, with sites in the United Kingdom, United States, Europe, and Asia.[2] It is listed on the London Stock Exchange and is a constituent of the FTSE 250 Index.[3]. <a href="https://www.oxinst.com/">Website</a>.

<ul>
  <li>Headquarters: Abingdon, United Kingdom</li>
  <li>Yearly Revenue (millions, USD): 367.3</li>
</ul>
</details>

## Connect to the Triton in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">


```python
import qcodes as qc
from qcodes.instrument_drivers.oxford.triton import Triton

# Connect to the Triton Dilution Refrigerator
triton = Triton("triton", "TCPIP0::192.168.1.100::5000::SOCKET")

# Initialize the instrument
triton.init()

# Set the temperature of the mixing chamber to 100 mK
triton.mixing_chamber.temperature(0.1)

# Close the connection to the Triton Dilution Refrigerator
triton.close()
```

In this example, we import the necessary modules and classes from Qcodes. We then create an instance of the `Triton` class, passing the IP address and port number of the Triton Dilution Refrigerator as arguments. 

Next, we initialize the instrument using the `init()` method. This step is important to establish communication with the instrument and ensure that it is ready for use.

We can then use various methods provided by the `Triton` class to control the instrument. In this example, we set the temperature of the mixing chamber to 100 mK using the `temperature()` method of the `mixing_chamber` attribute.

Finally, we close the connection to the Triton Dilution Refrigerator using the `close()` method.

Note that you may need to modify the IP address and port number in the `Triton` constructor to match the actual address and port of your Triton Dilution Refrigerator.

</TabItem>
</Tabs>