
# TopMode

## Instrument Card

<div className="flex">

<div>

TOPTICA’s TopMode lasers operate as easily as a HeNe, but also offer higher power and the choice of wavelength. The TopMode series sets records in terms of power, coherence and wavelength stability. The proprietary CoHerence-Advanced Regulation Method (CHARM) provides an active stabilization of the lasers’ coherence and ensures continuous single-frequency operation. TopMode and CHARM means nothing less than reliable 24/7 operation.

</div>

<img width="256" src="https://v5.airtableusercontent.com/v1/19/19/1691539200000/y0Tk9Ul-oFoBRz-l5bDxZA/4XKsKSnc77B_hp_Q-Tk3caXy8W2eY0aWmUI7Zjqj7D5NOwzpwsRm8bEVrDelkJd7kDhQjaDOAMv5vjn46s-PGBHu6NWs9vf48t1XfjpAXhitOkjOnxt-1j7zqI2cUopD/opgsz4GircKUF7XJ6Hn1I3Gcv6dRUQfX6o4GpfU67gU"/>

</div>

TOPTICA’s TopMode lasers operate as easily as a HeNe, but also offer higher power and the choice of wavelength. The TopMode series sets records in terms of power, coherence and wavelength stability. The proprietary CoHerence-Advanced Regulation Method (CHARM) provides an active stabilization of the lasers’ coherence and ensures continuous single-frequency operation. TopMode and CHARM means nothing less than reliable 24/7 operation.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

TOPTICA Photonics is a manufacturer of [lasers](https://en.wikipedia.org/wiki/Laser) for quantum technologies, biophotonics and material inspection. <a href="https://www.toptica.com/">Website</a>.

<ul>
  <li>Headquarters: Germany</li>
  <li>Yearly Revenue (millions, USD): 75.0</li>
</ul>
</details>

## Connect to the TopMode in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Instrumentkit

To connect to a TopMode laser using Instrumentkit, you can use the following Python script:

```python
from instrumentkit import toptica

# Connect to the TopMode laser
tm = toptica.TopMode.open_serial('/dev/ttyUSB0', 115200)

# Access laser properties
print(tm.laser[0].wavelength)
```

This script imports the `toptica` module from Instrumentkit and uses the `TopMode.open_serial()` method to connect to the TopMode laser using the specified serial port and baud rate. The `open_serial()` method returns a `TopMode` object, which can be used to access the properties and methods of the laser.

In this example, the script accesses the `wavelength` property of the first laser (`tm.laser[0].wavelength`) and prints its value.

