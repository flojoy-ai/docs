---
sidebar_position: 1
id: getting-started
title: Getting Started
---

# Flojoy

## What is it?

Flojoy is an open-source desktop app for visual Python scripting . Using a simple drag-drop interface, pre-written Python scripts are wired together as nodes in a flow chart. These flow charts can be built up into powerful Python sapps for ETL, DAQ, AI, CI, data visualization, and simulation. Advanced Python practioners can add their own custom Python scripts as nodes in the flow chart, which can be published and reused by other Flojoy users.

Free & MIT licensed forever.

Scroll to bottom for screenshots.

## How to run this thing (Mac/Linux only)

1. Clone the repo
1. Make sure that you have Python, Redis, and Node already installed
1. `cd` into the project root
1. Install the required python packages: `pip install -r requirements.txt`
1. Install npm packages: `npm install`
1. Run `$ sh mac_startup.sh` (Flojoy does not run on Windows yet)

   - If you have `virtualenv` installed you can provide the path to the virtualenv folder as follows `sh mac_start_up.sh -v venv2`
   - You can provide optional argument `-r` which will shut down the existing redis server and spin up a fresh one


## Visual scripting hall of fame (previous work of note)

- [Ryven - Flow-based visual scripting for Python](https://ryven.org/) - Heroic open-source effort by a single grad student
- [Datablocks](https://datablocks.pro/) - Same idea as Flojoy, but code blocks are JavaScript instead of Python
- [Apache Airflow Graph View](https://airflow.apache.org/docs/apache-airflow/stable/ui.html#graph-view). Famous project with some nice DAG visualizers, but requires coding and significant learning investment. Flojoy aspires to enable non-coders with similar Python-based ETL capabilities, within minutes of first using the app.
- Alteryx - de facto commercial product for visual ETL scripting
- LabVIEW - de facto commercial product for visual DAQ scripting
- AWS Step Function - AWS visual scripting product for ETL and AI
- Azure ML Studio - Azure visual scripting product for AI and ML
- [NodeRed](https://nodered.org/) - "Node-RED is a programming tool for wiring together hardware devices, APIs and online services"

## Roadmap for interested contributors

- [ ] There are no tests or CI 😬

- [ ] The app doesn't work on Windows

- [ ] Flojoy currently uses an interval in App.js to ping the backend every second with an HTTP request and check the server state (such as whether the job queue is finished). This would be ideally suited for websockets and the `ws` library, allowing real-time feedback on which Python jobs are running and pushing (rather than polling) the result when complete

- [ ] It wcouldould be nice to have a "Load an example" menu item in the flow chart tab, with a showcase of simple and fun VPS examples for AI, DAQ, ETL, image processing, simulation, etc

- [ ] More delightful installation UX, such as with Electron

## Architecture

1. Flojoy is a single-page React app that hinges on the https://reactflow.dev/ open-source library. Creating the Flow Chart and control dashboard is done entirely in JavaScript (React), without any interaction with a backend service.
2. React Flow serializes flow chart layout and metadata as JSON. When an app user clicks the "Run Visual Python Script" button, this JSON payload is sent to a Node (Express) server `server.js` through the `/wfc` endpoint ("Write Flow Chart"). Express listens on port 5000, so that `create-react-app` can listen on port 3000 for development purposes (hot reloading). The flow chart object is saved in local storage for convenient access throughout the app.
3. `server.js` writes the flow chart JSON object to Redis memory, then calls a Python script ([watch.py](https://github.com/jackparmer/flojoy/tree/main/PYTHON/WATCH) that pulls the flowchart object from Redis and munges it into a `networkx` object. (There's a Jupyter notebook in the PYTHON folder that messily illustrates transmorgifying React Flow JSON into a `networkx` object).
4. As a `networkx` object, it's easy to perform a topological sort to determine the order of Python script execution. The Python scripts corresponding to the React Flow nodes are in the [FUNCTIONS](https://github.com/jackparmer/flojoy/tree/main/PYTHON/FUNCTIONS) folder.
5. In topological order, the Python functions are queued as jobs in Redis using the RQ (Redis Queue) library - a lighter weight alternative to Celery. As the jobs are queued, attention is paid to which job inputs depend on other job outputs. RQ makes this easy with its `depends_on` kwarg (in the `enqueue` function).
6. When Python jobs finish, watch.py sets a flag in Redis. The React app polls the Express server (`server.js`) once per second to see if this flag is set. If it is, then `server.js` resets the flag and returns the script results to the frontend where they are visualized in the control panel, logs tab, and flow chart node modals.

## Screenshots!

#### A Visual Python Script (VPS) that generates a sine wave, adds noise, and visualizes the results in 2 charts

![image](https://images2.imgbox.com/0c/6c/elr4j5jv_o.jpg)

#### Light mode - the same VPS in Flojoy's light mode

![image](https://images2.imgbox.com/35/2f/Ha6HRaNx_o.jpg)

#### Control panel for building apps the control and visualize node parameters and outputs

![image](https://images2.imgbox.com/03/00/9HK5YVGO_o.jpg)

#### Python code for the SINE node in the above VPS

![image](https://images2.imgbox.com/13/65/idBfYSLO_o.jpg)
