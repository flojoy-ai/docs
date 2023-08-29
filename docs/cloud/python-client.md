---
title: Python Client
---

## Installation

The Python client for the Flojoy cloud API is included in the Flojoy PyPi package.

To download the client ensure you have Python and Pip installed. Then run `pip install flojoy` to install the client and related requirments. 

## Usage

Before initializing the client you must have your api key saved.

The api key can be entered as a string or loaded from a file. Other Flojoy credentials are stored in the `USER/.flojoy/`. One example for storing your API key:

```python
import os

# Save key
with open(f"{os.path.expanduser('~')}/.flojoy/cloud_key.txt", 'w') as f:
    f.write('key_example')
```

You must initialize the client:

```python
from flojoy.flojoy_cloud import FlojoyCloud
import pandas as pd
import numpy as np
from PIL import Image
import os

# Load key
with open(f'{os.path.expanduser('~')}/.flojoy/cloud_key.txt', 'r') as f:
    apikey = f.read()

remote = FlojoyCloud(apikey=apikey)
```

You then must create a `measurement` before saving a `DataContainer`.

```python
response = remote.create_measurement(name="example_name", privacy="private")

meas_id = response['ref']
print(meas_id)
```

You are then ready to store data. Here's a simple example showing storing and loading a DataFrame off the cloud: 

```python
# storing a dc in a measurement
x = np.ones((5, 5))
df = pd.DataFrame(x)
dcid = remote.store_dc(df, "DataFrame", meas_id)

# fetching a dc from the cloud
my_data_container = remote.fetch_dc(dc_id=dcid['ref'])
dc = remote.to_python(dc=my_data_container)
print(type(dc), dc)
```

returning:

```
<class 'pandas.core.frame.DataFrame'>
   0  1  2  3  4
0  1  1  1  1  1
1  1  1  1  1  1
2  1  1  1  1  1
3  1  1  1  1  1
4  1  1  1  1  1
```

`dcid` is the identifier for the cloud based `DataContainer` here. This value is important in order to load the data later. `my_data_container` is the data still stored in the format used by the cloud. In order to return that data to a Pythonic data type use `remote.to_python(dc=my_data_container)`.

Note that to store data, the measurement ID must be used in `store_dc`. However, to load data with `fetch_dc`, only the datacontainer ID is needed.

The current supported types of `DataContainer` are as follows: 
`OrderedPair, OrderedTriple, DataFrame, Grayscale, Matrix, Scalar, Vector, Image`. Note that for `store_dc` and similar functions, the second argument must be included in this list (including capital letters).

For further usage examples see the notebook: [cloud.ipynb](/img/cloud/cloud.ipynb) (download warning).
