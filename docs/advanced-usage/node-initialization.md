# Flojoy Node Initialization - Enhancing Efficiency

In various scenarios, node operations require some form of initialization before runtime. A prominent example could be establishing a serial connection with Arduino via PySerial. Conventionally, such a connection takes approximately one second to initiate. This latency can pose a significant bottleneck, especially if the node requires that the connection is reopened each time it runs.

Fortunately, Flojoy presents an efficient solution to this challenge, providing a method to initialize any necessary objects.

## Using Flojoy's `node_initialization` Decorator

Flojoy's `node_initialization` decorator allows you to specify a function dedicated to initializing the required resources for a particular node operation. The output of this function is packaged within a `NodeInitContainer`, which is then fed into the parameters of the specific node function as `init_container`.

### Example

Consider the following example:

```python
import numpy as np
from flojoy import flojoy, OrderedPair, node_initialization, NodeInitContainer

@flojoy(node_type="default")
def LINSPACE(init_container: NodeInitContainer, start: float = 10, end: float = 0, step: int = 1000) -> OrderedPair:
    print(init_container.get())
    y = np.linspace(start, end, step)
    result = OrderedPair(x=y, y=y)
    return result

@node_initialization(for_node=LINSPACE)
def linspace_init():
    return "test"
```

In this example, the initialization function `linspace_init` is created using the `node_initialization` decorator, which specifies that the function will initialize resources for the `LINSPACE` node. The string `"test"` is returned from this initialization function and packaged within a `NodeInitContainer`.

During the runtime of the `LINSPACE` node, the `init_container`'s `get()` method extracts the content (in this case, "test") and prints it to the console. This operation exemplifies how Flojoy facilitates efficient runtime initialization, allowing node functions to access and utilize resources initialized beforehand.

Utilizing Flojoy's `node_initialization` decorator efficiently alleviates the need for repetitive and time-consuming initialization processes, resulting in enhanced performance and resource utilization. This method significantly augments the efficiency and throughput of node operations, paving the way for more streamlined and robust applications.