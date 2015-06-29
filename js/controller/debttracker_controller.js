Debttracker.DebttrackerController = Ember.ArrayController.extend(
{
	actions: 
	{
		addNewDebt: function()
		{
			this.send( "addNewRecord" ); 
			this.send( "clearFields" );
		},

		addNewRecord: function()
		{
			var newDebtorName = this.get( "newDebtorName" );
			var newDebtBalance = this.get( "newDebtBalance" );
			var newDebtDate = this.get( "newDebtDate" );

			var debtor = this.store.createRecord( 'debtor',
			{
				name: newDebtorName,
				debt: newDebtBalance,
				logs: ["DEBITED " + newDebtBalance + " on " + newDebtDate]
			});

			debtor.save();
		},

		clearFields : function()
		{
			this.set( "newDebtorName", "" );
			this.set( "newDebtBalance", "" );
			this.set( "newDebtDate", "" );
		}
	},
});