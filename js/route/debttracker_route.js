Debttracker.DebttrackerRoute = Ember.Route.extend(
{
	model : function()
	{
		return this.store.find( "debtor" );
	}
});