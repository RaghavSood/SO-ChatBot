( function() {
	var userquality = {
		command : function ( args, cb ) {

			var args = msg.parse(),
			id = args[ 0 ];

			if ( !id ) {
				id = msg.get( 'user_id' );
			}
			else if ( !/^\d+$/.test(id) ) {
				id = msg.findUserid( extended ? id : args.slice().join(' ') );
			}

			if ( id < 0 ) {
				return 'User Elusio proved elusive.';
			}

			args.send('Placeholder for now' + id);
		}
	};

	bot.addCommand({
		name : 'userquality',
		fun  : userquality.command,
		thisArg : userquality,
		permissions : {
			del : 'NONE',
			use : 'ALL'
		},
		description : 'Reports userquality'
	});
}());