---
sidebar_position: 3
id: manifest
title: Node Manifest 
---

Before we begin creating a custom node, we need to first recognize how Flojoy recognizes custom nodes, as well as how to integrate them into an application. 

### Flojoy decorator

All node functions in Flojoy require a [decorator](https://peps.python.org/pep-0318/) provided by Flojoy's python package. To begin writting a custom node, in your Python file, add the boilerplate ...

```python
from flojoy import flojoy, DataContainer
```

... and to your custom function, add the decorator:

```python
@flojoy
def my_custom_function(dc, params):
    .
    .
    .
    return DataContainer( ... )
```

### Node Inputs

Note that the example function above takes two (2) arguments.

- `dc` : a list of inputs provided to the node instance. They are ordered in the same order as the nodes are attached to the input. Remember that these are objects of type `DataContainer`, so you can access their data via their attributes, such as `dc[0].y` etc.

- `params` : this is a new level of node customization that requires us to know more about how Flojoy recognizes what to do with custom nodes.

### The Manifest

In the source directory `PYTHON/FUNCTIONS/MANIFEST`, each node has a file of extension `manifest.yaml`, a YAML file that provides certain metadata of the node to Flojoy. The YAML structure must consist of a `COMMAND` key with a dictionary attribute. The dictionary must itself have the following keys:

- `name` : This is the name of the node as it will be rendered in the UI of Flojoy

- `key` : This is a unique identifier for the node that will allow for reference within the source of Flojoy

- `type` : This is the identifier of the node into its resepctive parent category. These keys (and their respective sections) can be found in `/src/feature/flow_chart_panel/manifest/COMANDS_MANIFEST.ts`

- `parameters` : This is a dictionary of parameters that can be tweaked in the UI to control the behaviour of a particular instance of this node. For example, an instance of the Proportion-Interal-Derivative (PID) controller node has its time constants set as below in `PYTHON/MANIFEST/pid.manifest.yaml`:

```yaml
COMMAND:
  - {
      name: PID,
      key: PID,
      type: ACTIVE_FEEDBACK,
      parameters:
        {
          Kp: { type: "float", default: "1" },
          Ki: { type: "float", default: "0" },
          Kd: { type: "float", default: "0" },
        },
      }
```

It is these parameters that can be accessed via the `params` argument in your Flojoy function!

### Updating Flojoy Databases 

After creating your new manifest function, we need to update the databases Flojoy refers to for information on the nodes, as well as their actual functionality. To do this, simply run `python3 write_python_metadata.py` in the root directory of Flojoy.