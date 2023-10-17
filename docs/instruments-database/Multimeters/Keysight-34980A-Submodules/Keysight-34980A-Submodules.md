---
title: Connecting to Keysight 34980A Submodules by Keysight in Python
sidebar_label: Keysight 34980A Submodules
description: The Keysight 34980A Multifunction Switch/Measure unit is designed for R&D andmanufacturing test engineers who are working in design verification, automatedtest or data acquisition and are either looking to upgrade their existing systems orare in need of a new, cost-effective alternative
keywords: [multimeters, Keysight, QCodes]
slug: /instruments-database/multimeters/keysight/keysight-34980a-submodules
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395591/Instruments/Multimeters/Keysight-34980A-Submodules/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 34980A Submodules

## Instrument Card

<div className="flex">

<div>

The Keysight 34980A Multifunction Switch/Measure unit is designed for R&D and
manufacturing test engineers who are working in design verification, automated
test or data acquisition and are either looking to upgrade their existing systems or
are in need of a new, cost-effective alternative

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395591/Instruments/Multimeters/Keysight-34980A-Submodules/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-01247/data-sheets/5989-1437.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: KEYSIGHT</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='MULTIMETERS' manufacturer='KEYSIGHT'></FeaturedInstrumentVideo>


## Connect to the Keysight 34980A Submodules in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='MULTIMETERS' manufacturer='KEYSIGHT'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

To connect to a Keysight 34980A Submodule DAQ board using Qcodes, you can use the following Python script:

```python
from qcodes import VisaInstrument, InstrumentChannel
from typing import Union, List, Tuple, Optional


class KeysightSubModule(InstrumentChannel):
    def __init__(
            self,
            parent: Union[VisaInstrument, InstrumentChannel],
            name: str,
            slot: int
    ) -> None:
        super().__init__(parent, name)
        self.slot = slot


class KeysightSwitchMatrixSubModule(KeysightSubModule):
    def validate_value(self, row: int, column: int) -> None:
        raise NotImplementedError("Please subclass this")

    def to_channel_list(
            self,
            paths: List[Tuple[int, int]],
            wiring_config: Optional[str] = None
    ) -> str:
        raise NotImplementedError("Please subclass this")

    def is_open(self, row: int, column: int) -> bool:
        self.validate_value(row, column)
        channel = self.to_channel_list([(row, column)])
        message = self.ask(f'ROUT:OPEN? {channel}')
        return bool(int(message))

    def is_closed(self, row: int, column: int) -> bool:
        self.validate_value(row, column)
        channel = self.to_channel_list([(row, column)])
        message = self.ask(f'ROUT:CLOSe? {channel}')
        return bool(int(message))

    def connect(self, row: int, column: int) -> None:
        self.validate_value(row, column)
        channel = self.to_channel_list([(row, column)])
        self.write(f'ROUT:CLOSe {channel}')

    def disconnect(self, row: int, column: int) -> None:
        self.validate_value(row, column)
        channel = self.to_channel_list([(row, column)])
        self.write(f'ROUT:OPEN {channel}')

    def connect_paths(self, paths: List[Tuple[int, int]]) -> None:
        for row, column in paths:
            self.validate_value(row, column)
        channel_list_str = self.to_channel_list(paths)
        self.write(f"ROUTe:CLOSe {channel_list_str}")

    def disconnect_paths(self, paths: List[Tuple[int, int]]) -> None:
        for row, column in paths:
            self.validate_value(row, column)
        channel_list_str = self.to_channel_list(paths)
        self.write(f"ROUTe:OPEN {channel_list_str}")

    def are_closed(self, paths: List[Tuple[int, int]]) -> List[bool]:
        for row, column in paths:
            self.validate_value(row, column)
        channel_list_str = self.to_channel_list(paths)
        messages = self.ask(f"ROUTe:CLOSe? {channel_list_str}")
        return [bool(int(message)) for message in messages.split(',')]

    def are_open(self, paths: List[Tuple[int, int]]) -> List[bool]:
        for row, column in paths:
            self.validate_value(row, column)
        channel_list_str = self.to_channel_list(paths)
        messages = self.ask(f"ROUTe:OPEN? {channel_list_str}")
        return [bool(int(message)) for message in messages.split(',')]


# Example usage
from qcodes import VisaInstrument

# Connect to the Keysight 34980A main instrument
main_instrument = VisaInstrument("main_instrument_name")

# Create an instance of the KeysightSwitchMatrixSubModule
submodule = KeysightSwitchMatrixSubModule(main_instrument, "submodule_name", 1)

# Check if a channel is open
is_open = submodule.is_open(1, 1)
print(f"Channel is open: {is_open}")

# Connect a channel
submodule.connect(1, 1)

# Check if the channel is closed
is_closed = submodule.is_closed(1, 1)
print(f"Channel is closed: {is_closed}")

# Disconnect the channel
submodule.disconnect(1, 1)

# Check if the channel is open again
is_open = submodule.is_open(1, 1)
print(f"Channel is open: {is_open}")
```

Note: Replace `"main_instrument_name"` with the actual name or address of the Keysight 34980A main instrument.

</TabItem>
</Tabs>