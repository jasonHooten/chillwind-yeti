Chillwind.Router.map(function() {
	this.resource('analyze', { path: '/analyze' });
});

Chillwind.AnalyzeRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('card');
  }
});


Chillwind.ApplicationAdapter = DS.FixtureAdapter.extend();