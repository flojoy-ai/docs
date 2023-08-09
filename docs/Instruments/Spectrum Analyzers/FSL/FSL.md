
# FSL

## Instrument Card

<div className="flex">

<div>

The R&S FSL series Spectrum Analyzer – are a lightweight and compact range of spectrum analyzer for cost-conscious users who want the functionality of high-end instruments.

These analyzers are ideal for a large number of applications in development, service and production.

</div>

<img src={require("./FSL.jpg").default} style={{width:"256px", height: "200px"}} />

</div>

The R&S FSL series Spectrum Analyzer – are a lightweight and compact range of spectrum analyzer for cost-conscious users who want the functionality of high-end instruments.

These analyzers are ideal for a large number of applications in development, service and production.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

Rohde & Schwarz GmbH & Co KG is an international electronics group specializing in the fields of electronic test equipment, broadcast & media, cybersecurity, radiomonitoring and radiolocation, and radiocommunication. <a href="https://www.rohde-schwarz.com/ca/home_48230.html">Website</a>.

<ul>
  <li>Headquarters: Munich, Germany</li>
  <li>Yearly Revenue (millions, USD): 2500.0</li>
</ul>
</details>

## Connect to the FSL in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Pymeasure


```python
import logging
from pymeasure.instruments.validators import strict_discrete_set
from pymeasure.instruments import Instrument

log = logging.getLogger(__name__)
log.addHandler(logging.NullHandler())


def _number_or_auto(value):
    # helper for the bandwidth setting
    if isinstance(value, str) and value.upper() == "AUTO":
        return ":AUTO ON"
    else:
        # There is no space in the set commands, so we have to add it
        return " " + str(value)


class FSL(Instrument):
    """
    Represents a Rohde&Schwarz FSL spectrum analyzer.

    All physical values that can be set can either be as a string of a value
    and a unit (e.g. "1.2 GHz") or as a float value in the base units (Hz,
    dBm, etc.).
    """

    def __init__(self, adapter, name="Rohde&Schwarz FSL", **kwargs):
        super().__init__(
            adapter, name, includeSCPI=True, **kwargs
        )

    # Frequency settings ------------------------------------------------------

    freq_span = Instrument.control(
        "FREQ:SPAN?",
        "FREQ:SPAN %s",
        "Frequency span in Hz.",
    )

    freq_center = Instrument.control(
        "FREQ:CENT?",
        "FREQ:CENT %s",
        "Center frequency in Hz.",
    )

    freq_start = Instrument.control(
        "FREQ:STAR?",
        "FREQ:STAR %s",
        "Start frequency in Hz.",
    )

    freq_stop = Instrument.control(
        "FREQ:STOP?",
        "FREQ:STOP %s",
        "Stop frequency in Hz.",
    )

    attenuation = Instrument.control(
        "INP:ATT?",
        "INP:ATT %s",
        "Attenuation in dB.",
    )

    res_bandwidth = Instrument.control(
        "BAND:RES?",
        # There is no space between RES and %s on purpose, see _number_or_auto.
        "BAND:RES%s",
        "Resolution bandwidth in Hz. Can be set to 'AUTO'",
        set_process=_number_or_auto,
    )

    video_bandwidth = Instrument.control(
        "BAND:VID?",
        "BAND:VID%s",
        "Video bandwidth in Hz. Can be set to 'AUTO'",
        set_process=_number_or_auto,
    )

    # Sweeping ----------------------------------------------------------------

    sweep_time = Instrument.control(
        "SWE:TIME?",
        # No space between TIME and %s on purpose, see _number_or_auto.
        "SWE:TIME%s",
        "Sweep time in s. Can be set to 'AUTO'.",
        set_process=_number_or_auto,
    )

    continuous_sweep = Instrument.control(
        "INIT:CONT?",
        "INIT:CONT %s",
        "Continuous (True) or single sweep (False)",
        validator=strict_discrete_set,
        values={True: 1, False: 0},
        map_values=True,
    )

    def single_sweep(self):
        """Perform a single sweep with synchronization."""
        self.write("INIT; *WAI")

    def continue_single_sweep(self):
        """Continue with single sweep with synchronization."""
        self.write("INIT:CONM; *WAI")

    # Traces ------------------------------------------------------------------

    def read_trace(self, n_trace=1):
        """
        Read trace data.

        :param n_trace: The trace number (1-6). Default is 1.
        :return: 2d numpy array of the trace data, [[frequency], [amplitude]].
        """
        y = np.array(self.values(f"TRAC{n_trace}? TRACE{n_trace}"))
        x = np.linspace(self.freq_start, self.freq_stop, len(y))
        return np.array([x, y])

    trace_mode = Instrument.control(
        "DISP:TRAC:MODE?",
        "DISP:TRAC:MODE %s",
        "Trace mode ('WRIT', 'MAXH', 'MINH', 'AVER' or 'VIEW')",
        validator=strict_discrete_set,
        values=["WRIT", "MAXH", "MINH", "AVER", "VIEW"],
    )

    # Markers -----------------------------------------------------------------

    def create_marker(self, num=1, is_delta_marker=False):
        """
        Create a marker.

        :param num: The marker number (1-4)
        :param is_delta_marker: True if the marker is a delta marker, default
            is False.
        :return: The marker object.
        """
        return self.Marker(self, num, is_delta_marker)

    class Marker:
        def __init__(self, instrument, num, is_delta_marker):
            """
            Marker and Delta Marker class.

            :param instrument: The FSL instrument.
            :param num: The marker number (1-4)
            :param is_delta_marker: True if the marker is a delta marker,
                defaults to False.
            """
            self.instrument = instrument
            self.is_delta_marker = is_delta_marker
            # Building the marker name for the commands.
            if self.is_delta_marker:
                # Smallest delta marker number is 2.
                self.name = "DELT" + str(max(2, num))
            else:
                self.name = "MARK"
                if num > 1:
                    # Marker 1 doesn't get a number.
                    self.name = self.name + str(num)

            self.activate()

        def read(self):
            return self.instrument.read()

        def write(self, command):
            self.instrument.write(f"CALC:{self.name}:{command}")

        def ask(self, command):
            return self.instrument.ask(f"CALC:{self.name}:{command}")

        def values(self, command, **kwargs):
            """
            Reads a set of values from the instrument through the adapter,
            passing on any keyword arguments.
            """
            return self.instrument.values(
                f"CALC:{self.name}:{command}", **kwargs
            )

        def activate(self):
            """Activate a marker."""
            self.write("STAT ON")

        def disable(self):
            """Disable a marker."""
            self.write("STAT OFF")

        x = Instrument.control(
            "X?", "X %s", "Position of marker on the frequency axis in Hz."
        )

        y = Instrument.control(
            "Y?", "Y %s", "Amplitude of the marker position in dBm."
        )

        peak_excursion = Instrument.control(
            "PEXC?",
            "PEXC %s",
            "Peak excursion in dB.",
        )

        def to_trace(self, n_trace=1):
            """
            Set marker to trace.

            :param n_trace: The trace number (1-6). Default is 1.
            """
            self.write(f"TRAC {n_trace}")

        def to_peak(self):
            """Set marker to highest peak within the span."""
            self.write("MAX")

        def to_next_peak(self, direction="right"):
            """
            Set marker to next peak.

            :param direction: Direction of the next peak ('left' or 'right' of
                the current position).
            """
            self.write(f"MAX:{direction}")

        def zoom(self, value):
            """
            Zoom in to a frequency span or by a factor.

            :param value: The value to zoom in by. If a number is passed it is
                interpreted as a factor. If a string (number with unit) is
                passed it is interpreted as a frequency span.
            """
            self.write(f"FUNC:ZOOM {value}; *WAI")
```

This script defines a class `FSL` that represents a Rohde&Schwarz FSL spectrum analyzer. It provides methods and properties to control various settings of the spectrum analyzer, such as frequency settings, attenuation, bandwidth, sweeping, traces, and markers.

To use this script, you need to have Pymeasure installed. You can then create an instance of the `FSL` class and use its methods and properties to control the spectrum analyzer. For example:

```python
from pymeasure.adapters import VISAAdapter

# Create a VISA adapter for communication with the instrument
adapter = VISAAdapter("TCPIP::192.168.1.1::INSTR")

# Create an instance of the FSL class
fsl = FSL(adapter)

# Set the frequency span to 1 GHz
fsl.freq_span = "1 GHz"

# Set the center frequency to 2 GHz
fsl.freq_center = "2 GHz"

# Perform a single sweep
fsl.single_sweep()

# Read the trace data from trace 1
trace_data = fsl.read_trace(1)
print(trace_data)
```

This script demonstrates how to connect to the FSL spectrum analyzer, set the frequency span and center frequency, perform a single sweep, and read the trace data from trace 1. You can modify the script to suit your specific needs and control other settings of the spectrum analyzer.

