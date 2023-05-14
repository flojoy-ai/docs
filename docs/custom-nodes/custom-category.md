---
sidebar_position: 5
id: custom-category
title: Custom categories
---

As you create custom nodes, it is also possible to create categories if any of the ones built-in are not appropriate.

### Informing the UI

Flojoy relies on a different routine to tell which Python functions should be placed in what category in the UI. This routine needs to be made aware of the new category. 

To do this, edit [`/src/feature/flow_chart_panel/manifest/COMMANDS_MANIFEST.ts`](https://github.com/flojoy-io/studio/blob/main/src/feature/flow_chart_panel/manifest/COMMANDS_MANIFEST.ts) by adding a new element to the `SECTIONS` variable. This new element should have a `title` key (the title of the new category as to be shown in the UI), and a `child` key, which will control which subcategories this new element controls. 


```typescript {title='COMMAND_MANIFEST.ts'}
  {
    title: "My new category",
    child: [
        { 
            name: "My subcategory", key: "MY_NEW_KEY_FOR_THIS_SUBCATEGORY" 
        }
    ]
  }
```

### Updating the internal databases

:::info
This is now performed at startup of Flojoy.
:::

Now that you have incorporated these changes to make a new category, the internal Python databases need to be updated as before by running `python3 write_python_metadata.py` in the root directory.