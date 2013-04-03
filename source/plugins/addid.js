( function() {
	var addid = {
		command : function ( args, cb ) {
			var id = Number( args.parse()[0] );

			IO.xhr({
				url   : '/rooms/setuseraccess/15',
				data   : {
					userAccess : 'read-write',
					aclUserId : id,
					fkey : fkey().fkey
				},
				method  : 'POST',
				complete : finish
			});

			function finish ( resp, xhr ) {
				args.send('Added [' + id + '](http://stackoverflow.com/users/' + id + ')' );
			}
		}
	};

	bot.addCommand({
		name : 'addid',
		fun  : addid.command,
		thisArg : addid,
		permissions : {
			del : 'NONE',
			use : 'OWNER'
		},
		description : 'Adds a user to the write list by ID. Room Owners only. Usage: `/addid userID`'
	});
}());