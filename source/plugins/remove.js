( function() {
	var remove = {
		command : function ( args, cb ) {

			function trim1 (str) {
   				return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
			}

			var customMessage = ' ';

			if(args.content.indexOf('-m') !== -1) {


				var message = args.content;

				var myarr = message.split("-m");

				var usrid = trim1(myarr[0]);

				customMessage = trim1(myarr[1]);

				console.log('If Contents: ' + message + ' usrid: ' + usrid + ' customMessage: ' + customMessage);

			} else {
				usrid = args.content;
				console.log('Else usrid: ' + usrid + ' customMessage: ' + customMessage);
			}

			var idURL = 'http://raghavsood.com/dupe.php?user=' + usrid + '&';


			IO.jsonp({
				url : idURL,
				fun : backCall,
				jsonpName : 'callback'
			});

			function backCall ( resp ) {

				console.log(resp);
				var msg = IO.decodehtmlEntities( resp.src );
				if(bot.isOwner(msg)) {
					args.directreply('You can\'t remove owners');
					return;
				}
				console.log(msg);

				IO.xhr({
					url   : '/rooms/setuseraccess/15',
					data   : {
						userAccess : 'remove',
						aclUserId : msg,
						fkey : fkey().fkey
					},
					method  : 'POST',
					complete : finish
				});
			}

			function finish ( resp, xhr ) {
				args.send('User ' + usrid.replace(/\s/g,'') + ' removed');
			}
		}
	};

	bot.addCommand({
		name : 'remove',
		fun  : remove.command,
		thisArg : remove,
		permissions : {
			del : 'NONE',
			use : 'OWNER'
		},
		description : 'remove a user\'s from the access page without messaging them. Room Owners only. Usage: `/remove <username-As on profile>`'
	});
}());