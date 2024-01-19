# Install the following extensions:
- Custom CSS and JS Loader (https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css)
- Fix VSCode Checksums (https://marketplace.visualstudio.com/items?itemName=lehni.vscode-fix-checksums)

# Setups:
- Create folder `C:/vscode_custom`
- Move file `color.css` to folder `C:/vscode_custom`
- Open `settings.json` in Visual Studio Code
- Add the following code to the end of the file:
```json     
"vscode_custom_css.imports": [
    "file:///C:/vscode_custom/color.css"
],
```
- Save and clos settings.json
- `Ctrl + Shift + P` -> `Enable Custom CSS and JS` -> Restart Visual Studio Code (`Ctrl + Shift + P` + `Developer: Reload Window`)
- `Ctrl + Shift + P` -> `Fix Checksum: Apply `
