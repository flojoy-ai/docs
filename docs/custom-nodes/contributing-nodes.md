---
sidebar_position: 5
id: contributing-nodes
title: Contributing Nodes
---

Moved to https://docs.flojoy.ai/custom-nodes/creating-custom-node/
Currently there are only one submodule in the flojoy studio repository. The **nodes** submodule, that includes all the node definitions.

### Contributing to Nodes Submodule

In order to contribute your own custom node,

- At first go to [`PYTHON/nodes/`](https://github.com/flojoy-io/nodes/tree/main/) directory, then create your own **branch**. After [creating your own custom nodes](https://docs.flojoy.io/custom-nodes/creating-custom-node/), you should push it to github and create a pull request to the main branch.
- We have a [Pull Request Template](https://github.com/flojoy-io/nodes/blob/main/pull_request_template.md) for nodes repository that must be followed by the developer.
- After that, back to the **studio** root directory, you should also push it to remote. And **studio** repository also has a separate pull request strategy, the only difference is we give the PR to the develop branch and later the develop branch is merged with main. So Anyone try to create a branch in **studio** project it has to be created from develop. And also in order to give a pull request ( studio repository ), the developer must include the nodes repository pull request link in it.

This way the **nodes** submodule will be tracked in the **studio** repository by the latest commit hash also the pull requests will be in sync as well.

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/custom-nodes/contributing-nodes.md)
