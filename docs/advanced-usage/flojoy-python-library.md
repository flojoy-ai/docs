---
sidebar-position: 4
id: flojoy-python-library
title: Flojoy Python Library
---

If you would like to contribute to the `flojoy` Python library, first clone the `python` repository with `git`:

- `git clone git@github.com:flojoy-io/python.git` (SSH)
- `git clone https://github.com/flojoy-io/python.git` (HTTPS)

Then clone the `studio` repository as well for testing:

- `git clone git@github.com:flojoy-io/studio.git` (SSH)
- `git clone https://github.com/flojoy-io/studio.git` (HTTPS)

Next, navigate to the newly created `studio` directory and create a Python virtual environment:

```
python -m venv venv
```

Activate the virtual environment with:

```
source venv/bin/activate
```

With the `studio` virtual environment active, navigate to the `python` repository that was cloned and run:

```
pip install -e .
```

This installs the `flojoy` package in editable mode, which creates a symlink to the local package code, allowing you to edit the package source code and have the changes reflected in `flojoy` nodes without having to reinstall each time.

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/advanced-usage/flojoy-python-library.md)
