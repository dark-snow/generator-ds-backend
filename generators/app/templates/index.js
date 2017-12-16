// Creating express Application
let app = require('express')();
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: true }));
// Connecting to DB mongo-leaf
require('mongo-leaf').connect("mongodb://localhost:27017/demoshit");
// Setting up leaf-auth-express
require('leaf-auth-express').replaceUser("./models/user.model.js");
const provider = "Dark Snow Backend"
require('leaf-auth-express').setProvider(provider);
// Express file upload middleware
app.use(require("express-fileupload")());

// Response Convention
require("dark-snow-response").setProvider(provider);

// Enabling Cros origin resource sharing
app.all('/*', function (req, res, next) {
    // CORS headers
    res.header("X-Frame-Options", "ALLOW-FROM https://www.google.com https://www.youtube.com"); // restrict it to the required domain
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,Authorization,X-Frame-Options');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

app.use("/api", require("./routes/v1/v1.router.js"));
// Exposing static content
app.use("/", require('express').static(__dirname + "/public"));

// process.env.PORT is usually set as the port of the app by providers such as Heroku.
app.set("port", process.env.PORT || 3000); 

app.listen(app.get("port"), () => {
    console.log("App is running on port " + app.get("port"));
})