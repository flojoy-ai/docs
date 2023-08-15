from os import path, walk
import json
from collections import defaultdict

NODES_DIR = path.join("docs", "nodes")


def write_file(file_path: str, content: str):
    # Write the file
    with open(file_path, "w") as file:
        file.write(content)


def load_file(file_path: str):
    with open(file_path, "r") as f:
        content = f.read()
        return json.loads(content)


def update_map(
    map_file: dict[str, list[str]],
    nodes_map: dict[str, str | list[str]],
    file_path: str,
):
    for key, item in nodes_map.items():
        if item == "":
            continue

        formatted_path = file_path.replace("\\", "/").replace(".md", "")

        if isinstance(item, list):
            for i in item:
                if f"/{i}/" in formatted_path.upper():
                    map_file[key].append(formatted_path)
        else:
            if f"/{item}/" in formatted_path.upper():
                map_file[key].append(formatted_path)
    return map_file


__ignore_dirs = ["appendix", "examples", "a1-[autogen]"]


def write_nodesidebar():
    nodes_map: dict[str, str | list[str]] = load_file("nodes_sidebar_map.json")
    new_map: dict[str, list[str]] = defaultdict(list)

    for root, _, files in walk(NODES_DIR):
        if any((dir in root) for dir in __ignore_dirs):
            continue
        file_proccessed = []
        for file in files:
            if file.endswith(".md"):
                if file in file_proccessed:
                    raise FileExistsError(
                        f"Error: multiple md file found in {root} for {file}, there should only be one!"
                    )
                file_proccessed.append(file)
                path_index = root.index("nodes")
                path_from_second_dir = root[path_index:]
                file_path = path.join(path_from_second_dir, file)
                new_map = update_map(new_map, nodes_map, file_path)

    sorted_map = dict(sorted(new_map.items()))
    for key, items in sorted_map.items():
        sorted_map[key] = sorted(items)

    write_file(
        path.join(path.curdir, "nodeSidebar.json"), json.dumps(sorted_map, indent=4)
    )


if __name__ == "__main__":
    write_nodesidebar()
