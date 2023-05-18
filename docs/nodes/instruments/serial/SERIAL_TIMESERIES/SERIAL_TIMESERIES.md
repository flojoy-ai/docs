---
sidebar_position: 2
id: SERIAL_TIMESERIES
title: Serial Time Series Example
---

In this page, we will go through an example of simple data aquisition from a serial device. This example will assume an Arduino is being used although any serial device should work.

:::info
This app requires a serial device such as an Arduino.
:::

The returned x-axis from the node is time in seconds starting from 0. The y-axis can be anything with n number of columns. Note that if two y axis columns are needed, the SELECT_ARRAY node must be used.

### Setting up the serial device.

The serial device should return y-axis data in a comma seperated format. In C++ like an Ardunio uses, the data should be returned like so:

```
print(reading0)
print(",")
println(reading1)
```

:::caution
The first data points must be returned with print while last data point must be println or equivalent.
:::

In Python (>3.6) this would appear like:

```
print(f'{reading0}','{reading1}')

```

or

```
print(reading0, ',' , reading1)

```

### Loading the app.

Click File -> Load and load the serial.txt file in the apps folder (or add each node seperately). The example app is shown below. 

![image](/img/serial/load.png)
*Load the app.*

![image](/img/serial/script.png)
*The app should match this image.*

The SELECT_ARRAY node chooses which y-axis column to use. If only one column is returned by the serial device, do not use the SELECT_ARRAY node.

### CTRLs setup.

The parameters available for SERIAL are as follows:

- NUM_READINGS (the number of readings that the node will make.)
- COMPORT (The serial Com port to use.)
- BAUD_RATE (Default 9600)
- RECORD_PERIOD (The time between two readings.)

The parameters available for SELECT_ARRAY:

- COLUMN (The y-axis column to use)

![image](/img/serial/ctrls.png)
*<br />Choose the CTRLs parameters for your setup*

![image](/img/serial/example.png)
*Example results from the app. The top column is light intensity which is constant here. The bottom column is temperature in Kelvin.*
