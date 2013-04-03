( function() {
	var reject = {
		command : function ( args, cb ) {
			var customMessage = ' ';

			if(args.content.indexOf('-m') !== -1) {


				var message = args.content;

				var myarr = message.split("-m");

				var usrid = myarr[0];

				customMessage = myarr[1];

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
				args.send('@' + usrid.replace(/\s/g,'') + ' Rejected ' + customMessage);
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
		description : 'Rejects a user\'s write request. Room Owners only. Usage: `/reject <username-As on profile> -m <custom message (optional)>`'
	});
}());