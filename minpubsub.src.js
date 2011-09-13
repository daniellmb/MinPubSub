/*!
* MinPubSub
* Copyright(c) 2011 Daniel Lamb <daniellmb.com>
* MIT Licensed
*/

(function(d){

	// the topic/subscription hash
	var cache = d.c_ || {}; //check for "c_" cache for unit testing
	
	var publishTopic = function(/* String */ topic, /* String */ originalTopic, /* Array? */ args) {
	    console.log('publishing', topic);
		var subs = cache[topic],
			len = subs ? subs.length : 0
			obj = {
			    originalTopic: originalTopic /*,
			    subTopic: ..... */
			};

		//can change loop or reverse array if the order matters
		while(len--){
			subs[len].apply(obj, args || []);
		}
	}
	
	d.publish = function(/* String */ topic, /* Array? */ args){
	    var currentTopic;
		// summary: 
		//		Publish some data on a named topic.
		// topic: String
		//		The channel to publish on
		// args: Array?
		//		The data to publish. Each array item is converted into an ordered
		//		arguments on the subscribed functions. 
		//
		// example:
		//		Publish stuff on '/some/topic'. Anything subscribed will be called
		//		with a function signature like: function(a,b,c){ ... }
		//
		//		publish("/some/topic", ["a","b","c"]);
		currentTopic = topic;
		while ( currentTopic.length > 0 ) {
		    publishTopic(currentTopic, topic, args);
		    currentTopic = currentTopic.substring(0, currentTopic.lastIndexOf('/'));
		}
		
	};

	d.subscribe = function(/* String */ topic, /* Function */ callback){
		// summary:
		//		Register a callback on a named topic.
		// topic: String
		//		The channel to subscribe to
		// callback: Function
		//		The handler event. Anytime something is publish'ed on a 
		//		subscribed channel, the callback will be called with the
		//		published array as ordered arguments.
		//
		// returns: Array
		//		A handle which can be used to unsubscribe this particular subscription.
		//	
		// example:
		//		subscribe("/some/topic", function(a, b, c){ /* handle data */ });

		if(!cache[topic]){
			cache[topic] = [];
		}
		cache[topic].push(callback);
		return [topic, callback]; // Array
	};

	d.unsubscribe = function(/* Array */ handle, /* Function? */ callback){
		// summary:
		//		Disconnect a subscribed function for a topic.
		// handle: Array
		//		The return value from a subscribe call.
		// example:
		//		var handle = subscribe("/some/topic", function(){});
		//		unsubscribe(handle);
		
		var subs = cache[callback ? handle : handle[0]],
			callback = callback || handle[1],
			len = subs ? subs.length : 0;
		
		while(len--){
			if(subs[len] === callback){
				subs.splice(len, 1);
			}
		}
	};

})(this);