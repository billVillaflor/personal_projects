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
			var newFirstName = this.get( "newFirstName" );
			var newLastName = this.get( "newLastName" );
			var newDate = this.get( "newDate" );
			var newDebt = this.get( "newDebt" );

			var transaction = this.store.createRecord( 'transaction',
			{
				type: Debttracker.TRANSACTION_TYPE_DEBIT,
				amount: newDebt,
				date: newDate
			});

			transaction.save();

			var debtor = this.store.createRecord( 'debtor',
			{
				firstName: newFirstName,
				lastName: newLastName,
				debt: newDebt
			});

			debtor.get( 'transaction' ).addObject( transaction );
			debtor.save();
		},

		clearFields : function()
		{
			this.set( "newFirstName", "" );
			this.set( "newLastName", "" );
			this.set( "newDebt", "" );
			this.set( "newDate", "" );
		}
	},
});