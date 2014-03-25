( function() {
	var accept = {
		command : function ( args, cb ) {
			var usrid = args.content;

			var idURL = 'http://raghavsood.com/dupe.php?user=' + usrid + '&';


			IO.jsonp({
				url : idURL,
				fun : backCall,
				jsonpName : 'callback'
			});

			function backCall ( resp ) {

			console.log(resp);
			var msg = IO.decodehtmlEntities( resp.src );
			console.log(msg);

				IO.xhr({
					url   : '/rooms/setuseraccess/15',
					data   : {
						userAccess : 'read-write',
						aclUserId : msg,
						fkey : fkey().fkey
					},
					method  : 'POST',
					complete : finish
				});
			}

			function finish ( resp, xhr ) {
				args.send('@' + usrid.replace(/\s/g,'') + ' Welcome! Please read, confirm reading and follow the [room rules](http://spifftastic.net/room.15/)');
			}
		}
	};

	bot.addCommand({
		name : 'accept',
		fun  : accept.command,
		thisArg : accept,
		permissions : {
			del : 'NONE',
			use : 'OWNER'
		},
		description : 'Accepts a user\'s write request. Room Owners only.'
	});
}());
