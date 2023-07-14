- The Flojoy app example shows how to use the SERIAL_TIMESERIES node to extract some time-dependent measurements
  received from an Arduino microcontroller and how to visualize them with Flojoy. The Arduino code example is displayed in the appendix section Media, and it works with a thermistor connected to an Arduino microcontroller following [this tutorial](https://learn.adafruit.com/thermistor/using-a-thermistor).

The workflow of this app is described below:

- The ['SERIAL_TIMESERIES'](https://github.com/flojoy-io/nodes/blob/main/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/SERIAL_TIMESERIES.py node receives data from Serial communication with the Arduino and store the measured values in a table names readings. The Arduino prints new values on the serial console for each loop. The ['SERIAL_TIMESERIES'](https://github.com/flojoy-io/nodes/blob/main/INSTRUMENTS/LABJACK/LABJACKU3/KEITHLEY2400.py) node extracts a single measurement (It can contain multiple values, see output).

- The ['TABLE'](https://github.com/flojoy-io/nodes/blob/main/VISUALIZERS/PLOTLY/TABLE/TABLE.py) node displays all values stored in the time-series measurement.

- The ['END'](https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/TERMINATORS/END/END.py) node terminates the process.
