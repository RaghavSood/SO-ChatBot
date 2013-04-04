IO.register( 'input', function ( msgObj ) {
	var sentence = msgObj.content.toUpperCase();

	//for probably good reason, it didn't allow me to apply the optional
	// operator on beginnin-of-input, i.e. ^?
	//so we have to wrap the ^ in parens
	if ( /(^)?STOP[\.!\?]?$/.test(sentence) ) {
		bot.adapter.out.add( 'HAMMERTIME!', msgObj.room_id );
	}
	else if ( /(^)?HALT[\.!\?]?$/.test(sentence) ) {
		bot.adapter.out.add( 'http://i.qkme.me/3tnhjd.jpg', msgObj.room_id );
	}
	else if ( /(^)?@AndroidBot[\.!\?]?$/.test(sentence) ) {
		bot.adapter.out.add( 'Stop Pinging Me. I\'m a Bot for, Asimov\'s sake', msgObj.room_id );
	}
});
