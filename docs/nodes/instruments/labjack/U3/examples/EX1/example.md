`The example above is showing a Flojoy app which allow you to use the LABJACKU3 and the loop nodes in order to record temperature measurements
and update them with time. Before running the app you'll need to connect all your devices following these rules : 

### Connections :

-Connect the LABJACKU3 device to your computer with a USB cable. 
-Connect the temperature sensor to the Labjacku3 device:  
-If you use the LM34Caz/Nopb you'll need to add a small resistor between the Vout and the LabJack device to the circuit to protect the sensor (see pictures) :

PIN connections : (Left LabJackU3 and right Sensors pin) : 
-VS --> +Vs pin (Power supply from the computer transferred to the sensor with this connection)
-Ground --> Ground Pin 
-Ground --> Resistor Pin (See photos)
-FI0 (For your first sensor) --> Vout pin on the sensor (Voltage are received with these FIi port where i goes from 0 to 7)

### Parameters :

After connecting your devices, you need to set up your parameters and your visualization node before running the app :

- LABJACKU3 parameter "Numbers" needs to match the number of temperature sensors connected to your LabJackU3 device.

- Set the parameters you want for the LOOP and GOTO nodes : Delay, Number of loops, etc,.. (See LOOP tutorial for more info) 

### Visualisation :

- Choose your Visualisation node that fits your project to display the temperature measurements (Histogram, Bar, Line, etc).  

