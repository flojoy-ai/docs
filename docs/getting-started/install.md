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
  - It may be worthwhile to create a virtual environment to use with Flojoy to ensure cross-module compatibility. You can find instruction on how to create a Python virtual env [here](https://docs.python.org/3.10/library/venv.html) (only for Mac/Unix)
- Node
  - `Nodejs` is required to run the primary application. You can see the installation instructions for `Nodejs` [here](https://nodejs.org/en/download/package-manager/).
- Redis (For Mac/Unix)
  - Redis is an open-source, in-memory data store used by Flojoy. It can be installed by the instructions [here](https://redis.io/docs/getting-started/installation/).
- Memurai (For Windows)
  - Memurai is an alternative of Redis for Windows platform. It can be downloaded and installed from official website [here](https://www.memurai.com/get-memurai)

<Tabs>
  <TabItem value="unix" label="Mac/Unix" default>
    To install Flojoy on UNIX:

1. [Clone the repo](https://github.com/flojoy-io/studio) with `--recursive` argument as follows: `git clone --recursive https://github.com/flojoy-io/studio.git`
2. CD into the project root `cd studio` 
3. Run `$ bash flojoy`

   - If you have virtual environment installed, you can provide the path to the virtualenv folder as follows:
      ```bash
        bash flojoy -v venv2 # venv2 is the name of the virtual environment folder.
      ```
   - You can provide optional argument `-r` which will shut down the existing redis server and spin up a fresh one
   - You can provide `-n` argument to skip installing Javascript packages.
   - You can provide `-p` argument to skip installing python packages. 
   - Optionally you can provide port number followed by `-P` argument to run backend server on a specific port.

:::info

There will be many terminal windows open after running the script. These correspond to the Django server, the RQ worker, and the React terminal. Do not panic!
:::
</TabItem>
<TabItem value="windows" label="Windows">
To install Flojoy on Windows:

1. Update your PowerShell to at least >=v7.0.0, you can install latest Powershell from [here](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows)

2. [Clone the repo](https://github.com/flojoy-io/studio) with `--recursive` argument as follows: `git clone --recursive https://github.com/flojoy-io/studio.git`

3. CD into the project root `cd studio`

4. Run `.\flojoy`
   - You can provide `-n` argument to skip installing Javascript packages, e.g `.\flojoy -n`.
   - You can provide `-p` argument to skip installing python packages. 
   - Optionally you can provide port number followed by `-P` argument to run backend server on a specific port.

:::info

There will be many terminal windows open after running the script. These correspond to the Django server, the RQ worker, and the React terminal. Do not panic!
:::
</TabItem>
</Tabs>
