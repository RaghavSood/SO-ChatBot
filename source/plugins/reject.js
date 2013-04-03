( function() {
var reject = {
command : function ( args, cb ) {
		var id = args.findUserid(args.parse()[0]);
		console.log(id);
		
		IO.xhr({
			url   : '/rooms/setuseraccess/15',
			data   : {
				userAccess : 'remove',
				aclUserId : id,
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