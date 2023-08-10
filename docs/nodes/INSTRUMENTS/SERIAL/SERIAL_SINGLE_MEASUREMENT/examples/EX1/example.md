---
title: SERIAL_SINGLE_MEASUREMENT
description:  In this example, we use the SERIAL_SINGLE_MEASUREMENT node to extract some measurements received from an Arduino microcontroller and visualize the output.
keyword: [Python, Instrument, Serial communication measurement, Python serial instrument integration, Data acquisition and analysis, Python"-"based serial measurement, Serial instrument integration techniques, Accurate measurement with Python, Enhance measurement with serial communication, Streamline data acquisition, Precise measurement using Python, Python control of serial single measurement]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/INSTRUMENTS/SERIAL/SERIAL_SINGLE_MEASUREMENT/examples/EX1/output.jpeg
---

In this example, we use the `SERIAL_SINGLE_MEASUREMENT` node to extract some measurements
received from an Arduino microcontroller and visualize the output.

The [`SERIAL_SINGLE_MEASUREMENT`](https://github.com/flojoy-io/nodes/blob/main/INSTRUMENTS/SERIAL/SERIAL_SINGLE_MEASUREMENT/SERIAL_SINGLE_MEASUREMENT.py) node receives data from Serial communication with the Arduino and stores the measured values in a table called `reading`. The Arduino then prints new values on the serial console for each loop. The [`SERIAL_SINGLE_MEASUREMENT`](https://github.com/flojoy-io/nodes/blob/main/INSTRUMENTS/SERIAL/SERIAL_SINGLE_MEASUREMENT/SERIAL_SINGLE_MEASUREMENT.py) node extracts a single measurement (it can also contain multiple values, as seen in the Output).

The [`BAR`](https://github.com/flojoy-io/nodes/blob/main/VISUALIZERS/PLOTLY/BAR/BAR.py) node displays all values stored in the single measurement.

The [`END`](https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/TERMINATORS/END/END.py) node terminates the process.

**Remarks about the Arduino code:**

This example works with the `arduino_example.ino` Arduino code. The last line that should be returned by the Arduino, is the data with a new line at the end (i.e. `println()`).

For example:

    - print(reading0)
    - print(",")
    - println(reading1)

The [`SERIAL_SINGLE_MEASUREMENT`](https://github.com/flojoy-io/nodes/blob/main/INSTRUMENTS/SERIAL/SERIAL_SINGLE_MEASUREMENT/SERIAL_SINGLE_MEASUREMENT.py) node receives data from the Arduino serial console as a string and splits it using "," as separators. It then returns the values measured in a list called `reading`.

**Update the Single Measurement with a Loop:**

To update the values received from the Arduino, use the [`LOOP`](https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/LOOP/LOOP.py) and [`GOTO`](https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/GOTO/GOTO.py) nodes to create a loop around the [`SERIAL_SINGLE_MEASUREMENT`](https://github.com/flojoy-io/nodes/blob/main/INSTRUMENTS/SERIAL/SERIAL_SINGLE_MEASUREMENT/SERIAL_SINGLE_MEASUREMENT.py) and [`BAR`](https://github.com/flojoy-io/nodes/blob/main/VISUALIZERS/PLOTLY/BAR/BAR.py) nodes. (Refer to the `app2.jpeg` for an example.)

The loop allows the user to update measurements, but only the last measurement will be saved and displayed.
To record all the measurements for a given period, use the [`SERIAL_TIMESERIES`](https://github.com/flojoy-io/nodes/blob/main/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/SERIAL_TIMESERIES.py) node.