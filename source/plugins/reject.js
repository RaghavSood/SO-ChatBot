( function() {
var reject = {
command : function ( args, cb ) {
		var usrid = args.content;

		if ( !usrid ) {
			usrid = args.get( 'user_id' );
		}
		else if ( /\D/.test(usrid) ) {
			usrid = args.findUserid( usrid );
		}


		IO.xhr({
			url   : '/rooms/setuseraccess/15',
			data   : {
				userAccess : 'remove',
				aclUserId : usrid,
				fkey : fkey().fkey
			},
			method  : 'POST',
			complete : finish
		});

		function finish ( resp, xhr ) {
			args.send('@' + args.parse()[0] + ' Rejected');
		}
	}
};

bot.addCommand({
	name : 'reject',
	fun  : reject.command,
	thisArg : reject,
	permissions : {
		del : 'NONE',
		use : 'OWNER'
	},
	description : 'Rejects a user\'s write request. PROBABLY DOES NOT WORK AT THE MOMENT'
});
}());