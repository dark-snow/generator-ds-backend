const Generator = require('yeoman-generator');
const mkdirp = require("mkdirp")
module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'version',
                message: 'Version number of the route (number)'
            },
            {
                type: 'input',
                name: 'name',
                message: 'Model name (in lower case)'
            }
        ]).then(e => {
            this.props = e;
        });
    }

    writing() {
        if (this.fs.exists("./models/" + this.props.name + ".model.js")) {
            if (this.fs.exists("./routes/v" + this.props.version + "/v" + this.props.version + ".router.js")) {
                let fileName = this.props.name.toLowerCase();
                let modelName = this.props.name.substring(0, 1).toUpperCase() + this.props.name.substring(1, fileName.length).toLowerCase();
                this.fs.copyTpl(__dirname + "/templates/public.template.js", "./routes/v" + this.props.version + "/public/" + fileName + ".router.js", { name: modelName });
                this.fs.copyTpl(__dirname + "/templates/secure.template.js", "./routes/v" + this.props.version + "/secure/" + fileName + ".secure.js", { name: modelName });
            } else {
                console.log("this version doesn't exist, please create it using 'yo ds-backend:version")
            }
        } else {
            console.log("this model doesn't exist")
        }
    }
};