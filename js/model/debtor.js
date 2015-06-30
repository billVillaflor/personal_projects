Debttracker.TRANSACTION_TYPE_DEBIT = 0;
Debttracker.TRANSACTION_TYPE_CREDIT = 1;

Debttracker.Debtor = DS.Model.extend(
{
	firstName: DS.attr( 'string', { defaultValue: 'ANONYMOUS'} ),
	lastName: DS.attr( 'string', { defaultValue: 'ANONYMOUS'} ),
	fullName: function()
	{
		return this.get( 'firstName' ) + " " + this.get( 'lastName' );
	}.property( 'firstName', 'lastName' ),
	debt: DS.attr( 'number', { defaultValue: 0 } ),
	transaction: DS.hasMany( 'transaction' )
});

Debttracker.Transaction = DS.Model.extend(
{
	type: DS.attr( 'number', { defaultValue: Debttracker.TRANSACTION_TYPE_DEBIT } ),
	date: DS.attr( 'date', { defaultValue: new Date() } ),
	amount: DS.attr( 'number' ),
	debtor: DS.belongsTo( 'debtor' )
});

Debttracker.Transaction.FIXTURES = [];

Debttracker.Debtor.FIXTURES =
[
	{
		id: 1,
		firstName: 'bill',
		lastName: 'villaflor',
		debt: 500
	},
	{
		id: 2,
		firstName: 'irah',
		lastName: 'cabangon',
		debt: 1000
	}
];