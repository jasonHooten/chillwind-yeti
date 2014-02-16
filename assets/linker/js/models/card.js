Chillwind.Card = DS.Model.extend({
	cardId: DS.attr('integer'),
    name: DS.attr('string'),
	description: DS.attr('string'),
    image: DS.attr('string'),
    'class': DS.attr('string'),
    type: DS.attr('string'),
    quality: DS.attr('string'),
    race: DS.attr('string'),
    set: DS.attr('string'),
    mana: DS.attr('integer'),
    attack: DS.attr('integer'),
    health: DS.attr('integer'),
    collectible: DS.attr('boolean')
});