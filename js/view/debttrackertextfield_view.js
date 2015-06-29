Debttracker.DebttrackertextfieldView = Ember.TextField.extend(
{
	didInsertElement : function()
	{
		this.$().focus();
	}
});

Ember.Handlebars.helper( 'debttrackertextfield', Debttracker.EditTodoView );