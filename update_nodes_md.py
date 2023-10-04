import os

EXAMPLE_SECTION_START = "## Examples"
EXAMPLE_SECTION_END = "<SectionBreak />"
AUTOGEN_FOLDER = "a1-[autogen]"


def with_light_mode(node_name: str, example_title: str):
    return f"""

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import appImgLight from './examples/EX1/app_light.jpeg'
import outputImg from './examples/EX1/output.jpeg'
import outputLight from './examples/EX1/output_light.jpeg'

### {example_title.strip() if example_title.strip() != "" else f"{node_name} example"}

<AppDisplay 
    nodeLabel='{node_name}'
    appImg={{appImg}}
    appLight={{appImgLight}}
    outputLight={{outputLight}}
    outputImg={{outputImg}}
    >
    {{App1}}
</AppDisplay>

<Example1 />

"""


def without_light_mode(node_name: str, example_title: str):
    return f"""

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

### {example_title.strip() if example_title.strip() != "" else f"{node_name} example"}

<AppDisplay 
    nodeLabel='{node_name}'
    appImg={{appImg}}
    outputImg={{outputImg}}
    >
    {{App1}}
</AppDisplay>

<Example1 />

"""


def with_app_only(node_name: str, example_title:str):
    return f"""

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';

### {example_title.strip() if example_title.strip() != "" else f"{node_name} example"}

<AppDisplay
    nodeLabel='{node_name}'
    appImg={{''}}
    outputImg={{''}}
    >
    {{App1}}
</AppDisplay>

<Example1 />

"""


def get_node_files() -> list[str]:
    node_files = []
    for root, dirs, files in os.walk("docs/nodes"):
        for file in files:
            if file.endswith(".md") and AUTOGEN_FOLDER in dirs:
                # this is a nodes md file
                node_files.append(os.path.join(root, file).replace("\\", "/"))
    return node_files


def get_content(file_path: str):
    with open(file_path, "r") as f:
        content = f.read()
    return content


def find_and_extract_content(content: str, start_text: str, end_text: str):
    start_index = content.find(start_text)
    end_index = content.find(end_text, start_index)

    if start_index != -1 and end_index != -1:
        extracted_content = content[start_index + len(start_text) : end_index]
        return start_index, end_index, extracted_content
    else:
        return -1, -1, " "


def has_light_mode_img(node_dir: str):
    example_dir = os.path.join(node_dir, "examples/EX1")
    return all(
        os.path.exists(os.path.join(example_dir, img))
        for img in ["app_light.jpeg", "output_light.jpeg"]
    )


def has_example_image(node_dir: str):
    example_dir = os.path.join(node_dir, "examples/EX1")
    return all(
        os.path.exists(os.path.join(example_dir, img))
        for img in ["app.jpeg", "output.jpeg"]
    )


def has_example_app(node_dir: str):
    example_dir = os.path.join(node_dir, "examples/EX1")
    return os.path.exists(os.path.join(example_dir, "app.json"))


def extract_example_title(content: str):
    heading_char = "###"
    start_index = content.find(heading_char)
    if start_index != -1:
        return content[
            start_index + len(heading_char) : content.find("\n", start_index)
        ]
    return ""


def get_example_section(node_name: str, node_path: str, example_section: str):
    node_dir = os.path.dirname(node_path)
    has_img = has_example_image(node_dir=node_dir)
    has_app = has_example_app(node_dir=node_dir)
    example_heading = extract_example_title(example_section)
    if has_img:
        has_light_mode = has_light_mode_img(node_dir=node_dir)
        if has_light_mode:
            print(f"{node_name} has light mode images!")
            example = with_light_mode(
                node_name=node_name, example_title=example_heading
            )
            return example
        else:
            print(f"{node_name} does not have light mode images!")
            example = without_light_mode(
                node_name=node_name, example_title=example_heading
            )
            return example
    elif has_app:
        example = with_app_only(node_name=node_name, example_title=example_heading)
        return example
    return example_section


def write_file(file_path: str, content: str):
    with open(file_path, "w") as f:
        f.write(content)


def process_md_files():
    nodes = get_node_files()
    for node in nodes:
        md_content = get_content(node)
        _, _, ex_section = find_and_extract_content(
            md_content, EXAMPLE_SECTION_START, EXAMPLE_SECTION_END
        )
        node_name = node.split("/")[-1].replace(".md", "")
        example_section = get_example_section(
            node_name=node_name, node_path=node, example_section=ex_section
        )
        with_example = md_content.replace(ex_section, example_section)
        write_file(node, with_example)


if __name__ == "__main__":
    process_md_files()
