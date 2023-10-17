---
title: Connecting to MercuryiPS by Oxford Instruments in Python
sidebar_label: MercuryiPS
description: Based on ±60 A modules with ±10 V compliance.Can be configured in parallel, series and matrix modes from the basic ±60 A with ±10 V output up to ±600 A with ±10 V or ±300 A with ±20 V output configurations.Communications support a full range of interface options (Ethernet, USB, RS232, and optional GPIB) with downloadable Mercury function library for LabVIEW.Quench protection and auto-rundown. The MercuryiPS can be programmed to run the magnet down safely in the event of magnet temperature rise, low cryogen levels or if triggered by an external TTL signal.The MercuryiPS has an on-board temperature sensor for diagnostic monitoring of the magnet temperature.
keywords: [power supplies, Oxford Instruments, QCodes]
slug: /instruments-database/power-supplies/oxford-instruments/mercuryips
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395615/Instruments/Power%20Supplies/MercuryiPS/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# MercuryiPS

## Instrument Card

<div className="flex">

<div>

Based on ±60 A modules with ±10 V compliance.
Can be configured in parallel, series and matrix modes from the basic ±60 A with ±10 V output up to ±600 A with ±10 V or ±300 A with ±20 V output configurations.
Communications support a full range of interface options (Ethernet, USB, RS232, and optional GPIB) with downloadable Mercury function library for LabVIEW.
Quench protection and auto-rundown. The MercuryiPS can be programmed to run the magnet down safely in the event of magnet temperature rise, low cryogen levels or if triggered by an external TTL signal.
The MercuryiPS has an on-board temperature sensor for diagnostic monitoring of the magnet temperature.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395615/Instruments/Power%20Supplies/MercuryiPS/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: MZ2000</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806167/Instruments/Vendor%20Logos/Oxford_Instruments.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Oxford Instruments plc is a United Kingdom manufacturing and research company that designs and manufactures tools and systems for industry and research. The company is headquartered in Abingdon, Oxfordshire, England, with sites in the United Kingdom, United States, Europe, and Asia.[2] It is listed on the London Stock Exchange and is a constituent of the FTSE 250 Index.[3].

<ul>
  <li>Headquarters: Abingdon, United Kingdom</li>
  <li>Yearly Revenue (millions, USD): 367.3</li>
  <li>Vendor Website: <a href="https://www.oxinst.com/">here</a></li>
</ul>
</details>

## Connect to the MercuryiPS in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">


```python
import qcodes as qc
from qcodes.instrument_drivers.QuTech.MercuryiPS import MercuryiPS

# Connect to the MercuryiPS Power Supply
mercury_ips = MercuryiPS('mercury_ips', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Print the IDN of the Power Supply
print(mercury_ips.IDN())

# Set the output voltage to 5V
mercury_ips.voltage(5)

# Set the output current limit to 1A
mercury_ips.current_limit(1)

# Enable the output
mercury_ips.output('on')

# Disable the output after 5 seconds
qc.sleep(5)
mercury_ips.output('off')

# Close the connection to the Power Supply
mercury_ips.close()
```

In this script, we first import the necessary modules: `qcodes` and the `MercuryiPS` driver from the `QuTech` package.

Then, we create an instance of the `MercuryiPS` driver, passing the instrument name and the connection string as arguments. The connection string specifies the communication protocol and the IP address of the Power Supply.

We can then use the various methods provided by the `MercuryiPS` driver to interact with the Power Supply. In this example, we print the IDN of the Power Supply, set the output voltage to 5V, set the output current limit to 1A, enable the output, wait for 5 seconds, and then disable the output.

Finally, we close the connection to the Power Supply using the `close()` method.

Note: Make sure to replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual IP address of your MercuryiPS Power Supply.

</TabItem>
</Tabs>