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

Python and `pip` are required to install and run the Flojoy nodes. The minimum version requirement for Python is `3.10` and `20.0` for `pip`.

Open your Terminal and type `python3 –version` to see if you already have Python installed and what the version number is.

### Node.js

[Download](https://nodejs.org/en/download/package-manager/)

Node.js is required to run Flojoy's app interface.

Open your Terminal and type `node -v` to see if you already have Node.js installed.

</details>

### Direct Install

Coming soon... You will be able to download Flojoy Studio directly without interacting with the command line.

### Install with CLI command

<Tabs groupId="platform" queryString="platform">
  
<TabItem value="windows" label="Windows">
<div>

Run the following installation PowerShell script:

```bash
pwsh -Command "iwr https://docs.flojoy.ai/scripts/install.ps1 -useb | iex"
```

If you encounter an error saying that the `pwsh` command is not found, `powershell` can be used instead, though we recommend [installing the latest version of PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows).

Flojoy Studio will open automatically after installation.

The next time that you wish to run Studio, simply navigate to the `studio` folder and run:

```bash
.\flojoy -v venv
```

<details>
<summary>Advanced: Install manually from source</summary>

1. <a href="https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows">Update your PowerShell</a> to at least >= v7.0.0.

2. [Clone the repository](https://github.com/flojoy-io/studio) with the `--recursive` argument as follows:

```bash
git clone --recursive https://github.com/flojoy-io/studio.git
```

3. Navigate into the project root:

```bash
cd studio
```

4. We highly recommend creating a Python virtual environment inside the `studio` folder by running the command:

```bash
python3.10 -m venv venv
```

5. Finally, run:

```bash
.\flojoy -v venv
```

Optional flags:

<ul>
  <li><code>-v</code> provides the path to the Python virtual environment</li>
  <li><code>-n</code> skips installing the Node packages in package.json</li>
  <li><code>-p</code> skips installing the Python packages in requirements.txt</li>
  <li><code>-P</code> runs the backend server on a specific port</li>
  <li><code>-s</code> To <b>NOT</b> update submodules</li>
  <li><code>-S</code> To <b>NOT</b> enable Sentry</li>
  <li><code>-T</code> To enable Telemetry</li>
  <li><code>-d</code> To enable debug mode for backend</li>
</ul>

</details>

</div>
</TabItem>
<TabItem value="unix" label="Mac & Linux">
<div>

Run the installation shell script:

```bash
curl -L https://docs.flojoy.ai/scripts/install.sh | sh
```

Flojoy Studio will open automatically after installation.

The next time that you wish to run Studio, simply navigate to the `studio` folder and run:

```bash
flojoy -v venv
```

<details>
<summary>Advanced: Install manually from source</summary>

1. <a href="https://github.com/flojoy-io/studio">Clone the repository</a> with the <code>--recursive</code> flag as follows:

```bash
git clone --recursive https://github.com/flojoy-io/studio.git
```

2. Navigate into the project root:

```bash
cd studio
```

3. We highly recommend creating a Python virtual environment inside the `studio` folder by running the command:

```bash
python3.10 -m venv venv
```

5. Finally, run:

```bash
bash flojoy -v venv
```

Optional flags:

<ul>
  <li><code>-v</code> provides the path to the Python virtual environment</li>
  <li><code>-n</code> skips installing the Node packages in package.json</li>
  <li><code>-p</code> skips installing the Python packages in requirements.txt</li>
  <li><code>-P</code> runs the backend server on a specific port</li>
  <li><code>-s</code> To <b>NOT</b> update submodules</li>
  <li><code>-S</code> To <b>NOT</b> enable Sentry</li>
  <li><code>-T</code> To enable Telemetry</li>
  <li><code>-d</code> To enable debug mode for backend</li>
</ul>

</details>

</div>
</TabItem>

</Tabs>
