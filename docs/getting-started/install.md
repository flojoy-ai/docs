---
sidebar_position: 3
id: install
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<details>
<summary>Click if you don't already have Python 3 or Node.js installed 👇</summary>

To install Flojoy, firstly there are a few prequisites needed on your machine.

### Python >= 3.10

[Download](https://www.python.org/downloads/)

Python and `pip` are required to install and run the Flojoy nodes. Minimum version requirement for Python is `3.10` and `20.0` for `pip`. Open your Terminal and type ` python3 –version` to see if you already have Python installed and what the version number is.

### Node.js

[Download](https://nodejs.org/en/download/package-manager/)

Node.js is required to run Flojoy's app interface. Open your Terminal and type `node -v` to see if you already have Node.js installed.

</details>
  
<Tabs groupId="platform" queryString="platform">
  
<TabItem value="unix" label="Mac & Linux">
<div>

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
bash flojoy -v venv
```

</div>
</TabItem>

<TabItem value="windows" label="Windows">
<div>

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
python3.10 -m venv env
```

6. Finally, run:

```bash
.\flojoy -v env
```

</div>
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

- Error related to an npm package: Delete the node_modules folder then run `npm install` to reinstall all node packages
- Please ask for debug help on community.flojoy.io for help troubleshooting an installation error
