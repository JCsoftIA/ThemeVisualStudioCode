
> A dark theme for [Visual Studio Code](http://code.visualstudio.com).

como instalo?
>[Click para instalar](https://marketplace.visualstudio.com/items?itemName=JCsoftIA.JCsoftIA)


pues es muy simple solo tienes que tener

>[git](https://git-scm.com/downloads)
y
>[node](https://nodejs.org/es/download/)

instalado 

--abrimos el cmd--
recuerda  que al abrir el cmd

>(Shift+R y escribes CMD y luego precionas enter)

se te posicionara en la parte de C:\Users\ {UserName}\
y tendras que hacer los comandos desde aqui

<p align="center" color='green'>Comandos a Realizar</p>


>$ git clone https://github.com/JCsoftIA/ThemeVisualStudioCode.git .vscode/extensions/theme-JuanCarlos

>$ cd .vscode/extensions/theme-JuanCarlos

>$ npm install

>$ npm run build



##  ahora como lo activo?

Si estas en español te diriges a Archivo->Preferencias->Tema de Color, precionas enter y eliges JuanCarlos

Si estas en ingles pues solo te diriges a File -> Preferences -> Color Theme y eliges JuanCarlos


o simplemente con Ctrl+Shift+P y buscas Preferencias:Tema de Color y hualaa es lo mismo pero mas simple 


### Aqui les dejo mi configuracion de visual studio code
```
{
    "workbench.iconTheme": "material-icon-theme",
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
    "window.zoomLevel": 0,
    "editor.fontSize": 22,
    "editor.fontWeight": "500",
    "editor.letterSpacing": -1,
    "editor.fontFamily": "'Dank Mono','Fira Code','Cascadia Code'",
    "editor.fontLigatures": true,
    "editor.wordWrap": "on",
    "synthwave84.disableGlow": true,
    "terminal.integrated.fontFamily":"'Cascadia Code','Dank Mono','Fira Code'",
    "terminal.integrated.fontSize":18,
    
    "breadcrumbs.enabled": false,
    "editor.cursorSmoothCaretAnimation": true,
    "editor.renderLineHighlight": "gutter",
    "editor.smoothScrolling": true,
    "window.autoDetectColorScheme": true,
    "workbench.editor.tabSizing": "shrink",
    "workbench.statusBar.visible": false,
    "workbench.tree.indent": 10,
    "workbench.colorTheme": "JC bestR1",
}



```
