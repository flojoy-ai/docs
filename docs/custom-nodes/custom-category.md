---
sidebar_position: 4
id: custom-category
title: Custom Categories
---

As you create custom nodes, it is also possible to create new categories if the built-in categories are not appropriate.

### Informing the UI

Flojoy relies on folder structure to tell which Python functions should be placed in which category in the UI. You can easily introduce a new category following the Flojoy nodes folder structure below:

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
This is now performed at startup of Flojoy. Simply rerunning the startup script is sufficient.
:::

To update the databases with the new category and the functionalities of the nodes (including your new custom node), run the following commands in the root directory:

```bash
python3 generate_manifest.py  # generates nodes manifest for Front-End
```

```bash
python3 write_python_metadata.py  # writes nodes metatdata to Front-End
```

[//]: # (Edit page on GitHub)

#### Edit page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/custom-nodes/custom-category.md)