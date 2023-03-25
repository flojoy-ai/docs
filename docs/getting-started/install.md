---
sidebar_position: 1
id: install
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To install Flojoy, firstly there are a few prequisites needed on your machine.

- Python
  - A suitable python installation with `pip`. It may be worthwhile to create a virtual environment to use with Flojoy to ensure cross-module compatibility.
- Node
  - `Nodejs` is required to run the primary application. You can see the installation instructions for `Nodejs` [here](https://nodejs.org/en/download/package-manager/).
- Redis
  - Redis is an open-source, in-memory data store used by Flojoy. It can be installed by the instructions [here](https://redis.io/docs/getting-started/installation/).

<Tabs>
  <TabItem value="unix" label="Unix" default>
    To install Flojoy on UNIX:

1. [Clone the repo](https://github.com/flojoy-io/studio)
2. `cd` into the project root
3. Install the required python packages: `python3 -m pip install -U -r requirements.txt`
4. Install Javascript packages with the native package manager: `npm install`
5. Run `$ sh mac_startup.sh`

   - If you have `virtualenv` installed you can provide the path to the virtualenv folder as follows `sh mac_start_up.sh -v venv2`
   - You can provide optional argument `-r` which will shut down the existing redis server and spin up a fresh one
   - You can skip 3rd and 4th step by providing additional `-n` and `-p` arguments, where:
     - Given `-n` argument will install Javascript packages
     - Given `-p` argument will install python packages
   - Optionally you can provide port number followed by `-P` argument to run backend server on specific port.

:::info

There will be many terminal windows open after running the script. These correspond to the Django server, Redis, the RQ worker, and the React terminal. Do not panic!
:::
</TabItem>
<TabItem value="windows" label="Windows">
Currently, Flojoy can not be natively installed on Windows. However it can be run with the help of docker.

1. Make sure `Docker Desktop` is installed on your windows and running. You can install it from [Here](https://docs.docker.com/desktop/install/windows-install/)

2. [Clone the repo](https://github.com/flojoy-io/flojoy-desktop)

3. Open up Terminal/Powershall and `cd` to the project root

4. Run `docker compose up` to build, create and run docker containers

5. Open another tab of Terminal/Powershall and run `npm install`

6. Run `npm run start` to start React server

7. Go to [localhost:3000](http://localhost:3000) and start using Flojoy.

:::info
Please note that this may take some time to complete the initial docker build, but subsequent builds will be much faster.
:::
</TabItem>
<TabItem value="Gitpod" label="One Click Gitpod Setup">
Gitpod is a CDE ( Cloud Development Environment ) or VS-Code on cloud. Setup Flojoy on cloud with just a click, without any hassles!

1. Just Click **[On This Link](https://gitpod.io/#https://github.com/flojoy-io/flojoy-desktop)** that's literally It!!

2. There's no step 2, Enjoy!

:::info
- Make sure you have a gitpod account or you are logged into it
- If you are new to Gitpod go to **_gitpod>userSettings>integrations_** and enable github permissions to be able contribute to the code
:::
  </TabItem>

</Tabs>
