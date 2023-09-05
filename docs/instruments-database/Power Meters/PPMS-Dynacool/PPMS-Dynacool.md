---
title: Connecting to PPMS Dynacool by Quantum Design in Python
sidebar_label: PPMS Dynacool
description: Quantum Design's DynaCool™ PPMS® performs electrical, thermal and magnetic measurements while controlling the samples temperature and magnetic environment.The system uses a single two-stage pulse tube cooler to cool both the superconducting magnet and provide temperature control below 10K, resulting in a low vibration environment for sample measurements. At low temperatures a small amount of Helium-4 is condensed and used to cool the sample while the magnet is cooled through solid contact to a 4 K plate.
keywords: [power meters, Quantum Design, QCodes]
slug: /instruments-database/power-meters/quantum-design/PPMS-dynacool
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395539/Instruments/Power%20Meters/PPMS-Dynacool/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PPMS Dynacool

## Instrument Card

<div className="flex">

<div>

Quantum Design's DynaCool™ PPMS® performs electrical, thermal and magnetic measurements while controlling the samples temperature and magnetic environment.The system uses a single two-stage pulse tube cooler to cool both the superconducting magnet and provide temperature control below 10K, resulting in a low vibration environment for sample measurements. At low temperatures a small amount of Helium-4 is condensed and used to cool the sample while the magnet is cooled through solid contact to a 4 K plate.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395539/Instruments/Power%20Meters/PPMS-Dynacool/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.qdusa.com/siteDocs/productBrochures/1307-010.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126008/Instruments/Vendor%20Logos/QuantumDesign.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Quantum Design manufactures automated temperature and magnetic field testing platforms.

<ul>
  <li>Headquarters: San Diego, California</li>
  <li>Yearly Revenue (millions, USD): 41.5</li>
  <li>Vendor Website: <a href="https://www.qdusa.com/">here</a></li>
</ul>
</details>

## Connect to the PPMS Dynacool in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

Here is an example Python script that uses Qcodes to connect to a PPMS DynaCool Spectrometer:

```python
import qcodes as qc
from qcodes.instrument_drivers.QuantumDesign.DynaCoolPPMS import DynaCool

# Connect to the DynaCool instrument
dynacool = DynaCool('dynacool', 'TCPIP0::127.0.0.1::5000::SOCKET')

# Print the instrument ID
print(dynacool.get_idn())

# Set the temperature setpoint to 10 K
dynacool.temperature_setpoint(10)

# Ramp the field to 1 T in blocking mode
dynacool.field_target(1)
dynacool.ramp(mode='blocking')

# Get the measured field
field = dynacool.field_measured()
print(f"Measured field: {field} T")

# Close the connection to the instrument
dynacool.close()
```

This script connects to the DynaCool instrument using the IP address and port specified in the `address` argument of the `DynaCool` constructor. It then sets the temperature setpoint to 10 K and ramps the field to 1 T in blocking mode. Finally, it retrieves the measured field value and prints it. The connection to the instrument is closed at the end of the script using the `close()` method.

</TabItem>
</Tabs>