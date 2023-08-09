
# PM100USB

## Instrument Card

<div className="flex">

<div>

The PM100USB Power and Energy Meter Interface is compatible with all our C-Series photodiode, thermal, and pyroelectric sensors except for the ES408C Fast Pyroelectric Sensor. Our C-Type standard photodiode, slim photodiode, integrating sphere, and fiber sensors can collectively measure optical powers from 100 pW to 20 W. Our thermal power sensors measure optical powers from 10 µW to 200 W. Compatible C-Series pyroelectric energy sensors can measure energies from 10 µJ to 15 J and repetition rates up to 2 kHz. Note that the ES408C sensor for repetition rates up to 10 kHz, also available below, is not recommended for use with the PM100USB interface, which supports a maximum repetition rate of 3 kHz. Alternatively, other unamplified anode- or cathode-grounded photodiodes with up to 5 mA photocurrent, thermal elements with a maximum output voltage of 1 V, or energy sensors with voltage outputs from 100 mV to 100 V may be used.

This interface can be operated and powered by a PC via the mini-USB port. A readout rate of 300 samples per second allows active signal monitoring while the interface is in use.

</div>

<img width="256" src="https://v5.airtableusercontent.com/v1/19/19/1691539200000/3N7N-4ljud3NnwPkaCQ3MA/7dwEJj0SRD66uf4jzfrWqDlclXeIsLbw9-cDO0zfLFSnjpJGrBn43LzfRMSNo-zAmSccZ9jdGqDetYG3Jdwh3qQ0xKvlAEx1vR6VnG8723M/FBge12I3Owco97CPTADaklZwqX_fJcPP4jRNDSMouLI"/>

</div>

The PM100USB Power and Energy Meter Interface is compatible with all our C-Series photodiode, thermal, and pyroelectric sensors except for the ES408C Fast Pyroelectric Sensor. Our C-Type standard photodiode, slim photodiode, integrating sphere, and fiber sensors can collectively measure optical powers from 100 pW to 20 W. Our thermal power sensors measure optical powers from 10 µW to 200 W. Compatible C-Series pyroelectric energy sensors can measure energies from 10 µJ to 15 J and repetition rates up to 2 kHz. Note that the ES408C sensor for repetition rates up to 10 kHz, also available below, is not recommended for use with the PM100USB interface, which supports a maximum repetition rate of 3 kHz. Alternatively, other unamplified anode- or cathode-grounded photodiodes with up to 5 mA photocurrent, thermal elements with a maximum output voltage of 1 V, or energy sensors with voltage outputs from 100 mV to 100 V may be used.

This interface can be operated and powered by a PC via the mini-USB port. A readout rate of 300 samples per second allows active signal monitoring while the interface is in use.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

Thorlabs, Inc. is an American privately held optical equipment company headquartered in Newton, New Jersey. The company was founded in 1989 by Alex Cable, who serves as its current president and CEO. As of 2018, Thorlabs has annual sales of approximately $500 million. <a href="https://www.thorlabs.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 550.0</li>
</ul>
</details>

## Connect to the PM100USB in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Instrumentkit


```python
from instrumentkit import ThorlabsPM100USB

# Connect to the power meter
power_meter = ThorlabsPM100USB()

# Get information about the connected sensor
sensor = power_meter.sensor
print("Sensor Name:", sensor.name)
print("Sensor Serial Number:", sensor.serial_number)
print("Sensor Calibration Message:", sensor.calibration_message)
print("Sensor Type:", sensor.type)
print("Sensor Flags:", sensor.flags)

# Set the measurement configuration to power
power_meter.measurement_configuration = ThorlabsPM100USB.MeasurementConfiguration.power

# Read a measurement from the power meter
measurement = power_meter.read()
print("Measurement:", measurement)
```

This script first imports the `ThorlabsPM100USB` class from the `instrumentkit` module. It then creates an instance of the `ThorlabsPM100USB` class to connect to the power meter.

The script retrieves information about the connected sensor using the `sensor` property of the power meter instance. It prints out various properties of the sensor, such as its name, serial number, calibration message, type, and flags.

Next, the script sets the measurement configuration of the power meter to "power" using the `measurement_configuration` property. This configures the power meter to measure power values.

Finally, the script reads a measurement from the power meter using the `read` method. The measurement is returned as a `pint.Quantity` object, which represents a numerical value with associated units. The script prints out the measurement value.

