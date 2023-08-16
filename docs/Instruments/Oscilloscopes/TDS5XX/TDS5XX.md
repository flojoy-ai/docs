
# TDS5XX

## Instrument Card

<div className="flex">

<div>



</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118626/Instruments/Oscilloscopes/TDS5XX/TDS5XX.png" style={{ width: "325px" }} />

</div>

>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125954/Instruments/Vendor%20Logos/Tektronix.png" style={{ width: "100%", objectFit: "cover" }} />

Tektronix, Inc., historically widely known as Tek, is an American company best known for manufacturing test and measurement devices such as [oscilloscopes](https://en.wikipedia.org/wiki/Oscilloscope), [logic analyzers](https://en.wikipedia.org/wiki/Logic_analyzer), and video and mobile test protocol equipment. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5800.0</li>
</ul>
</details>

## Connect to the TDS5XX in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Instrumentkit


```python
from instrumentkit import Scope

# Connect to the oscilloscope
scope = Scope("TCPIP::192.168.1.1::INSTR")

# Set the timebase and voltage scale
scope.timebase = 1e-3  # 1 ms/div
scope.channel1.voltage_scale = 0.1  # 0.1 V/div

# Acquire a waveform
waveform = scope.acquire_waveform()

# Print the waveform data
print(waveform.data)

# Disconnect from the oscilloscope
scope.disconnect()
```

In this script, we first import the `Scope` class from the `instrumentkit` module. Then, we create an instance of the `Scope` class by passing the instrument's address as a string to the constructor.

Next, we set the timebase and voltage scale of the oscilloscope using the `timebase` and `voltage_scale` properties of the `Scope` and `Channel` classes, respectively.

We then acquire a waveform from the oscilloscope using the `acquire_waveform` method of the `Scope` class. This method returns a `Waveform` object that contains the waveform data.

Finally, we print the waveform data and disconnect from the oscilloscope using the `disconnect` method of the `Scope` class.

Note: Replace `"TCPIP::192.168.1.1::INSTR"` with the actual IP address or VISA resource string of your TDS5XX Oscilloscope.

