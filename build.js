const fs = require('fs');
const path = require('path');
const tinycolor = require('tinycolor2');
const yaml = require('js-yaml');

const THEME_DIR = path.join(__dirname, 'theme');
const THEME_YAML_FILE_ITALIC = path.join(__dirname, 'src', 'Italic.yml');
const THEME_YAML_FILE = path.join(__dirname, 'src', 'JuanCarlos.yml');
const THEME_YAML_FILE_BLACK = path.join(__dirname, 'src', 'JuanCarlosBlack.yml');
const THEME_YAML_FILE_BLUE = path.join(__dirname, 'src', 'JuanCarlosDarkBlue.yml');
const THEME_YAML_FILE_RED = path.join(__dirname, 'src', 'JuanCarlosDarkRed.yml');




if (!fs.existsSync(THEME_DIR)) {
    fs.mkdirSync(THEME_DIR);
}

const withAlphaType = new yaml.Type('!alpha', {
    kind: 'sequence',
    construct: data => {
        return data[0] + data[1];
    },
    represent: data => {
        return [data[0], data[1]];
    },
});
const schema = yaml.Schema.create([withAlphaType]);
const standard = fs.readFileSync(THEME_YAML_FILE, 'utf8');
const italic = fs.readFileSync(THEME_YAML_FILE_ITALIC, 'utf8');
const black = fs.readFileSync(THEME_YAML_FILE_BLACK, 'utf8');
const blue = fs.readFileSync(THEME_YAML_FILE_BLUE, 'utf8');
const red = fs.readFileSync(THEME_YAML_FILE_RED, 'utf8');




yamlObj = yaml.load(standard, { schema });

yamlObj.colors = Object.keys(yamlObj.colors).reduce((obj, key) => {
    if (yamlObj.colors[key] === null) {
        return obj;
    }
    return Object.assign({}, obj, { [key]: yamlObj.colors[key] });
}, {});

const brightColors = [...yamlObj.JuanCarlos.ansi, ...yamlObj.JuanCarlos.brightOther];

// const soft = standard.replace(/'(#[0-9A-Z]{6})/g, (match, hex) => {
//     if (brightColors.indexOf(hex) > -1) {
//         return `'${tinycolor(hex)
//             .desaturate(20)
//             .toHexString()}`;
//     }
//     return `'${tinycolor(hex).toHexString()}`;
// });

fs.writeFileSync(
    path.join(THEME_DIR, 'JuanCarlos.json'),
    JSON.stringify(yaml.load(standard, { schema }), null, 4)
);
fs.writeFileSync(
    path.join(THEME_DIR, 'JuanCarlosItalic.json'),
    JSON.stringify(yaml.load(italic, { schema }), null, 4)
);
fs.writeFileSync(
    path.join(THEME_DIR, 'JuanCarlosBack.json'),
    JSON.stringify(yaml.load(black, { schema }), null, 4)
);
fs.writeFileSync(
    path.join(THEME_DIR, 'JuanCarlosDarkBlue.json'),
    JSON.stringify(yaml.load(blue, { schema }), null, 4)
);
fs.writeFileSync(
    path.join(THEME_DIR, 'JuanCarlosDarkRed.json'),
    JSON.stringify(yaml.load(red, { schema }), null, 4)
);
