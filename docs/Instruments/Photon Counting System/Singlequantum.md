
# Singlequantum

## Instrument Card



<details open>
<summary><h2>Manufacturer Card</h2></summary>
At Single Quantum, we confront every challenge with innovation, dedication, and passion. Founded in 2012, our team emerged as true pioneers of single photon detection technology: we were among the first to manufacture and commercialize superconducting nanowire single photon detectors. Since then, our multi-channel Single Quantum Eos photon detection system has been chosen by more than 100 academic and industrial labs all over the world to perform complex optical measurements. <a href="https://singlequantum.com/">Website</a>.
<br></br>
<ul>
  <li>Headquarters: Delft, Zuid-Holland, The Netherlands</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
</ul>
</details>

## Connect to the Singlequantum in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes Community

To connect to a Singlequantum Photon Counting System using Qcodes Community, you can use the provided `WebSQControlqcode` class. Here's an example script that demonstrates how to connect to the instrument and perform some basic operations:

```python
from qcodes import Station
from qcodes.instrument_drivers.singlequantum.WebSQControlqcode import WebSQControlqcode

# Create a station to hold the instrument
station = Station()

# Connect to the Singlequantum Photon Counting System
instrument = WebSQControlqcode('singlequantum', address='localhost', port=12000)
station.add_component(instrument)

# Set the bias current to 100 uA
instrument.bias_current.set(100)

# Enable the detectors
instrument.detectors.set(True)

# Set the measurement period to 10 ms
instrument.measurement_periode.set(10)

# Acquire 5 points
instrument.npts.set(5)
counts = instrument.counters.get()

# Print the acquired counts
print(counts)

# Disconnect from the instrument
instrument.close()
```

In this script, we first create a `Station` object to hold the instrument. Then, we create an instance of the `WebSQControlqcode` class and add it to the station. We can then use the instrument's parameters to interact with the Singlequantum Photon Counting System. In this example, we set the bias current, enable the detectors, set the measurement period, and acquire counts for 5 points. Finally, we print the acquired counts and close the connection to the instrument.

