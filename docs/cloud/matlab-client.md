---
title: MATLAB® client
---

## Installation

The MATLAB® client for the Flojoy cloud API is found [here](https://github.com/flojoy-ai/matlab). To download the client, either: 

1. Open a terminal at your desired directory and clone the repository: `git clone https://github.com/flojoy-ai/matlab.git`

2. Download the repository manually in `<> Code -> Download ZIP` and unzip into your desired directory.

![image](/img/cloud/download.png)
*<br/>To download the MATLAB® source code use `Download ZIP`*

## Usage

Example usage are included in [example.m](https://github.com/flojoy-ai/matlab/blob/main/examples.m) (with `example.mlx` as an equivalent 'live-script' version)

To initialize the cloud client run:

```matlab
addpath flojoy

import webread.*
import matlab.net.*
import flojoy.*

% To save your api key paste it in place of <key example> and uncomment 
% the next line. After the key is saved 'loadflojoyconfig' will load the key.

% saveflojoyconfig('<key_example>')

% Initialize the API and load the api key.
cloud = FlojoyCloud;
cloud.api_key = loadflojoyconfig;
```

You must then create a `measurement` to store data in.
```matlab
meas_id = cloud.create_measurement('example_name');
```

Then to save and load a simple dataset with the cloud: 

```matlab
% Simple example dataset to save.
data = [12 14; 5 12];
dc_type = "Matrix";

% Store a datacontainer in the created measurement folder.
dcid = cloud.store_dc(data, dc_type, meas_id);

% You can fetch a DataContainer without specifying the measurement ID.
dc = cloud.fetch_dc(dcid);
```

`dc_id` is the identifier for the cloud based `DataContainer` here. This value is important in order to load the data later. `cloud.fetch_dc` returns the data still stored in the format used by the cloud. In order to return that data to a Matlab data type use `cloud.to_matlab`.

Note that to store data, the measurement ID must be used in `store_dc`. However, to load data with `fetch_dc`, only the datacontainer ID is needed.

The current supported types of `DataContainer` are as follows: 
`OrderedPair, OrderedTriple, DataFrame, Grayscale, Matrix, Scalar, Vector, Image`. Note that for `store_dc` and similar functions, the `dc_type` argument must be included in this list (including capital letters).

For more in depth examples see [example.m](https://github.com/flojoy-ai/matlab/blob/main/examples.m).
