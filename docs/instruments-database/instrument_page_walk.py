import json, os

# Usage:
# Run this convenience script on the command line to update flat_docstring_lookup.json
# The script reads the first sentence of every node docstring file and saves it in a lookup table for the node

start_here = '.'
instruments = set()
page_paths = []

tab_item = '''
<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='CAT' manufacturer='MNFR'></NodeCardCollection>

</TabItem>'''

for root, cat, f_names in os.walk(start_here):
    fn = f_names[0]
    if len(cat) == 0 and '.md' in fn:
        md_path = os.path.join(root, fn)
        page_paths.append(md_path)

print(len(pages))

for path in page_paths:
    if 'TDS2000' not in path:
        with open(path) as f:            
            s = f.read()

            # Hide sidebar

            if 'hide_table_of_contents: true' not in s:
                s.replace('---\n', 'hide_table_of_contents: true\n---\n')

            # isolate instrument category and mnfr

            category = path.split('/')[1].upper().replace(' ', '_').replace('-', '_')
            mnfr = s.split(' by ')[1].split[' '][0].strip().upper()

            # insert manufacturuer name explicity

            s.replace('Manufacturer Card', 'Manufacturer card: ' + mnfr)

            # Insert video component

            s.replace('</ul>\n</details>\n', '</ul>\n</details>\n\n' + \
                      "import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';\n\n<FeaturedInstrumentVideo category='CAT' manufacturer='MNFR'></FeaturedInstrumentVideo>\n\n".replace('CAT', category).replace('MNFR', mnfr))

            # Insert Flojoy tab

            tab_item = tab_item.replace('CAT', category).replace('MNFR', mnfr)

            s.replace('<Tabs>', "import NodeCardCollection from '@site/src/components/NodeCardCollection';\n\n" + '<Tabs>' + tab_item)



