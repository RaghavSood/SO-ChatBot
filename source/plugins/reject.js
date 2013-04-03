( function() {
	var reject = {
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
						userAccess : 'remove',
						aclUserId : msg,
						fkey : fkey().fkey
					},
					method  : 'POST',
					complete : finish
				});
			}

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