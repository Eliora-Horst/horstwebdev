var translatorModel = require('/models/translate.js');

var newTranslation = function(req, res) {

	var language = new tranlatorModel.translator(req.body)
	console.log(language);
}

module.exports = {
	newTranslation : newTranslation,
