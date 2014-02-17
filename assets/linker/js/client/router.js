Chillwind.Router.map(function() {
	this.resource('analyze', { path: '/' });
});

Chillwind.AnalyzeRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('card');
  }
});


Chillwind.ApplicationAdapter = DS.FixtureAdapter.extend();