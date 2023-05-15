After selecting the nodes for your application, you should define your experiment parameters : 

- LINSPACE node allows you to create a range of voltages for your measurements :

  LINSPACE START : Define your first Voltage 
  LINSPACE END : Define your last Voltage 
  LINSPACE STEP : Define the number of voltages between the first and the last one. 
  (Example : Start : 0, END : 1, STEP : 10 --> Will send 10 voltages between 0 and 1 Volts)
  
- Next step : set up your serial communication parameters for the Comport : 
  KEITHLEY2400 COMPORT : Define your communication port where the sourcemeter is connected (Default is : /dev/tty/USBO (Linux))
  KEITHLEY2400 BAUDRATE : DEfine the Baudrate of your communication protocol (Default is : 9600, the value has to corresponds to the Instrument settings)


## Measurement : 
- When you have defined all your parameters, you should turn on your sourcemeter, place your solar cell under the light and click "PLAY" in order to start the experiment. Voltages will be transmit to the circuit and the sourcemeter will record the output current from the solar cell. 

- You can choose the visualization node you prefer to plot your results after the measurements. 
  
- When you are done you can save the Flojoy interface in your computer, so you'll be able to use it again for other measurements. 