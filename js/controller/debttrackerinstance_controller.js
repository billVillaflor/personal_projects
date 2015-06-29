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

			model.get( "logs" ).push( "CREDITED " + cashAdjustment + " on " + adjustmentDate );
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
			model.get( "logs" ).push( "DEBITED " + cashAdjustment + " on " + adjustmentDate );
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

	isEditMode: false
});