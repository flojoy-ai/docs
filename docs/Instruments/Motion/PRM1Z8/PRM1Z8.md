
# PRM1Z8

## Instrument Card

<div className="flex">

<div>

The PRM1Z8 is a small, compact, DC servo motorized 360° rotation mount and stage that accepts Ø1" optics and SM1-threaded components. The user can measure the angular displacement by using the Vernier dial in conjunction with the graduation marks that are marked on the rotating plate in 1° increments. This rotation stage/mount is also equipped with a home limit switch to facilitate automated rotation to the precise 0° position, allowing absolute angular positioning thereafter. The limit switch is designed to allow continuous rotation of the stage over multiple 360° cycles.

</div>

<img src={require("./PRM1Z8.jpg").default} width="256"/>

</div>

The PRM1Z8 is a small, compact, DC servo motorized 360° rotation mount and stage that accepts Ø1" optics and SM1-threaded components. The user can measure the angular displacement by using the Vernier dial in conjunction with the graduation marks that are marked on the rotating plate in 1° increments. This rotation stage/mount is also equipped with a home limit switch to facilitate automated rotation to the precise 0° position, allowing absolute angular positioning thereafter. The limit switch is designed to allow continuous rotation of the stage over multiple 360° cycles.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

Thorlabs, Inc. is an American privately held optical equipment company headquartered in Newton, New Jersey. The company was founded in 1989 by Alex Cable, who serves as its current president and CEO. As of 2018, Thorlabs has annual sales of approximately $500 million. <a href="https://www.thorlabs.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 550.0</li>
</ul>
</details>

## Connect to the PRM1Z8 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes Community

To connect to a PRM1Z8 Motion using Qcodes Community, you can use the following Python script:

```python
from qcodes import Station
from qcodes.instrument_drivers.Thorlabs import Thorlabs_APT, Thorlabs_PRM1Z8

# Create a Thorlabs APT server
apt = Thorlabs_APT()

# Connect to the PRM1Z8 polarizer wheel
prm1z8 = Thorlabs_PRM1Z8('prm1z8', device_id=1, apt=apt)

# Create a station and add the instrument
station = Station()
station.add_component(prm1z8)

# Connect to the instrument
station.connect(prm1z8)

# Now you can use the instrument
position = prm1z8.position()
print(f"Current position: {position} degrees")

# Set the position to 45 degrees
prm1z8.position(45)
```

In this script, we first import the necessary modules from Qcodes. Then, we create a Thorlabs_APT object to serve as the APT server. Next, we create an instance of the Thorlabs_PRM1Z8 instrument, providing the instrument name, device ID, and the APT server object.

We then create a Station object and add the PRM1Z8 instrument to it. Finally, we connect to the instrument using the `connect` method of the Station object.

After connecting, we can use the instrument's methods and parameters. In this example, we retrieve the current position using the `position` parameter and print it. Then, we set the position to 45 degrees using the `position` parameter.

Note: Make sure you have the necessary dependencies installed, including Qcodes and the Thorlabs APT Python package.

