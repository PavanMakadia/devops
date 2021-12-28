var controller = require('./health-controller');

module.exports = (app) => {
	app.get('/health', controller.health);

	app.get('/home', controller.home);
}