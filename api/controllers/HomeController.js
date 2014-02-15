var deckImport = require('../services/deck-import'),
	_ = require('underscore'),
	startingHandService = require("./../services/analytics/startingHand");



/**
 * HomeController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  /**
   * `HomeController.analyze`
   */

  analyze: function (req, res) {
	var url = req.query.u;

	deckImport.import(url, function(err, cardNames){
		if(err) analysisError(err, res);
		
		deckImport.load(cardNames.cards, function(err, deck){
			if(err) analysisError(err, res);
			
			if(!err){
				res.render('analyze/index', {
					//starting hand
					startingHand: startingHandService.list(deck),
					cards: deck,
					hero:  cardNames.hero,
				});
			}

		});
	});
  }
};
