var home = require('./routes/home');

module.exports = function (app) {

    app.get('/', home.get);

};