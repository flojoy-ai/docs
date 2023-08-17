---
title: R&S ZNB8
description: The R&S ZNB8 from Rohde & Schwarz is a Vector Network Analyzer with Frequency 9 kHz to 8.5 GHz, Measurement Speed 4 ms, Dynamic Range typ. 122 dB to 140 dB, Output Power typ. 12 dBm to 15 dBm, Power Sweep Range 98 dB. Tags-> VNA with Screen. More details for R&S ZNB8 can be seen below.
keywords: [network analyzer, Rohde Schwarz, Qcodes]
slug: /instruments-wiki/network-analyzer/rohde schwarz/r&s-znb8
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200954/Instruments/Network%20Analyzer/RS-ZNB8/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# R&S ZNB8

## Instrument Card

<div className="flex">

<div>

The R&S ZNB8 from Rohde & Schwarz is a Vector Network Analyzer with Frequency 9 kHz to 8.5 GHz, Measurement Speed 4 ms, Dynamic Range typ. 122 dB to 140 dB, Output Power typ. 12 dBm to 15 dBm, Power Sweep Range 98 dB. Tags: VNA with Screen. More details for R&S ZNB8 can be seen below.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200954/Instruments/Network%20Analyzer/RS-ZNB8/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692139604/Instruments/Vendor%20Logos/RohdeSchwarz.png" style={{ width: "100%", objectFit: "cover" }} />

Rohde & Schwarz GmbH & Co KG is an international electronics group specializing in the fields of electronic test equipment, broadcast & media, cybersecurity, radiomonitoring and radiolocation, and radiocommunication. <a href="https://www.rohde-schwarz.com/ca/home_48230.html">Website</a>.

<ul>
  <li>Headquarters: Munich, Germany</li>
  <li>Yearly Revenue (millions, USD): 2500.0</li>
</ul>
</details>

## Connect to the R&S ZNB8 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Rohde & Schwarz ZNB8 Network Analyzer using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.rohde_schwarz.ZNB import RohdeSchwarzZNB8

# Create an instance of the RohdeSchwarzZNB8 driver
znb = RohdeSchwarzZNB8("znb", "TCPIP0::192.168.1.1::inst0::INSTR")

# Connect to the instrument
znb.connect()

# Now you can use the instrument for measurements
# For example, you can query the instrument's ID
print(znb.IDN())

# Close the connection to the instrument
znb.disconnect()
```

In this script, we import the `RohdeSchwarzZNB8` class from the `qcodes.instrument_drivers.rohde_schwarz.ZNB` module. We then create an instance of the `RohdeSchwarzZNB8` driver, passing a name for the instrument and the instrument's address (in this case, a TCP/IP address).

Next, we connect to the instrument using the `connect()` method. Once connected, we can use the instrument for measurements. In this example, we query the instrument's ID using the `IDN()` method and print the result.

Finally, we disconnect from the instrument using the `disconnect()` method.

Note: Make sure to replace `"TCPIP0::192.168.1.1::inst0::INSTR"` with the actual address of your Rohde & Schwarz ZNB8 Network Analyzer.

</TabItem>
</Tabs>