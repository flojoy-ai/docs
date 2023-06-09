---
sidebar_position: 3
id: install
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To install Flojoy, firstly there are a few prequisites needed on your machine.

## Python

A suitable python installation with `pip`. Minimum version requirement for Python is `3.10` and `20.0` for `pip`. You can download Python for your OS from [here](https://www.python.org/downloads/)

## Node

`Nodejs` is required to run the primary application. You can see the installation instructions for `Nodejs` [here](https://nodejs.org/en/download/package-manager/).

<Tabs groupId="platform" queryString="platform">
  <TabItem value="unix" label="Mac & Linux">
    To install Flojoy on Mac & Linux:

1. Install Redis, an open-source, in-memory data store used by Flojoy:

   ```bash
   brew install redis
   ```

   ([Redis installation reference](https://redis.io/docs/getting-started/installation/))

2. [Clone the repo](https://github.com/flojoy-io/studio) with `--recursive` argument as follows:

   ```bash
   git clone --recursive https://github.com/flojoy-io/studio.git
   ```

3. Navigate into the project root:

   ```bash
   cd studio
   ```

4. We highly recommend creating a Python virtual environment inside the `studio` folder by running the command:

   ```bash
   python3.10 -m venv env
   ```

5. Finally, run:
   ```bash
   sh flojoy -v env
   ```

</TabItem>

 <TabItem value="windows" label="Windows">
To install Flojoy on Windows:

1. [Install Memurai](https://www.memurai.com/get-memurai), an alternative to Redis for Windows

2. [Update your PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows) to at least >=v7.0.0

3. [Clone the repo](https://github.com/flojoy-io/studio) with `--recursive` argument as follows:

   ```bash
   git clone --recursive https://github.com/flojoy-io/studio.git
   ```

4. Navigate into the project root:

   ```bash
   cd studio
   ```

5. We highly recommend creating a Python virtual environment inside the `studio` folder by running the command:

   ```bash
   python3.10 -m venv env`
   ```

6. Finally, run:

   ```bash
   .\flojoy -v env
   ```

</TabItem>
</Tabs>

<details>
<summary>Optional flags</summary>
  <ul>
    <li><code>-v</code> provides the path to the Python virtual environment</li>
    <li><code>-r</code> shuts down the existing redis server and spin up a fresh one</li>
    <li><code>-n</code> skips installing the Node packages in package.json</li>
    <li><code>-p</code> skips installing the Python packages in requirements.txt</li>
    <li><code>-P</code> runs the backend server on a specific port</li>
  </ul>
</details>

---

## Common gotchya's

- Error related to an npm package: Delete the node_modules folder then `run npm install` to reinstall all node packages
- Please ask for debug help on community.flojoy.io for help troubleshooting an installation error
