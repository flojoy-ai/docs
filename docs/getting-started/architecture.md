---
sidebar_position: 2
id: architecture
title: Architecture
---

<img width="606" alt="image" src="https://user-images.githubusercontent.com/1865834/228071258-418c7a14-68a9-4277-ab6b-a798f0889d09.png" />

### Docker

1. Flojoy uses Docker to containerize the entire backend. Its Docker setup is composed of three files: `docker-compose-base.yaml`, `docker-compose-prod.yaml`, and `docker-compose.yaml`.
2. It has a base image for all the Docker images that only builds when something is pushed to the main branch and is pushed to Docker Hub. `docker-compose-prod` is also built when something is pushed to the main branch and pushed to Docker Hub. `docker-compose-prod` is only used for the Electron app.
3. `docker-compose` is used to build images on every GitHub CI run, as well as when running Docker locally in development mode. This pulls all the images from Docker hub that were built from `docker-compose-base` as their base image, and builds images based on current existing changes.

### CI/CD

1. Flojoy uses a CI/CD pipeline to automate the development, testing, and deployment processes. 
2. CI runs on every pull request and code pushed to the development branch. It builds Docker images from the `docker-compose` file, and runs all the unit and end-to-end tests.
3. CD workflow only runs when some codes are pushed to the main branch. It builds Docker images from `docker-compose-base` and `docker-compose-prod` as well. It also builds Electron distributions when a tag is pushed to the main branch.

### Data flow

1. Flojoy is a single-page React app that hinges on the https://reactflow.dev/ open-source library. Creating the Flow Chart and control dashboard is done entirely in JavaScript (React), without any interaction with a backend service.
2. React Flow serializes flow chart layout and metadata as JSON. When an app user clicks on the play button, the Front-End sends node metadata to Django, which processes that JSON data and enqueues a watchdog function to the rq worker.
3. Flojoy has two primary rq workers: `flojoy-watch` and `flojoy`. Where `flojoy-watch` runs the watchdog function, and the other one is for nodes. Django enqueues watchdog to the watch rq worker, and eventually, rq worker executes that watchdog function.
4. The watchdog function then processes further and enqueues nodes to corresponding rq worker in respect to their execution order. 
5. Flojoy has its own python library [flojoy](https://pypi.org/project/flojoy/) which exports a decorator function to wrap all the node functions. Rq workers, watchdog, and the decorator all of them communicate with Django with HTTP POST requests on an API.
6. Django receives these requests and communicates with Front-End with a socket connection to provide real-time data. 
7. The decorator processes node metadata and prepares all the parameters of the node and looks for any dependency on another node. If the current node depends on other nodes, then it fetches their results from the rq worker and finally calls the node function with its parameter values and dependent node results.
8. After the node function runs, the decorator collects its result and sends it to Django with a POST API call, which eventually sends them to FE through a socket connection.

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/getting-started/architecture.md)
