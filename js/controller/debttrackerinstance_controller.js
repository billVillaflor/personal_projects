Debttracker.DebttrackerinstanceController = Ember.ObjectController.extend(
{
	actions:
	{
		deleteRecord : function()
		{
			var todo = this.get( "model" );
			todo.deleteRecord();
			todo.save();
		},

		saveCredit: function()
		{
			var cashAdjustment = parseFloat( this.get( "cashAdjustment" ) );
			var adjustmentDate = this.get( "adjustmentDate" );
			var model = this.get( "model" );
			var debt = model.get( "debt" );

			debt = debt - cashAdjustment;

			var transaction = this.store.createRecord( 'transaction',
			{
				type: Debttracker.TRANSACTION_TYPE_CREDIT,
				amount: cashAdjustment,
				date: adjustmentDate
			});

			transaction.save();
			model.get( "transaction" ).addObject( transaction );
			model.set( "debt", debt );
			model.save();

			this.send( "saveName" );
			this.send( "clearAdjustmentFields" );
		},

		saveDebit: function()
		{
			var cashAdjustment = parseFloat( this.get( "cashAdjustment" ) );
			var adjustmentDate = this.get( "adjustmentDate" );
			var model = this.get( "model" );
			var debt = model.get( "debt" );

			debt = debt + cashAdjustment;
			
			var transaction = this.store.createRecord( 'transaction',
			{
				type: Debttracker.TRANSACTION_TYPE_DEBIT,
				amount: cashAdjustment,
				date: adjustmentDate
			});

			transaction.save();
			model.get( "transaction" ).addObject( transaction );
			model.set( "debt", debt );
			model.save();

			this.send( "saveName" );
			this.send( "clearAdjustmentFields" );
		},

		saveName: function()
		{
			var model = this.get( "model" );
			model.save();
			this.set( "isEditMode", false );
		},

		enterEditMode: function()
		{
			this.set( "isEditMode", true );
		},

		clearAdjustmentFields: function()
		{
			this.set( "cashAdjustment", "" );
			this.set( "adjustmentDate", "" );
		}
	},

	isEditMode: false,

	getLogs: function()
	{
		var model = this.get( "model" );
		var transactions = model.get( "transaction" );
		var logs = [];

		transactions.forEach
		(
			function( item )
			{
				var log = "";

				if( item.get( "type" ) == Debttracker.TRANSACTION_TYPE_DEBIT )
				{
					log += "Debited ";
				}
				else
				{
					log += "Credited ";
				}

				log += item.get( "amount" ) + " Php. ";
				log += "on " + item.get( "date" );
				logs.push( log );
			}
		)

		return logs;
	}.property( "isEditMode" )
});