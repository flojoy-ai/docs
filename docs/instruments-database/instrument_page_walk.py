import json, os

# Usage:
# Run this convenience script on the command line to update flat_docstring_lookup.json
# The script reads the first sentence of every node docstring file and saves it in a lookup table for the node

start_here = '.'
instruments = set()
pages = []

for root, cat, f_names in os.walk(start_here):
    fn = f_names[0]
    if len(cat) == 0 and '.md' in fn:
        md_path = os.path.join(root, fn)
        pages.append(md_path)

print(len(pages))