
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# TopMode

## Instrument Card

<div className="flex">

<div>

TOPTICA’s TopMode lasers operate as easily as a HeNe, but also offer higher power and the choice of wavelength. The TopMode series sets records in terms of power, coherence and wavelength stability. The proprietary CoHerence-Advanced Regulation Method (CHARM) provides an active stabilization of the lasers’ coherence and ensures continuous single-frequency operation. TopMode and CHARM means nothing less than reliable 24/7 operation.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118456/Instruments/Lasers/TopMode/TopMode.png" style={{ width: "325px" }} />

</div>

TOPTICA’s TopMode lasers operate as easily as a HeNe, but also offer higher power and the choice of wavelength. The TopMode series sets records in terms of power, coherence and wavelength stability. The proprietary CoHerence-Advanced Regulation Method (CHARM) provides an active stabilization of the lasers’ coherence and ensures continuous single-frequency operation. TopMode and CHARM means nothing less than reliable 24/7 operation.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125974/Instruments/Vendor%20Logos/Toptica.png" style={{ width: "100%", objectFit: "cover" }} />

TOPTICA Photonics is a manufacturer of [lasers](https://en.wikipedia.org/wiki/Laser) for quantum technologies, biophotonics and material inspection. <a href="https://www.toptica.com/">Website</a>.

<ul>
  <li>Headquarters: Germany</li>
  <li>Yearly Revenue (millions, USD): 75.0</li>
</ul>
</details>

## Connect to the TopMode in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a TopMode laser using Instrumentkit, you can use the following Python script:

```python
import instrumentkit as ik

# Connect to the TopMode laser
tm = ik.toptica.TopMode.open_serial('/dev/ttyUSB0', 115200)

# Access laser properties
print(tm.laser[0].wavelength)
```

This script imports the `instrumentkit` module as `ik` and then uses the `open_serial` method of the `TopMode` class to connect to the TopMode laser. The `open_serial` method takes two arguments: the serial port name (`'/dev/ttyUSB0'` in this example) and the baud rate (`115200` in this example).

Once connected, you can access the properties of the laser using the `tm.laser[0]` syntax. In this example, it prints the wavelength of the laser using the `wavelength` property.

</TabItem>
</Tabs>