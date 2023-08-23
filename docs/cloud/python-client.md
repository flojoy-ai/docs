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

You are then ready to use the cloud. Here's a simple example showing storing and loading a DataFrame off the cloud: 

```python
# Storing a dc in the cloud.
x = np.ones((5, 5))
df = pd.DataFrame(x)
dcid = remote.store_dc(df, "DataFrame")

# Fetching a dc from the cloud.
my_data_container = remote.fetch_dc(dc_id=dcid['dc_id'])
dc = remote.to_python(dc=my_data_container)
print(type(dc))
print(dc)
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

The current supported types of `DataContainer` are as follows: 
`OrderedPair, OrderedTriple, DataFrame, Grayscale, Matrix, Scalar, Vector, Image`. Note that for `store_dc` and similar functions, the second argument must be included in this list (including captical letters).

For further usage examples see the notebook: [cloud.ipynb](/img/cloud/cloud.ipynb) (download warning).
