( function() {
	var userquality = {
		command : function ( args, cb ) {
			args.send('Placeholder for now');
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