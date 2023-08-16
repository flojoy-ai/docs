
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# MC1

## Instrument Card

<div className="flex">

<div>



</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118588/Instruments/Positional%20Controller/MC1/MC1.png" style={{ width: "325px" }} />

</div>

>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125997/Instruments/Vendor%20Logos/Qubitekk.png" style={{ width: "100%", objectFit: "cover" }} />

Qubitekk provides reliable products for generating, preparing, distributing, detecting, correlating and storing photonic qubits. The hardware that is needed to strengthen American leadership in quantum computing, communications, and sensing solutions is being developed and manufactured in San Diego County, CA. <a href="https://qubitekk.com/">Website</a>.

<ul>
  <li>Headquarters: Vista, California, United States</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
</ul>
</details>

## Connect to the MC1 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a MC1 Positional Controller using Instrumentkit, you can use the following Python script:

```python
from instrumentkit import qubitekk

# Connect to the MC1 Positional Controller
mc1 = qubitekk.MC1.open_serial('COM8', 19200, timeout=1)

# Now you can use the MC1 object to control the positional controller
# For example, you can move the controller to a specific position
mc1.move_to_position(100)

# You can also read the current position of the controller
position = mc1.get_position()
print(f"Current position: {position}")
```

Note: Make sure to replace `'COM8'` with the correct serial port of your MC1 Positional Controller.

</TabItem>
</Tabs>