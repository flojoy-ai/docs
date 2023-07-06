---
sidebar_position: 4
id: custom-category
title: Custom categories
---

As you create custom nodes, it is also possible to create categories if any of the ones built-in are not appropriate.

### Informing the UI

Flojoy relies on folder structure to tell which Python functions should be placed in what category in the UI. You can easily introduce a new category following Flojoy node's folder structure below:

```txt
├── nodes
│   ├── Parent Category
│   │   ├── Sub Category
│   │   │   ├── Node
│   │   │   │   ├── Node.py
│   │   │   │   ├── example.md

```

### Updating the internal databases

:::info
This is now performed at startup of Flojoy. So simply rerunning the startup script is sufficient.
:::

To update the databases with the new category and the functionalities of the nodes (including your new custom node), run following commands in the root directory:

```bash
python3 generate_manifest.py # generates nodes manifest for Front-end
```

```bash
python3 write_python_metadata.py # writes nodes metatdata to Front-end
```
