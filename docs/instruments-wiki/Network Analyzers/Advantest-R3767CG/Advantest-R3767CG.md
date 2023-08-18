---
title: Connecting to Advantest R3767CG by Advantest in Python
sidebar_label: Advantest R3767CG
description: The Advantest R3765CG/R3767CG network analyzers are vector network analyzers that incorporate a new RF circuit analysis technique.
keywords: [network analyzers, Advantest, Pymeasure]
slug: /instruments-wiki/network-analyzers/advantest/advantest-r3767cg
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692309898/Instruments/Network%20Analyzers/Advantest-R3767CG/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Advantest R3767CG

## Instrument Card

<div className="flex">

<div>

The Advantest R3765CG/R3767CG network analyzers are vector network analyzers that incorporate a new RF circuit analysis technique.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692309898/Instruments/Network%20Analyzers/Advantest-R3767CG/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125967/Instruments/Vendor%20Logos/Advantest.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Advantest manufactures and sells semiconductor and component test system products and mechatronics-related products. <a href="https://www.advantest.com/">Website</a>.

<ul>
  <li>Headquarters: Japan</li>
  <li>Yearly Revenue (millions, USD): 2940.0</li>
</ul>
</details>

## Connect to the Advantest R3767CG in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">

```python
from pymeasure.instruments import Instrument
from pymeasure.instruments.validators import strict_range

class AdvantestR3767CG(Instrument):
    """ Represents the Advantest R3767CG VNA. Implements controls to change the analysis
        range and to retrieve the data for the trace.
    """

    id = Instrument.measurement(
        "*IDN?", """ Reads the instrument identification """
    )

    center_frequency = Instrument.control(
        ":FREQ:CENT?", ":FREQ:CENT %d",
        """Center Frequency in Hz""",
        validator=strict_range,
        values=[300000, 8000000000]
    )

    span_frequency = Instrument.control(
        ":FREQ:SPAN?", ":FREQ:SPAN %d",
        """Span Frequency in Hz""",
        validator=strict_range,
        values=[1, 8000000000]
    )

    start_frequency = Instrument.control(
        ":FREQ:STAR?", ":FREQ:STAR %d",
        """ Starting frequency in Hz """,
        validator=strict_range,
        values=[1, 8000000000]
    )

    stop_frequency = Instrument.control(
        ":FREQ:STOP?", ":FREQ:STOP %d",
        """ Stoping frequency in Hz """,
        validator=strict_range,
        values=[1, 8000000000]
    )

    trace_1 = Instrument.measurement(
        "TRAC:DATA? FDAT1", """ Reads the Data array from trace 1 after formatting """
    )

    def __init__(self, adapter, name="Advantest R3767CG", **kwargs):
        super().__init__(
            adapter,
            name,
            **kwargs
        )

        # Tell unit to operate in IEEE488.2-1987 command mode.
        self.write("OLDC OFF")
```

This code defines a class `AdvantestR3767CG` that represents the Advantest R3767CG VNA (Vector Network Analyzer). It inherits from the `Instrument` class provided by the `pymeasure.instruments` module.

The class has several attributes and methods:

- `id`: This is a measurement attribute that reads the instrument identification using the SCPI command `*IDN?`.

- `center_frequency`: This is a control attribute that allows you to get or set the center frequency of the VNA using the SCPI commands `:FREQ:CENT?` and `:FREQ:CENT %d` respectively. It has a validator `strict_range` that ensures the frequency is within the range of 300,000 Hz to 8,000,000,000 Hz.

- `span_frequency`: This is a control attribute that allows you to get or set the span frequency of the VNA using the SCPI commands `:FREQ:SPAN?` and `:FREQ:SPAN %d` respectively. It has a validator `strict_range` that ensures the frequency is within the range of 1 Hz to 8,000,000,000 Hz.

- `start_frequency`: This is a control attribute that allows you to get or set the starting frequency of the VNA using the SCPI commands `:FREQ:STAR?` and `:FREQ:STAR %d` respectively. It has a validator `strict_range` that ensures the frequency is within the range of 1 Hz to 8,000,000,000 Hz.

- `stop_frequency`: This is a control attribute that allows you to get or set the stopping frequency of the VNA using the SCPI commands `:FREQ:STOP?` and `:FREQ:STOP %d` respectively. It has a validator `strict_range` that ensures the frequency is within the range of 1 Hz to 8,000,000,000 Hz.

- `trace_1`: This is a measurement attribute that reads the data array from trace 1 after formatting using the SCPI command `TRAC:DATA? FDAT1`.

- `__init__`: This is the constructor method of the class. It initializes the `AdvantestR3767CG` object by calling the constructor of the `Instrument` class and passing the adapter and name. It also sends the SCPI command `OLDC OFF` to the VNA to operate in IEEE488.2-1987 command mode.

</TabItem>
</Tabs>