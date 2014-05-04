var express = require('express'),
    app = express();
require('./server/configs/app')(app);

require('./server/router')(app);

var port = process.env.PORT || 4001;
app.listen(port, function () {
    console.log("Listening on " + port);
});