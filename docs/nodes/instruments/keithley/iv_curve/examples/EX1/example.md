The example Flojoy app above is showing how to place and use the nodes in order to record an IV curve, only 4 nodes are needed : 

LINSPACE node allows you to create a range of voltages for your measurements :

- LINSPACE START : Define your first Voltage 
- LINSPACE END : Define your last Voltage 
- LINSPACE STEP : Define the number of voltages between the first and the last one. 
  (Example : Start : 0, END : 1, STEP : 10 --> Will send 10 voltages between 0 and 1 Volts) 

![Keithley 2400 setup](https://res.cloudinary.com/dhopxs1y3/image/upload/v1682000222/flojoy-docs/Keithley2400/89A7FE5C-D466-424D-9A0A-FC99A38135A8_4_5005_c_szerj8.jpg)
*Setup with a computer, a Keithley2400 sourcemeter, a solar cell for testing and artificial sun*
  
- The KEITHLEY 2400 node allows you to set up your serial communication parameters for the Comport : 
- KEITHLEY2400 COMPORT : Define your communication port where the source meter is connected (Default is : /dev/tty/USBO (Linux))
- KEITHLEY2400 BAUDRATE : Define the baud rate of your communication protocol (Default is : 9600, the value has to corresponds to the Instrument settings)


- LINE is the visualization node it allows you to plot your results after the measurements. (You can choose another one if you want)
- END is the terminator to end the program after running the experiment. 

- When your setup is ready click "PLAY" in order to start the experiment. Voltages will be transmitted to the circuit and 
the source meter will record the output current from the electronic device (Solar cells for example).