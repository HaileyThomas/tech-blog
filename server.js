const path = require("path");

// add path to public folder
app.use(express.static(path.join(__dirname, "public")));
