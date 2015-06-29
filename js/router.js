Debttracker.Router.map(
	function()
	{
		this.resource( 'Debttracker', { path : '/' } )
	}
);

Debttracker.DebttrackerRoute = Ember.Route.extend(
{
	model : function()
	{
		return this.store.find( "debtor" );
	}
});