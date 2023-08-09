<!--- Add SEO here --->

In this example, we use the `SERIAL_TIMESERIES` node to extract some time-dependent measurements
received from an Arduino microcontroller and visualize the output.

The [`SERIAL_TIMESERIES`](https://github.com/flojoy-ai/nodes/blob/main/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/SERIAL_TIMESERIES.py) node receives data from Serial communication with the Arduino, and stores the measured values in a table named `readings`. The Arduino prints new values on the serial console for each loop. The [`SERIAL_TIMESERIES`](https://github.com/flojoy-ai/nodes/blob/main/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/SERIAL_TIMESERIES.py) node then extracts a single measurement (it can also contain multiple values, as shown in the Output).

The [`TABLE`](https://github.com/flojoy-io/nodes/blob/main/VISUALIZERS/PLOTLY/TABLE/TABLE.py) node displays all values stored in the timeseries measurement.

The [`END`](https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/TERMINATORS/END/END.py) node terminates the process.


**Remarks about the Arduino code:**

The last line that should be returned by the Arduino, is the data with a new line at the end (i.e. `println()`).

For example:

    - print(reading0)
    - print(",")
    - println(reading1)