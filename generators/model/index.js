const Generator = require('yeoman-generator');
const mkdirp = require("mkdirp")
module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Model Name'
            }
        ]).then(e => {
            this.props = e;
        });
    }

    writing() {
        let fileName = this.props.name.toLowerCase();
        let modelName = this.props.name.substring(0, 1).toUpperCase() + this.props.name.substring(1, fileName.length).toLowerCase();
        let collectionName = fileName + "s";
        this.fs.copyTpl(__dirname + "/templates/model.template.js", "./models/" + fileName + ".model.js", { name: modelName, collection: collectionName });
    }
};