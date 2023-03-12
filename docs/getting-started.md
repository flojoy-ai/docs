---
sidebar_position: 1
id: getting-started
title: What are we
---

# Flojoy

Flojoy is an open-source desktop app for visual Python scripting. 

Using a simple drag-drop interface, pre-written Python scripts are wired together as nodes in a flow chart. These flow charts can be built up into powerful Python apps for **ETL, DAQ, AI, and simulation**. Advanced Python practioners can add their own custom Python scripts as nodes in the flow chart, which can be published and reused by other Flojoy users.

Free & MIT licensed.

Scroll to the bottom for screenshots.

## Comparable products and projects

- [Ryven - Flow-based visual scripting for Python](https://ryven.org/) - Heroic open-source effort by a single grad student
- [Datablocks](https://datablocks.pro/) - Similar idea tp Flojoy, but code blocks are JavaScript instead of Python
- [Apache Airflow Graph View](https://airflow.apache.org/docs/apache-airflow/stable/ui.html#graph-view). Famous project with some nice DAG visualizers, but requires coding and significant learning investment. Flojoy aspires to enable non-coders with similar Python-based ETL capabilities, within seconds of first using the app.
- Alteryx - de facto commercial product for visual ETL scripting
- LabVIEW - de facto commercial product for visual DAQ scripting
- AWS Step Function - AWS visual scripting product for ETL and AI
- Azure ML Studio - Azure visual scripting product for AI and ML
- [NodeRed](https://nodered.org/) - "Node-RED is a programming tool for wiring together hardware devices, APIs and online services"

## Roadmap to release

- [ ] There are no tests or CI 😬
- [ ] Respect eslint
- [ ] The app does not yet work on Windows
- [ ] Flojoy currently uses an interval in App.js to ping the backend every second with an HTTP request and check the server state (such as whether the job queue is finished). This would be ideally suited for websockets and the `ws` library, allowing real-time feedback on which Python jobs are running and pushing (rather than polling) the result when complete
- [ ] A builtiin showcase of pedagogical, simple, and fun examples for AI, DAQ, ETL, image processing, simulation, etc

## Architecture

1. Flojoy is a single-page React app that hinges on the https://reactflow.dev/ open-source library. Creating the Flow Chart and control dashboard is done entirely in JavaScript (React), without any interaction with a backend service.
2. React Flow serializes flow chart layout and metadata as JSON. When an app user clicks the "Run Visual Python Script" button, this JSON payload is sent to a Node (Express) server `server.js` through the `/wfc` endpoint ("Write Flow Chart"). Express listens on port 5000, so that `create-react-app` can listen on port 3000 for development purposes (hot reloading). The flow chart object is saved in local storage for convenient access throughout the app.
3. `server.js` writes the flow chart JSON object to Redis memory, then calls a Python script ([watch.py](https://github.com/jackparmer/flojoy/tree/main/PYTHON/WATCH) that pulls the flowchart object from Redis and munges it into a `networkx` object. (There's a Jupyter notebook in the PYTHON folder that messily illustrates transmorgifying React Flow JSON into a `networkx` object).
4. As a `networkx` object, it's easy to perform a topological sort to determine the order of Python script execution. The Python scripts corresponding to the React Flow nodes are in the [FUNCTIONS](https://github.com/jackparmer/flojoy/tree/main/PYTHON/FUNCTIONS) folder.
5. In topological order, the Python functions are queued as jobs in Redis using the RQ (Redis Queue) library - a lighter weight alternative to Celery. As the jobs are queued, attention is paid to which job inputs depend on other job outputs. RQ makes this easy with its `depends_on` kwarg (in the `enqueue` function).
6. When Python jobs finish, watch.py sets a flag in Redis. The React app polls the Express server (`server.js`) once per second to see if this flag is set. If it is, then `server.js` resets the flag and returns the script results to the frontend where they are visualized in the control panel, logs tab, and flow chart node modals.

## Screenshots!

![image](https://images2.imgbox.com/35/2f/Ha6HRaNx_o.jpg)
*A Visual Python script that generates a sine wave, adds noise, and visualizes the results in 2 charts*

