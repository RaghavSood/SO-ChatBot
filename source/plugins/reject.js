( function() {
var reject = {
command : function ( args, cb ) {
		var id = Number( args.parse()[0] );
		
		IO.xhr({
			url   : '/messages/' + id + '/delete',
			data   : fkey(),
			method  : 'POST',
			complete : finish
		});
	}
};

bot.addCommand({
	name : 'reject',
	fun  : reject.command,
	thisArg : undo,
	permissions : {
		del : 'NONE',
		use : ['1069068']
	},
	description : 'Rejects a user\'s write request. DOES NOT WORK AT THE MOMENT';
});
}());