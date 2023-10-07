import json

# Usage:
# Run this convenience script on the command line to update flat_docstring_lookup.json
# The script reads the first sentence of every node docstring file and saves it in a lookup table for the node

path = '../../docs'

nodes_obj = {}
for root, d_names, f_names in os.walk(path):
    if 'docstring.txt' in f_names:
        with open (os.path.split(root)[0] + '/a1-[autogen]/docstring.txt') as f:
            first_sentence = f.read().split('\n')[0].lstrip().rstrip().replace('\n','')
            node_id = root.split('/')[-2]
            nodes_obj[node_id] = first_sentence
with open ('flat_docstring_lookup.json', 'w') as f2:
    f2.write(json.dumps(nodes_obj, indent=4))