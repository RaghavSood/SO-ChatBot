(function () {
"use strict";
//welcomes new users with a link to the room rules

var seen = JSON.parse( localStorage.bot_users || '{}' );

var message = "Welcome to the Android chatroom! Please review the " +
		bot.adapter.link(
			"room rules",
			"http://mainerror.github.com/android-room-rules/" ) + ". " +
	"Please don't treat the room as tech support. " +
	"People who had default usernames, or use Chat or Stack " + 
	"Overflow solely for tech support will not be admitted.";

IO.register( 'userregister', function ( user, room ) {
	console.log('in welcome');
	//return;
	if ( Number(room) !== 15) { /* || seen[user.id] || bot.isOwner(user.id) ) {*/
		return;
	}

	seen[ user.id ] = true;
	localStorage.bot_users = JSON.stringify( seen );

	bot.adapter.out.add(
		bot.adapter.reply(user.name) + " " + message,
		room );
});
}());
