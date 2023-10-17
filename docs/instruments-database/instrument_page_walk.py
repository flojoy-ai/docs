import os, traceback

# Usage:
# Run this convenience script on the command line to update flat_docstring_lookup.json
# The script reads the first sentence of every node docstring file and saves it in a lookup table for the node

start_here = '.'
instruments = set()
page_paths = []

for root, cat, f_names in os.walk(start_here):
    fn = f_names[0]
    if len(cat) == 0 and '.md' in fn:
        md_path = os.path.join(root, fn)
        page_paths.append(md_path)

print(len(page_paths))

for path in page_paths:
    if 'TDS2000' not in path:
        with open(path) as f:
            s = f.read()

            try:
                category = path.split('/')[1].upper().replace(' ', '_').replace('-', '_')
                mnfr = s.split(' by ')[1].split(' ')[0].strip().upper()
            except:
                print('100 chars: ', s[:100])
                mnfr = 'UNKNOWN'

            print(category, '>>>>>>>>>>>>>>>', mnfr)

            s = s.replace('MZ2000', mnfr)
            s = s.replace('WIDGET2000', category)

        with open(path, 'w') as f2:
            f2.write(s)




