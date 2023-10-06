from os import path, walk
import re


NODES_DIR = path.join("docs", "nodes")
__ignore_dirs = ["appendix", "a1-[autogen]"]


def line_prepender(filename, content):
    with open(filename, "r+") as f:
        lines = f.readlines()
        f.seek(0)
        f.write(content)
        f.write("\n")
        for line in lines:  # write old content after new
            f.write(line)


def up_dir_name(file_path):
    return path.dirname(path.dirname(path.dirname(file_path)))


def search_reg(file_path):
    with open(file_path) as myfile:
        content = myfile.read()
    return re.search(r"---\n.*?---", content, re.DOTALL)


def del_placeholder(file_path):
    with open(file_path, "r+") as f:
        d = f.readlines()
        f.seek(0)
        for i in d:
            if i != "<!--Add SEO here-->\n":
                f.write(i)
        f.truncate()


def copy_seo():
    paths = []
    for root, dirnames, files in walk(NODES_DIR):
        # only care about directories for actual nodes
        if any((d not in __ignore_dirs) for d in dirnames):
            continue
        if any((dir in root) for dir in __ignore_dirs):
            continue
        file_proccessed = []
        for file in files:
            if file.endswith("example.md"):
                if file in file_proccessed:
                    raise FileExistsError(
                        f"Error: multiple md file found in {root} for {file}, there should only be one!"
                    )
                file_proccessed.append(file)
                path_index = root.index("nodes")
                path_from_second_dir = root[path_index:]
                file_path = path.join(path_from_second_dir, file)
                file_path = path.join("docs", file_path)
                paths.append(file_path)

    for i in paths:
        md_path = up_dir_name(i)
        md_name = f"{path.join(md_path, path.basename(md_path))}.md"

        if path.exists(md_name) and path.exists(i):
            md_exists = search_reg(md_name)
            ex_exists = search_reg(i)

            if (ex_exists is not None) and (md_exists is None):
                print(path.basename(md_path))
                del_placeholder(md_name)
                line_prepender(md_name, ex_exists.group())


if __name__ == "__main__":
    copy_seo()
