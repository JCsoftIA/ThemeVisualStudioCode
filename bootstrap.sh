#!/usr/bin/env bash

repo_dir="$( cd "$(dirname "${BASH_SOURCE[0]}")" && pwd )"

attach() {
    JuanCarlos="$( find ~/.vscode/extensions -maxdepth 1 -type d -name 'JuanCarlos*' )"
    if [[ "$JuanCarlos" ]]; then
        JuanCarlos_dir="$( basename "$JuanCarlos_path" )"
        mkdir -p ~/.vscode/extensions/disabled
        mv "$JuanCarlos_path" ~/.vscode/extensions/disabled/"$JuanCarlos_dir"
    fi
    ln -s "$repo_dir" ~/.vscode/extensions/JuanCarlos
}

eject() {
    rm -f ~/.vscode/extensions/JuanCarlos
    if [ -d ~/.vscode/extensions/disabled ]; then
        disabled_path="$( find ~/.vscode/extensions/disabled -maxdepth 1 -type d -name 'JuanCarlos*' )"
        JuanCarlos_dir="$( basename "$disabled_path" )"
        mv "$disabled_path" ~/.vscode/extensions/"$JuanCarlos_dir"
        rm -r ~/.vscode/extensions/disabled
    fi
}

case "$1" in
    attach)
        attach
        ;;
    eject)
        eject
        ;;
esac