Note that this script assumes that the Instrumentkit library is already installed and that the power meter is connected to the computer.

### Pymeasure


```python
import logging
from pymeasure.instruments import Instrument
from pymeasure.instruments.validators import truncated_range

log = logging.getLogger(__name__)
log.addHandler(logging.NullHandler())


class ThorlabsPM100USB(Instrument):
    """Represents Thorlabs PM100USB powermeter."""

    def __init__(self, adapter, name="ThorlabsPM100USB powermeter", **kwargs):
        super().__init__(adapter, name, **kwargs)
        self._set_flags()

    wavelength_min = Instrument.measurement(
        "SENS:CORR:WAV? MIN", "Measure minimum wavelength, in nm"
    )

    wavelength_max = Instrument.measurement(
        "SENS:CORR:WAV? MAX", "Measure maximum wavelength, in nm"
    )

    @property
    def wavelength(self):
        """Control the wavelength in nm."""
        value = self.values("SENSE:CORR:WAV?")[0]
        return value

    @wavelength.setter
    def wavelength(self, value):
        """Wavelength in nm."""
        if self.wavelength_settable:
            # Store min and max wavelength to only request them once.
            if not hasattr(self, "_wavelength_min"):
                self._wavelength_min = self.wavelength_min
            if not hasattr(self, "_wavelength_max"):
                self._wavelength_max = self.wavelength_max

            value = truncated_range(
                value, [self._wavelength_min, self._wavelength_max]
            )
            self.write(f"SENSE:CORR:WAV {value}")
        else:
            raise AttributeError(
                f"{self.sensor_name} does not allow setting the wavelength."
            )

    @property
    def power(self):
        """Measure the power in W."""
        if self.is_power_sensor:
            return self.values("MEAS:POW?")[0]
        else:
            raise AttributeError(f"{self.sensor_name} is not a power sensor.")

    @property
    def energy(self):
        """Measure the energy in J."""
        if self.is_energy_sensor:
            return self.values("MEAS:ENER?")[0]
        else:
            raise AttributeError(
                f"{self.sensor_name} is not an energy sensor."
            )

    def _set_flags(self):
        """Get sensor info and write flags."""
        response = self.values("SYST:SENSOR:IDN?")
        if response[0] == "no sensor":
            raise OSError("No sensor connected.")
        self.sensor_name = response[0]
        self.sensor_sn = response[1]
        self.sensor_cal_msg = response[2]
        self.sensor_type = response[3]
        self.sensor_subtype = response[4]
        _flags_str = response[5]

        # interpretation of the flags, see p. 49 of the manual:
        # https://www.thorlabs.de/_sd.cfm?fileName=17654-D02.pdf&partNumber=PM100D

        # Convert to binary representation and pad zeros to 9 bit for sensors
        # where not all flags are present.
        _flags_str = format(int(_flags_str), "09b")
        # Reverse the order so it matches the flag order from the manual, i.e.
        # from decimal values from 1 to 256.
        _flags_str = _flags_str[::-1]

        # Convert to boolean.
        self.flags = [x == "1" for x in _flags_str]

        # setting the flags; _dn are unused; decimal values as comments
        (
            self.is_power_sensor,  # 1
            self.is_energy_sensor,  # 2
            _d4,  # 4
            _d8,  # 8
            self.response_settable,  # 16
            self.wavelength_settable,  # 32
            self.tau_settable,  # 64
            _d128,  # 128
            self.has_temperature_sensor,  # 256
        ) = self.flags
```

This script defines a class `ThorlabsPM100USB` that represents the Thorlabs PM100USB power meter. It inherits from the `Instrument` class provided by Pymeasure.

The class has various properties and methods to interact with the power meter. Here's a brief explanation of each:

- `wavelength_min` and `wavelength_max` are measurement properties that retrieve the minimum and maximum wavelength values supported by the power meter, respectively.

- `wavelength` is a property that allows you to control the wavelength in nm. It retrieves the current wavelength value from the power meter and can be set to a new value.

- `power` is a property that measures the power in W. It retrieves the power value from the power meter.

- `energy` is a property that measures the energy in J. It retrieves the energy value from the power meter.

- `_set_flags` is a method that retrieves sensor information and writes flags based on the response from the power meter.

To use this script, you would need to create an instance of the `ThorlabsPM100USB` class and provide the appropriate adapter for communication with the power meter.

