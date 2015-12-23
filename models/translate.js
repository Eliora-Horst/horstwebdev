var translator = function(translateData) {
	this.text = translateData.text;
	this.fromLang = translateData.fromLang;
	this.toLang = translateData.toLang;
}

module.exports = {
	translator : translator
}