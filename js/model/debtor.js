Debttracker.Debtor = DS.Model.extend(
{
	name: DS.attr( 'string' ),
	debt: DS.attr( 'number' ),
	logs: DS.attr()
});


Debttracker.Debtor.FIXTURES =
[
	{
		id: 1,
		name: "bill villaflor",
		debt: 500,
		logs: 
		[ 
			"CREDITED 500.00 on 01/28/1994",
			"CREDITED 500.00 on 01/28/1994",
		]
	},
	{
		id: 2,
		name: "Irah Cabangon",
		debt: 1000,
		logs: 
		[ 
			"CREDITED 500.00 on 01/28/1994",
			"DEBITED 500.00 on 01/28/1994"
		]
	}
];