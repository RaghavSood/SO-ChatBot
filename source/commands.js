(function () {
"use strict";
var catLastRun;
var catGifLastRun;
var catCount = 0;
var unicornLastRun;

var commands = {

	birthday : function (args) {
		return '[Happy Birthday!](https://www.youtube.com/watch?v=ey22gpY7KUE)';
	},

	unicorn : function( args ) {

		var currentRun = new Date().getTime();

		console.log(unicornLastRun);
		console.log(currentRun);

		if(!bot.isOwner(args.get('user_id'))) {
			if((currentRun - unicornLastRun) < 15*60*1000) {
				console.log('in if');
				return 'This command may only be run once every 15 minutes by peasants';

			} else {
				console.log('in else');
				unicornLastRun = currentRun;
			}
		}

		var picArray = ['http://images4.fanpop.com/image/photos/24100000/Robot-Unicorn-Wallpaper-unicorns-24171150-1920-1080.jpg', 'http://socialwell.org/wp-content/uploads/2013/01/Follow-Your-Dreams-unicorns.jpg', 'http://amyfsheridan.files.wordpress.com/2009/08/unicorn_hi-res.jpg', 'http://wallpoper.com/images/00/38/85/88/unicorn_00388588.png', 'http://i1.squidoocdn.com/resize/squidoo_images/590/draft_lens14867451module129742301photo_1288371777Robot_Unicorn_Attack_by_z#.jpg'];

		var rand = picArray[Math.floor(Math.random() * picArray.length)];

		args.send(rand);
	},

	skeet : function(args) {
		var jokeArray = [
			'Jon Skeet is immutable. If something\'s going to change, it\'s going to have to be the rest of the universe.',
			'Anonymous methods and anonymous types are really all called Jon Skeet. They just don\'t like to boast.',
			'Jon Skeet\'s code doesn\'t follow a coding convention. It *is* the coding convention.',
			'Jon Skeet doesn\'t have performance bottlenecks. He just makes the universe wait its turn.',
			'Users don\'t mark Jon Skeet\'s answers as accepted. The universe accepts them out of a sense of truth and justice.',
			'Jon Skeet does not refer to himself in the third person. Jon skeet is always the first person, regardless of who is speaking about him.',
			'Jon Skeet can divide by zero.',
			'Jon Skeet coded his last project entirely in Microsoft Paint, just for the challenge.',
			'When Jon Skeet\'s code fails to compile, the compiler apologizes.',
			'Jon Skeet does not use revision control software. None of his code has ever needed revision.',
			'There are two types of programmers: good programmers, and those that are not Jon Skeet.',
			'Jon Skeet has already written a book about C# 5.0. It\'s currently sealed up. In three years, Anders Hejlsberg is going to open the book to see if the language design team got it right.',
			'Jon Skeet can recite Pi. Backwards.',
			'When Jon Skeet points to null, null quakes in fear.',
			'Jon Skeet *is* the traveling salesman. Only he knows the shortest route.',
			'Jon Skeet took the red pill and the blue pill, and can phase-shift in and out of the Matrix at will.',
			'Jon Skeet has root access to your system.',
			'Jon Skeet knows the air speed velocity of an unladen swallow, both African and European.',
			'If Jon Skeet posts a duplicate question on StackOverflow, the original question will be closed as duplicate.',
			'When Jon Skeet gives a method an argument, the method loses.',
			'When invoking one of Jon Skeet\'s callbacks, the runtime adds \'please\'.',
			'Jon Skeet can believe it\'s not butter.',
			'Jon Skeet can throw an exception further than anyone else, and in less time.',
			'Jon Skeet doesn\'t need a debugger. He stares down the bug until the code confesses.',
			'If you have 10,000 reputation and Jon Skeet has 10,000 reputation, Jon Skeet has more reputation than you.',
			'God said: \'Let there be light,\' only to see what Jon Skeet was up to.',
			'Jon Skeet\'s heart rate is 5 GHz.',
			'Jon Skeet has the key to open source, he just doesn\'t want to close it.',
			'When Jon Skeet is programming the Garbage Collector rests. The objects know when to destroy themselves.',
			'When Jon Skeet throws an exception, nothing can catch it.',
			'Jon Skeet can solve the travelling salesman in O(1).',
			'Jon Skeet can do paired programming with himself.',
			'When Jon Skeet saves a file the file thanks him.'
		];

		var randJoke = jokeArray[Math.floor(Math.random() * jokeArray.length)];

		args.send(randJoke);
	},

	flip : function( args ) {
		return '(╯°□°）╯︵ ┻━┻';
	},

	docs : function( args ) {
		//var docparserURL = 'http://android-manual.herokuapp.com/' + args.content + '&';
		var docparserURL = 'http://rsood.in/docsParser.php?name=' + args.content + '&';
		IO.jsonp({
			url : docparserURL,
			fun : mdCall,
			jsonpName : 'callback'
		});

		function mdCall ( resp ) {
			console.log(resp);
			var msg = IO.decodehtmlEntities( resp.src );
			console.log(msg);
			if(msg === '-1') {
				args.reply('Class not found');
			} else {
				args.reply(msg);
			}
		}
	},

	catgif : function( args ) {
		var cats = "http://rsood.in/catgif.php";


		var currentRun = new Date().getTime();

		console.log(catGifLastRun);
		console.log(currentRun);

		if(!bot.isOwner(args.get('user_id'))) {
			if((currentRun - catGifLastRun) < 20*60*1000) {
				console.log('in if');
				return 'This command may only be run once every 20 minutes by peasants';

			} else {
				console.log('in else');
				catGifLastRun = currentRun;
			}
		}

	IO.jsonp({
		url : cats,
		fun : gotURL,
		jsonpName : 'callback'
	});



	function gotURL ( resp ) {
		console.log(resp);
		catCount = catCount + 1;
		var msg = IO.decodehtmlEntities( resp.src );
		args.send(msg);
	}
	},

	meow : function( args ) {
	
		var currentRun = new Date().getTime();

		console.log(catLastRun);
		console.log(currentRun);

		if(!bot.isOwner(args.get('user_id'))) {
			if((currentRun - catLastRun) < 20*60*1000) {
				console.log('in if');
				return 'This command may only be run once every 15 minutes by peasants';

			} else {
				console.log('in else');
				catLastRun = currentRun;
			}
		}

		var cats = "http://rsood.in/cat.php";

	IO.jsonp({
		url : cats,
		fun : gotURL,
		jsonpName : 'callback'
	});

	function gotURL ( resp ) {
		console.log(resp);
		catCount = catCount + 1;
		var msg = IO.decodehtmlEntities( resp.src );
		args.send(msg);
	}
	},

	cat : function( args ) {
	
		var currentRun = new Date().getTime();

		console.log(catLastRun);
		console.log(currentRun);

		if(!bot.isOwner(args.get('user_id'))) {
			if((currentRun - catLastRun) < 20*60*1000) {
				console.log('in if');
				return 'This command may only be run once every 15 minutes by peasants';

			} else {
				console.log('in else');
				catLastRun = currentRun;
			}
		}

		var cats = "http://rsood.in/cat.php";

	IO.jsonp({
		url : cats,
		fun : gotURL,
		jsonpName : 'callback'
	});

	function gotURL ( resp ) {
		console.log(resp);
		catCount = catCount + 1;
		var msg = IO.decodehtmlEntities( resp.src );
		args.send(msg);
	}
	},

	whoami : function(args) {
		return 'I\'m a semi sentient being maintained by RaghavSood. Useful for patrolling the room, getting instant information and serving up cats.' 
	},

	//MY COMMANDS END HERE

	help : function ( args ) {
		if ( args && args.length ) {

			var cmd = bot.getCommand( args );
			if ( cmd.error ) {
				return cmd.error;
			}

			var desc = cmd.description || 'No info is available';

			return args + ': ' + desc;
		}

		return 'https://github.com/RaghavSood/SO-ChatBot/wiki/' +
		       'Interacting-with-the-bot';
	},

	listen : function ( msg ) {
		return bot.callListeners( msg ) || bot.giveUpMessage( msg );
	},

	eval : function ( msg ) {
		return bot.eval( msg );
	},

	live : function () {
		if ( !bot.stopped ) {
			return 'I\'m not dead! Honest!';
		}
		bot.continue();
		return 'And on this day, you shall paint eggs for a giant bunny.';
	},

	die : function () {
		if ( bot.stopped ) {
			return 'Kill me once, shame on you, kill me twice...';
		}
		bot.stop();
		return 'You killed me!';
	},

	refresh : function() {
		window.location.reload();
    },

	forget : function ( args ) {
		var name = args.toLowerCase(),
			cmd = bot.getCommand( name );

		if ( cmd.error ) {
			return cmd.error;
		}

		if ( !cmd.canDel(args.get('user_id')) ) {
			return 'You are not authorized to delete the command ' + args;
		}

		cmd.del();
		return 'Command ' + name + ' forgotten.';
	},

	ban : function ( args ) {
		var ret = [];
		if ( args.content ) {
			args.parse().forEach( ban );
		}
		else {
			ret = Object.keys( bot.banlist ).filter( Number ).map( format );
		}

		return ret.join( ' ' ) || 'Nothing to show/do.';

		function ban ( usrid ) {
			var id = Number( usrid ),
				msg;
			if ( isNaN(id) ) {
				id = args.findUserid( usrid.replace(/^@/, '') );
			}

			if ( id < 0 ) {
				msg = 'Cannot find user {0}.';
			}
			else if ( bot.isOwner(id) ) {
				msg = 'Cannot mindjail owner {0}.';
			}
			else if ( bot.banlist.contains(id) ) {
				msg = 'User {0} already in mindjail.';
			}
			else {
				bot.banlist.add( id );
				msg = 'User {0} added to mindjail.';
			}

			ret.push( msg.supplant(usrid) );
		}

		function format ( id ) {
			var user = bot.users[ id ],
				name = user ? user.name : '?';

			return '{0} ({1})'.supplant( id, name );
		}
	},

	unban : function ( args ) {
		var ret = [];
		args.parse().forEach( unban );

		return ret.join( ' ' );

		function unban ( usrid ) {
			var id = Number( usrid ),
				msg;
			if ( isNaN(id) ) {
				id = args.findUserid( usrid.replace(/^@/, '') );
			}

			if ( id < 0 ) {
				msg = 'Cannot find user {0}.'
			}
			else if ( !bot.banlist.contains(id) ) {
				msg = 'User {0} isn\'t in mindjail.';
			}
			else {
				bot.banlist.remove( id );
				msg = 'User {0} freed from mindjail!';
			}

			ret.push( msg.supplant(usrid) );
		}
	},

	//a lesson on semi-bad practices and laziness
	//chapter III
	info : function ( args ) {
		if ( args.content ) {
			return commandFormat( args.content );
		}

		var info = bot.info;
		return timeFormat() + ', ' + statsFormat();

		function commandFormat ( commandName ) {
			var cmd = bot.getCommand( commandName );

			if ( cmd.error ) {
				return cmd.error;
			}
			var ret =  'Command {name}, created by {creator}'.supplant( cmd );

			if ( cmd.date ) {
				ret += ' on ' + cmd.date.toUTCString();
			}

			if ( cmd.invoked ) {
				ret += ', invoked ' + cmd.invoked + ' times';
			}
			else {
				ret += ' but hasn\'t been used yet';
			}

			return ret;
		}

		function timeFormat () {
			var format = 'I awoke on {0} (that\'s about {1} ago)',

				awoke = info.start.toUTCString(),
				ago = Date.timeSince( info.start );

			return format.supplant( awoke, ago );
		}

		function statsFormat () {
			var ret = [],
				but = ''; //you'll see in a few lines

			if ( info.invoked ) {
				ret.push( 'got invoked ' + info.invoked + ' times' );
			}
			if ( info.learned ) {
				but = 'but ';
				ret.push( 'learned ' + info.learned + ' commands' );
			}
			if ( info.forgotten ) {
				ret.push( but + 'forgotten ' + info.forgotten + ' commands' );
			}
			if ( Math.random() < 0.15 ) {
				ret.push( 'teleported ' + Math.rand(100) + ' goats' );
			}
			//Cat Count
			if(catCount===0) {
				//ret.push('displayed ' + catCount + ' cats');
			}
			else if(catCount===1) {
				ret.push('displayed ' + catCount + ' cat');
			} 
			else if(catCount>1) {
				ret.push('displayed ' + catCount + ' cats');
			}
			//Cat Count

			return ret.join( ', ' ) || 'haven\'t done anything yet!';
		}
	},

	jquery : function jquery ( args ) {
		//check to see if more than one thing is requested
		var parsed = args.parse( true );
		if ( parsed.length > 1 ) {
			return parsed.map( jquery ).join( ' ' );
		}

		var props = args.trim().replace( /^\$/, 'jQuery' ),

			parts = props.split( '.' ), exists = false,
			url = props, msg;
		//parts will contain two likely components, depending on the input
		// jQuery.fn.prop -  parts[0] = jQuery, parts[1] = prop
		// jQuery.prop    -  parts[0] = jQuery, parts[1] = prop
		// prop           -  parts[0] = prop
		//
		//jQuery API urls works like this:
		// if it's on the jQuery object, then the url is /jQuery.property
		// if it's on the proto, then the url is /property
		//
		//so, the mapping goes like this:
		// jQuery.fn.prop => prop
		// jQuery.prop    => jQuery.prop if it's on jQuery
		// prop           => prop if it's on jQuery.prototype,
		//                     jQuery.prop if it's on jQuery

		bot.log( props, parts, '/jquery input' );

		//user gave something like jQuery.fn.prop, turn that to just prop
		// jQuery.fn.prop => prop
		if ( parts.length === 3 ) {
			parts = [ parts[2] ];
		}

		//check to see if it's a property on the jQuery object itself
		// jQuery.prop => jQuery.prop
		if ( parts[0] === 'jQuery' && jQuery[parts[1]] ) {
			exists = true;
		}

		//user wants something on the prototype?
		// prop => prop
		else if ( parts.length === 1 && jQuery.prototype[parts[0]] ) {
			url = parts[ 0 ];
			exists = true;
		}

		//user just wanted a property? maybe.
		// prop => jQuery.prop
		else if ( jQuery[parts[0]] ) {
			url = 'jQuery.' + parts[0];
			exists = true;
		}

		if ( exists ) {
			msg = 'http://api.jquery.com/' + url;
		}
		else {
			msg = 'http://api.jquery.com/?s=' + encodeURIComponent( args );
		}
		bot.log( msg, '/jquery link' );

		return msg;
	},

	choose : function ( args ) {
		var opts = args.parse().filter( conjunctions ),
			len = opts.length;

		bot.log( opts, '/choose input' );

		//5% chance to get a "none-of-the-above"
		if ( Math.random() < 0.05 ) {
			return len === 2 ? 'Neither' : 'None of the above';
		}
		//5% chance to get "all-of-the-above"
		else if ( Math.random() < 0.05 ) {
			return len === 2 ? 'Both!' : 'All of the above';
		}

		return opts[ Math.floor(Math.random() * len) ];

		//TODO: add support for words like "and", e.g.
		// skip and jump or cry and die
		//  =>
		// "skip and jump", "cry and die"
		function conjunctions ( word ) {
			return word !== 'or';
		}
	},

	user : function ( args ) {
		var props = args.parse(),
			usrid = props[ 0 ] || args.get( 'user_id' ),
			id = usrid;

		//check for searching by username
		if ( !(/^\d+$/.test(usrid)) ) {
			id = args.findUserid( usrid );

			if ( id < 0 ) {
				return 'Can\'t find user ' + usrid + ' in this chatroom.';
			}
		}

		args.directreply( 'http://stackoverflow.com/users/' + id );
	},

	listcommands : function ( args ) {
		var commands = Object.keys( bot.commands ),

			valid = /^(\d+|$)/.test( args.content ),
			page = Number( args.content ) || 0,
			pageSize = 50,

			total = Math.ceil( Math.max(0, commands.length) / pageSize ) - 1;

		if ( page > total || !valid ) {
			return [
				args.codify( 'StackOverflow: Could not access page' ),
				'This unicorn has killed itself because of you',
				'Accordion to recent surveys, you suck'
			].random();
		}

		var start = page * pageSize,
			end = start + pageSize,

			ret = commands.slice( start, end ).join( ', ' );

		return ret + ' (page {0}/{1})'.supplant( page, total );;
	},

	purgecommands : function ( args ) {
		var id = args.get( 'user_id' );
		Object.keys( bot.commands ).map( mapper ).forEach( del );

		return 'The deed has been done.';

		function mapper ( cmdName ) {
			return bot.commands[ cmdName ];
		}
		function del ( cmd ) {
			if ( cmd.learned && cmd.canDel(id) ) {
				cmd.del();
			}
		}
	}
};

commands.define = (function () {
var cache = Object.create( null );

//cb is for internal usage by other commands/listeners
return function ( args, cb ) {
	//we already defined it, grab from memory
	//unless you have alzheimer
	//in which case, you have bigger problems
	if ( cache[args] ) {
		return finish( cache[args] );
	}

	IO.jsonp.ddg( 'define ' + args.toString(), finishCall );

	//the duck talked back! either the xhr is complete, or the hallucinations
	// are back
	function finishCall ( resp ) {
		var url = resp.AbstractURL,
			def = resp.AbstractText;

		bot.log( url, def, '/define finishCall input' );

		//Webster returns the definition as
		// wordName definition: the actual definition
		// instead of just the actual definition
		if ( resp.AbstractSource === 'Merriam-Webster' ) {
			def = def.replace( args + ' definition: ', '' );
			bot.log( def, '/define finishCall webster' );
		}

		if ( !def ) {
			def = 'Could not find definition for ' + args +
				'. Trying Urban Dictionary';
			bot.getCommand( 'urban' ).exec( args );
		}
		else {
			def = args + ': ' + def; //problem?
			//the chat treats ( as a special character, so we escape!
			def += ' [\\(source\\)](' + url + ')';
			//add to cache
			cache[ args ] = def;
		}
		bot.log( def, '/define finishCall output' );

		finish( def );
	}

	function finish ( def ) {
		if ( cb && cb.call ) {
			cb( def );
		}
		else {
			args.directreply( def );
		}
	}
};
}());
commands.define.async = true;

//cb is for internal usage by other commands/listeners
commands.norris = function ( args, cb ) {
	var chucky = 'http://api.icndb.com/jokes/random';

	IO.jsonp({
		url : chucky,
		fun : finishCall,
		jsonpName : 'callback'
	});

	function finishCall ( resp ) {
		var msg;

		if ( resp.type !== 'success' ) {
			msg = 'Chuck Norris is too awesome for this API. Try again.';
		}
		else {
			msg = IO.decodehtmlEntities( resp.value.joke );
		}

		if ( cb && cb.call ) {
			cb( msg );
		}
		else {
			args.reply( msg );
		}
	}
};
commands.norris.async = true;

//cb is for internal blah blah blah
commands.urban = (function () {
var cache = Object.create( null );

return function ( args, cb ) {
	if ( !args.length ) {
		return 'Y U NO PROVIDE ARGUMENTS!?';
	}

	if ( cache[args] ) {
		return finish( cache[args] );
	}

	IO.jsonp({
		url : 'http://api.urbandictionary.com/v0/define',
		data : {
			term : args.content
		},
		jsonpName : 'callback',
		fun : complete
	});

	function complete ( resp ) {
		var msg;

		if ( resp.result_type === 'no_results' ) {
			msg = 'Y U NO MAEK SENSE!!!???!!?11 No results for ' + args;
		}
		else {
			msg = formatTop( resp.list[0] );
		}
		cache[ args ] = msg;

		finish( msg );
	}

	function finish ( def ) {
		if ( cb && cb.call ) {
			cb( def );
		}
		else {
			args.reply( def );
		}
	}

	function formatTop ( top ) {
		//replace [tag] in definition with links
		var def = top.definition.replace( /\[(\w+)\]/g, formatTag );

		return args.link( top.word, top.permalink ) + ' ' + def;
	}
	function formatTag ( $0, $1 ) {
		var href =
			'http://urbandictionary.com/define.php?term=' +
			encodeURIComponent( $1 )

		return args.link( $0, href );
	}
};
}());
commands.urban.async = true;

var parse = commands.parse = (function () {
var macros = {
	who : function () {
		return [].pop.call( arguments ).get( 'user_name' );
	},

	someone : function () {
		var presentUsers = document.getElementById( 'sidebar' )
			.getElementsByClassName( 'present-user' );

		//the chat keeps a low opacity for users who remained silent for long,
		// and high opacity for those who recently talked
		var active = [].filter.call( presentUsers, function ( user ) {
			return Number( user.style.opacity ) >= 0.5;
		}),
		user = active[ Math.floor(Math.random() * (active.length-1)) ];

		if ( !user ) {
			return 'Nobody! I\'m all alone :(';
		}

		return user.getElementsByTagName( 'img' )[ 0 ].title;
	},

	digit : function () {
		return Math.floor( Math.random() * 10 );
	},

	encode : function ( string ) {
		return encodeURIComponent( string );
	},

	//random number, min <= n <= max
	//treats non-numeric inputs like they don't exist
	rand : function ( min, max ) {
		min = Number( min );
		max = Number( max );
		return Math.rand( min, max );
	}
};
var macroRegex = /(?:.|^)\$(\w+)(?:\((.*?)\))?/g;

//extraVars is for internal usage via other commands
return function parse ( args, extraVars ) {
	var msgObj = ( args.get && args.get() ) || {};
	extraVars = extraVars || {};
	bot.log( args, extraVars, '/parse input' );

	return args.replace( macroRegex, replaceMacro );

	function replaceMacro ( $0, filler, fillerArgs ) {
		//$$ makes a literal $
		if ( $0.startsWith('$$') ) {
			return $0.slice( 1 );
		}

		//include the character that was matched in the $$ check, unless
		// it's a $
		var ret = '';
		if ( $0[0] !== '$' ) {
			ret = $0[ 0 ];
		}

		var macro = findMacro( filler );

		//not found? bummer.
		if ( !macro ) {
			return filler;
		}

		bot.log( macro, filler, fillerArgs, '/parse replaceMacro' );
		//when the macro is a function
		if ( macro.apply ) {
			ret += macro.apply( null, parseMacroArgs(fillerArgs) );
		}
		//when the macro is simply a substitution
		else {
			ret += macro;
		}
		return ret;
	}

	function parseMacroArgs ( macroArgs ) {
		bot.log( macroArgs, '/parse parseMacroArgs' );
		if ( !macroArgs ) {
			return [];
		}

		//parse the arguments, split them into individual arguments,
		// and trim'em (to cover the case of "arg,arg" and "arg, arg")
		return (
			parse( macroArgs, extraVars )
				.split( ',' ).invoke( 'trim' ).concat( args )
		);
		//this is not good code
	}

	function findMacro ( macro ) {
		var user = bot.users[ args.get('user_id') ],
			container = [ macros, msgObj, user, extraVars ].first( hasMacro );

		return ( container || {} )[ macro ];

		function hasMacro ( obj ) {
			return obj.hasOwnProperty( macro );
		}
	}
};
}());

commands.tell = (function () {
var invalidCommands = { tell : true, forget : true };

return function ( args ) {
	var props = args.parse();
	bot.log( args.valueOf(), props, '/tell input' );

	var replyTo = props[ 0 ],
		cmdName = props[ 1 ],
		cmd;

	if ( !replyTo || !cmdName ) {
		return 'Invalid /tell arguments. Use /help for usage info';
	}

	cmdName = cmdName.toLowerCase();
	cmd = bot.getCommand( cmdName );
	if ( cmd.error ) {
		return cmd.error;
	}

	if ( invalidCommands.hasOwnProperty(cmdName) ) {
		return 'Command ' + cmdName + ' cannot be used in /tell.';
	}

	if ( !cmd.canUse(args.get('user_id')) ) {
		return 'You do not have permission to use command ' + cmdName;
	}

	//check if the user's being a fag
	if ( /^@/.test(replyTo) ) {
		return 'Don\'t be annoying, drop the @, nobody likes a double-ping.';
	}

	//check if the user wants to reply to a message
	var direct = false,
		extended = {};
	if ( /^:?\d+$/.test(replyTo) ) {
		extended.message_id = replyTo.replace( /^:/, '' );
		direct = true;
	}
	else {
		extended.user_name = replyTo;
	}

	var msgObj = Object.merge( args.get(), extended );
	var cmdArgs = bot.Message(
		//the + 2 is for the two spaces after each arg
		// /tell replyTo1cmdName2args
		args.slice( replyTo.length + cmdName.length + 2 ).trim(),
		msgObj );
	bot.log( cmdArgs, '/tell calling ' + cmdName );

	//if the command is async, it'll accept a callback
	if ( cmd.async ) {
		cmd.exec( cmdArgs, callFinished );
	}
	else {
		callFinished( cmd.exec(cmdArgs) );
	}

	function callFinished ( res ) {
		if ( !res ) {
			return;
		}

		if ( direct ) {
			cmdArgs.directreply( res );
		}
		else {
			cmdArgs.reply( res );
		}
	}
};
}());

commands.mdn = function ( args, cb ) {
	IO.jsonp.google(
		args.toString() + ' site:developer.mozilla.org', finishCall );

	function finishCall ( resp ) {
		if ( resp.responseStatus !== 200 ) {
			finish( 'Something went on fire; status ' + resp.responseStatus );
			return;
		}

		var result = resp.responseData.results[ 0 ];
		bot.log( result, '/mdn result' );
		finish( result.url );
	}

	function finish ( res ) {
		if ( cb && cb.call ) {
			cb( res );
		}
		else {
			args.reply( res );
		}
	}
};
commands.mdn.async = true;

var descriptions = {
	ban : 'Bans user(s) from using me. Lacking arguments, prints the banlist.' +
		' `/ban [usr_id|usr_name, [...]`',
	choose : '"Randomly" choose an option given. `/choose option0 option1 ...`',
	define : 'Fetches definition for a given word. `/define something`',
	die  : 'Kills me :(',
	eval : 'Forwards message to javascript code-eval',
	forget : 'Forgets a given command. `/forget cmdName`',
	get : 'Grabs a question/answer link (see online for thorough explanation)',
	help : 'Fetches documentation for given command, or general help article.' +
		' `/help [cmdName]`',
	info : 'Grabs some stats on my current instance or a command.' +
		' `/info [cmdName]`',
	jquery : 'Fetches documentation link from jQuery API. `/jquery what`',
	listcommands : 'Lists commands. `/listcommands [page=0]`',
	listen : 'Forwards the message to my ears (as if called without the /)',
	live : 'Resurrects me (:D) if I\'m down',
	mdn : 'Fetches mdn documentation. `/mdn what`',
	norris : 'Random chuck norris joke!',
	parse : 'Returns result of "parsing" message according to the my mini' +
		'-macro capabilities (see online docs)',
	purgecommands : 'Deletes all user-taught commands.',
	refresh : 'Reloads the browser window I live in',
	regex : 'Executes a regex against text input. `/regex text regex [flags]`',
	tell : 'Redirect command result to user/message.' +
		' /tell `msg_id|usr_name cmdName [cmdArgs]`',
	unban : 'Removes a user from my mindjail. `/unban usr_id|usr_name`',
	urban : 'Fetches UrbanDictionary definition. `/urban something`',
	user : 'Fetches user-link for specified user. `/user usr_id|usr_name`',
	cat : 'Returns a static, normal cat picture',
	catgif : 'Returns an animated cat picture',
	whoami : 'Details about the Bot',
	docs : 'Retrieves the link to the page for the given class in the documentation. `/docs <classNameProperlyCased>`',
	flip : 'Flip a table',
	unicorn : 'Shows a unicorn image'
};

//only allow owners to use certain commands
var privilegedCommands = {
	die : true, live  : true,
	ban : true, unban : true,
	refresh : true, purgecommands : true,
	reject : true
};
//voting-based commands for unpriviledged users
var communal = {
	die : false
};

Object.iterate( commands, function ( cmdName, fun ) {
	var cmd = {
		name : cmdName,
		fun  : fun,
		permissions : {
			del : 'NONE',
			use : privilegedCommands[ cmdName ] ? 'OWNER' : 'ALL'
		},
		description : descriptions[ cmdName ],
		async : commands[ cmdName ].async
	};

	if ( communal[cmdName] ) {
		cmd = bot.CommunityCommand( cmd );
	}
	bot.addCommand( cmd );
});

}());
