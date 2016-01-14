MinPubSub
=========

A micro publish/subscribe messaging framework, weighing in at only **198 bytes** gzipped. Created by rewriting Peter Higgins' jQuery plugin, MinPubSub is completely self contained with no external dependencies. Keep your projects loosely coupled with this powerful design pattern. Also available on [npm](https://www.npmjs.com/package/minpubsub).

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
	- Safari 4 - 5
	- Google Chrome 5 - 10
	- Internet Explorer 5 - 9
	- iPhone Safari
	- iPad Safari
	- Firefox 3 - 4
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

If you don't want these methods added to the window object simply modify the immediate function to pass in the JavaScript object of your choosing.

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

(The MIT License)

Copyright (c) 2011 Daniel Lamb <daniellmb.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
