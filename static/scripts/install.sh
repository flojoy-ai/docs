#!/bin/sh

info_color='\033[0;34m'

info_msg()
{
    message=$1
    echo -e "$info_color[info]:: $message $default_color"
    echo ''
}

info_msg "Clonning flojoy-ai/studio repo..."

git clone --branch main --recurse-submodules https://github.com/flojoy-ai/studio.git studio

cd studio

info_msg "Creating a python virtual environment..."

python3 -m venv venv

if [ $? -ne 0 ]; then
    python -m venv venv
    # Additional error handling code can go here
fi

info_msg "Activating virtual environment..."

source venv/bin/activate

info_msg "Starting the project..."

bash flojoy -v venv
