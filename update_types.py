import os
import json
from typing import Optional

ALLOWED_TYPES = [
    "AI_ML",
    "GENERATORS",
    "VISUALIZERS",
    "LOADERS",
    "EXTRACTORS",
    "TRANSFORMERS",
    "ARITHMETIC",
    "INSTRUMENTS",
    "LOGIC_GATES",
    "CONDITIONALS",
    "NUMPY",
    "SCIPY",
]

OVERRIDES = {
    "LOOP_INDEX": "default",
    "MATRIX": "default",
    "BASIC_OSCILLATOR": "default",
    "PERIODOGRAM": "default",
    "WELCH": "default",
    "STFT": "default",
    "SKLEARNIMAGE": "default",
    "LINSPACE": "default",
}

Path = os.path
NODES_DIR = Path.join("docs", "nodes")
FULL_PATH = Path.abspath(Path.join(Path.curdir, NODES_DIR))

type_map = {}


def contains_directory(path, dir_name):
    # Check if the main directory exists
    if not os.path.exists(path) or not os.path.isdir(path):
        return False

    # Get a list of entries in the main directory
    with os.scandir(path) as entries:
        # Iterate over the entries to find the specified directory
        for entry in entries:
            if entry.is_dir() and entry.name == dir_name:
                return True

    # If the specified directory is not found, return False
    return False


def get_type_map(dir_path: str, cur_type: Optional[str] = None):
    basename = Path.basename(dir_path)
    cur_type = basename if basename in ALLOWED_TYPES else cur_type

    if contains_directory(dir_path, "a1-[autogen]"):
        type_map[basename] = cur_type
        return

    with os.scandir(dir_path) as entries:
        entries = sorted(entries, key=lambda e: e.name)  # Sort entries alphabetically

        for entry in entries:
            if not entry.is_dir():
                continue

            get_type_map(entry.path, cur_type)


def browse_directories(dir_path: str):
    if contains_directory(dir_path, "examples"):
        print("updating ", Path.basename(dir_path))
        app_path = Path.join(dir_path, "examples", "EX1", "app.json")
        update_app(app_path)

        return

    with os.scandir(dir_path) as entries:
        entries = sorted(entries, key=lambda e: e.name)  # Sort entries alphabetically

        for entry in entries:
            if not entry.is_dir():
                continue

            browse_directories(entry.path)

def update_app(path: str):
    with open(path, "r") as f:
        app = json.load(f)
    nodes = app["rfInstance"]["nodes"]
    edges = app["rfInstance"]["edges"]
    def should_keep_node(node):
        return (node["data"]["func"] != "END"
            and node["data"]["func"] != "GOTO")
    def should_keep_edge(edge):
        return (not edge["target"].startswith("END-") 
            and not edge["target"].startswith("GOTO-") 
            and not edge["source"].startswith("END-") 
            and not edge["source"].startswith("GOTO-"))

    for node in nodes:
        if not should_keep_node(node):
            continue
        func = node["data"]["func"]

        if func in OVERRIDES:
            mapped = OVERRIDES[func]
        else:
            mapped = type_map[func]

        node["type"] = mapped
        node["data"]["type"] = mapped
    app["rfInstance"]["nodes"] = [node for node in nodes if should_keep_node(node)]
    app["rfInstance"]["edges"] = [edge for edge in edges if should_keep_edge(edge)]

    with open(path, "w") as f:
        json.dump(app, f, indent=2)



get_type_map(FULL_PATH)
type_map["DF_2_OrderedTriple"] = "TRANSFORMERS"

example_apps_path = Path.join("..", "studio", "src", "utils", "app-gallery-apps")
for path in os.listdir(example_apps_path):
    update_app(Path.join(example_apps_path, path))

