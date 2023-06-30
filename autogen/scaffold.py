import re
import os
import json
import time
from pathlib import Path


def write_node_template_file(NODE_NAME, head, TEMPLATE):
    node_docs_page = TEMPLATE.replace('[NODE_NAME]', NODE_NAME)
    
    head_for_template_file = head.replace('../docs/nodes', '')
    if NODE_NAME not in head_for_template_file:
        head_for_template_file = os.path.join(head_for_template_file, NODE_NAME)

    node_docs_page = node_docs_page.replace('[NODE_DIRECTORY_HEAD]', head_for_template_file)

    file_path = os.path.join(head, NODE_NAME, NODE_NAME+'.md')

    if file_path.count(NODE_NAME) > 2:
        file_path = file_path.replace(NODE_NAME + '/', '')    
    
    if os.path.exists(file_path) == False:
        print('~ Creating file:', file_path)
        #  Path.touch(file_path)
        f = open(file_path, 'w')
        f.write(node_docs_page)
        f.close()
    else:
        print('~ Doc page exists', file_path)


def create_subdirs(NODE_NAME, head, FOLDER_NAME, subfiles):
    if FOLDER_NAME == 'EX1':
        autogen_folder = os.path.join(head, NODE_NAME, 'examples', FOLDER_NAME)
    else:
        autogen_folder = os.path.join(head, NODE_NAME, FOLDER_NAME)

    if autogen_folder.count(NODE_NAME) > 1:
        autogen_folder = autogen_folder.replace(NODE_NAME + '/', '')

    if os.path.isdir(autogen_folder) == False:
        if FOLDER_NAME == 'EX1':
            examples_folder, EX1_folder = os.path.split(autogen_folder)
            os.mkdir(examples_folder)
        os.mkdir(autogen_folder)

    for i in range(len(subfiles)):
        subfile_path = os.path.join(autogen_folder, subfiles[i])
        if os.path.exists(subfile_path) == False:
            Path(subfile_path).touch()

    # some file cleanup
    if os.path.exists("output.md"):
      os.remove("output.md")
    if os.path.exists("parameters.yml"):
      os.remove("parameters.yml")    

def scaffold_node_directories():
    '''
    Read the contents of sidebar.js to inventory all of the Node documenation pages
    For nodes that do not have a documentaiton directory structure set up yet,
    create the directories and stub files to reduce effort in doing this manually.
    '''
    f = open('../nodeSidebar.json')
    s = f.read()
    f.close()

    js = json.loads(s)

    saved_directory = os.getcwd()

    f2 = open('TEMPLATE.md')
    TEMPLATE = f2.read()
    f.close()

    for key in js.keys():
        for path in js[key]:
            path = '../docs/' + path
            head, tail = os.path.split(path)            

            folder_items = os.listdir(head)

            for item in folder_items:
                if '.' in item:
                    if item.split('.')[1] == 'md':
                        NODE_NAME = item.split('.')[0]
                        new_node_folder = os.path.join(head, NODE_NAME)
                        if os.path.isdir(new_node_folder) == False:
                            #
                            # 1. Create a new folder for the node if it does not already exist
                            #
                            if NODE_NAME not in head:
                                os.mkdir(new_node_folder)
                                time.sleep(0.5)
                        else:
                            print ('~ ', new_node_folder, ' already exists')
                        #
                        # 2. Write the NODE.md file in the NODE folder 
                        #
                        write_node_template_file(NODE_NAME, head, TEMPLATE)
                        #
                        # 3. create the autogen_directory and its contents
                        #                            
                        create_subdirs(NODE_NAME, head, 'a1-[autogen]',
                                        ('docstring.txt', 'python_code.txt', 'parameters.yaml'))
                        #
                        # 4. create appendix directory and its contents
                        #                            
                        create_subdirs(NODE_NAME, head, 'appendix',
                                        ('hardware.md', 'media.md', 'notes.md'))
                        #
                        # 5. create appendix directory and its contents
                        #                            
                        create_subdirs(NODE_NAME, head, 'EX1',
                                        ('app.txt', 'output.txt', 'example.md'))                            

                            
scaffold_node_directories()
