
> A dark theme for [Visual Studio Code](http://code.visualstudio.com).

como instalo?

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
{
    "material-icon-theme.folders.color": "#058e05",
    "workbench.iconTheme": "material-icon-theme",
    "editor.fontFamily": "Hack, 'Comic Sans MS',Operator Mono, Consolas, Arial",
    "editor.wordWrap": "on",
    "editor.fontSize": 15,
    "window.zoomLevel": 0,
    "editor.mouseWheelZoom": true,
    "editor.fontWeight": "500",
    "editor.lineNumbers": "on",
    "editor.renderWhitespace": "all",
    "editor.formatOnPaste": true,
    "editor.tabSize": 2,
    "editor.letterSpacing": -1,
    "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",
    "terminal.integrated.fontFamily": "hack",
    "terminal.integrated.enableBell": true,
    "workbench.colorTheme": "JuanCarlos Italic",
}
