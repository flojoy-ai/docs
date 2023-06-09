---
sidebar_position: 3
id: install
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To install Flojoy, firstly there are a few prequisites needed on your machine.

- Python
  - A suitable python installation with `pip`. Minimum version requirement for Python is `3.10` and `20.0` for `pip`. You can download Python for your OS from [here](https://www.python.org/downloads/)
- Node
  - `Nodejs` is required to run the primary application. You can see the installation instructions for `Nodejs` [here](https://nodejs.org/en/download/package-manager/).

<Tabs groupId="platform" queryString="platform">
  <TabItem value="unix" label="Mac & Linux">
    To install Flojoy on Mac & Linux:

1. Install Redis, an open-source, in-memory data store used by Flojoy. It can be installed by the instructions [here](https://redis.io/docs/getting-started/installation/).
    
2. [Clone the repo](https://github.com/flojoy-io/studio) with `--recursive` argument as follows: `git clone --recursive https://github.com/flojoy-io/studio.git`
    
3. CD into the project root `cd studio` 

4. We highly recommend creating a Python virtual environment inside the `studio` folder by running the command `python3.10 -m venv env`.   

5. Finally, run `sh flojoy -v env`        
   - If you have virtual environment installed, the path to the virtualenv folder is provided as follows:
      ```bash
        sh flojoy -v venv # venv is the name of the virtual environment folder.
      ```
   - If you're not using a virtual environment, simply run `sh flojoy`
   - Optional argument `-r` shuts down the existing redis server and spin up a fresh one
   - Optional argument `-n` skips installing the Node packages in package.json
   - Optional argument `-p` skips installing the Python packages in requirements.txt
   - Optional argument `-P` runs the backend server on a specific port

</TabItem>
<TabItem value="windows" label="Windows">
To install Flojoy on Windows:

1. Install Memurai, an alternative to Redis for the Windows platform. It can be downloaded for free [here](https://www.memurai.com/get-memurai)
  
2. Update your PowerShell to at least >=v7.0.0, you can install latest Powershell from [here](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows)

3. [Clone the repo](https://github.com/flojoy-io/studio) with `--recursive` argument as follows: `git clone --recursive https://github.com/flojoy-io/studio.git`

4. Navigate into the project root with `cd studio`
  
5. We highly recommend creating a Python virtual environment inside the `studio` folder by running the command `python3.10 -m venv env`.

6. Finally, run `.\flojoy -v env`
   - `-v` is to specify the virtual environment that you created in Step 5. If you didn't create a virtual environment, you can simply run `.\flojoy`
   - You can provide `-n` argument to skip installing Javascript packages, e.g `.\flojoy -n`.
   - You can provide `-p` argument to skip installing python packages. 
   - Optionally you can provide port number followed by `-P` argument to run backend server on a specific port.

</TabItem>
</Tabs>
