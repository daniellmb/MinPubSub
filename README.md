MinPubSub
=========

An ultra minimalist pub/sub framework weighing in at only **198 bytes** gzipped. Created by rewritting Peter Higgins jQuery plugin to be self contained.

### Features

- Supports
	- publish
	- subscribe
	- unsubscribe

- Tested Environments
	- ES5
	- Node.js
	- Rhino
	- Development (console, etc.) 
	- Safari 4
	- Google Chrome 5
	- Internet Explorer 5 - 9
	- iPhone Safari
	- iPad Safari
	- Firefox 3
	- Firefox 4
	- Opera 10.61

### How to use

```javascript
	//subscribe to a topic
	var handle = subscribe("/some/topic", function(msg){
		console.log(msg);
	});

	//publish topic a few times
	publish("/some/topic", ["first time"]);
	publish("/some/topic", ["second time"]);

	//unsubscribe from the topic
	unsubscribe(handle);

	//subscriber is no longer listening to the topic
	publish("/some/topic", ["message will not be logged"]);
```

### Documentation 

##### Options:

If you don't want these methods added to the window object simply modify the imediate function to pass the JavaScript object of your choosing.

##### Methods:

- **publish** *(`String` topic, `Array?` args)*

	- summary: 
		- Publish some data on a named topic.
	
	- topic: `String`
		- The channel to publish on
	
	- args: `Array?`
		- Optional data to publish. Each array item is converted into ordered arguments on the subscribed functions. 
	
	- example:
		- Publish stuff on '/some/topic'. Anything subscribed will be called with a function signature like: function(a,b,c){ ... }

		  ```javascript
		  publish("/some/topic", ["a","b","c"]);
		  ```

- **subscribe** *(`String` topic, `Function` callback)*

	- summary:
		- Register a callback on a named topic.

	- topic: `String`
		- The channel to subscribe to

	- callback: `Function`
		- The handler event. Anytime something is publish'ed on a subscribed channel, the callback will be called with the published array as ordered arguments.

	- returns: `Array`
		- A handle which can be used to unsubscribe this particular subscription.

	- example:

		  ```javascript
		  subscribe("/some/topic", function(a, b, c){ /* handle data */ });
		  ```

- **unsubscribe** *(`Array` handle)*

	- summary:
		- Disconnect a subscribed function for a topic.

	- handle: `Array`
		- The return value from a subscribe call.
	
	- example:

		```javascript
		var handle = subscribe("/some/topic", function(){});
		unsubscribe(handle);
		  ```


### License 

WTFPL - DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
Version 2, December 2004

Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

0. You just DO WHAT THE FUCK YOU WANT TO. 