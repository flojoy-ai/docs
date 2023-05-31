import os
import json

path = os.path
NODES_DIR = path.join("docs", "nodes")


def write_file(file_path: str, content: str):
    # Write the file
    with open(file_path, "w") as file:
        file.write(content)


def load_nodes_map():
    with open("nodes_sidebar_map.json", "r") as f:
        content = f.read()
        f.close()
        return json.loads(content)


def update_map(
    map_file: dict[str, list[str]],
    nodes_map: dict[str, str | list[str]],
    file_path: str,
):
    for key, item in nodes_map.items():
        if item == "":
            break
        formatted_path = file_path.replace("\\", "/").replace(".md", "")
        if isinstance(item, list):
            for i in item:
                if f"{i}/" in formatted_path.upper():
                    if map_file.get(key, None) is not None:
                        map_file[key].append(formatted_path)
                    else:
                        map_file[key] = [formatted_path]
        else:
            if f"{item}/" in formatted_path.upper():
                if map_file.get(key, None) is not None:
                    map_file[key].append(formatted_path)
                else:
                    map_file[key] = [formatted_path]
    return map_file


def write_nodesidebar():
    file_path = None
    nodes_map: dict[str, str | list[str]] = load_nodes_map()

    new_map: dict[str, list[str]] = {}
    for root, _, files in os.walk(NODES_DIR):
        for file in files:
            if file.endswith(".md") and "appendix" not in root:
                path_index = root.index("nodes")
                path_from_second_dir = root[path_index:]
                file_path = path.join(path_from_second_dir, file)
                new_map = update_map(new_map, nodes_map, file_path)
                break
            break
    write_file(
        path.join(path.curdir, "nodeSidebar.json"), json.dumps(new_map, indent=4)
    )


write_nodesidebar()
