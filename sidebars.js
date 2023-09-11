const unflatten = require('flat').unflatten;
const fs = require('fs');

const data = fs.readFileSync('nodeSidebar.json', 'utf8');
const nodesObj = JSON.parse(data);

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // nodesSidebar: [{type: 'autogenerated', dirName: '.'}],

  main: [
    {
      type: 'doc',
      id: 'getting-started/install',
      label: 'Installation',
    },
    {
      type: 'category',
      label: 'General Tutorials',
      items: [
        'general-tutorials/introduction',
        'general-tutorials/ctrls',
        'general-tutorials/dc_types',
        'general-tutorials/numpyscipy',
      ],
    },
    {
      type: 'category',
      label: 'Node Examples',
      link: {type: 'doc', id: 'nodes/NODE_EXAMPLES'},
      items: [
        {
          type: 'autogenerated',
          dirName: 'nodes',
        },
      ],
    },
    {
      type: 'category',
      label: 'Instruments Database',
      link: {type: 'doc', id: 'instruments-database/all-instruments'},
      items: [
        {
          type: 'autogenerated',
          dirName: 'instruments-database',
        },
      ],
    },
    {
      type: 'category',
      label: 'Flojoy Cloud',
      items: [
        'cloud/introduction',
        'cloud/python-client',
        'cloud/matlab-client',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Tutorials',
      items: [
        'advanced-usage/flojoy-python-library',
        'advanced-usage/small-memory',
        {
          type: 'category',
          label: 'Active Feedback Control',
          items: [
            'advanced-usage/feedback-control/active-feedback',
            'advanced-usage/feedback-control/model-systems',
            'advanced-usage/feedback-control/pid',
          ],
        },
        {
          type: 'category',
          label: 'Node Architecture',
          items: [
            'custom-nodes/custom-nodes',
            'custom-nodes/data-container',
            'custom-nodes/creating-custom-node',
            'custom-nodes/custom-category',
            'custom-nodes/testing-nodes',
            'custom-nodes/node-api-reference',
          ],
        },
      ],
    },
  ],
};
module.exports = sidebars;
