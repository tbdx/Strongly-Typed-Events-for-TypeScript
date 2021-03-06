# Strongly Typed Events for your browser
Why not use Strongly Typed Events in your browser? We got a special package for
you that already contains all the files you need. You can even serve them from
a CDN for extra speed (or easy prototyping). The packae is UMD compatible.

[![Build Status](https://travis-ci.org/KeesCBakker/Strongly-Typed-Events-for-TypeScript.svg?branch=master)](https://travis-ci.org/KeesCBakker/Strongly-Typed-Events-for-TypeScript)
[![npm version](https://badge.fury.io/js/ste-browser.svg)](https://badge.fury.io/js/ste-core)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Code
Include the script from this NPM package or from a CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/ste-browser@latest/dist/strongly-typed-events.min.js"></script>
```
### Subscription is easy
Let's assume you have a clock, subscribing to events on it is easy:
```javascript
var clock = new Clock("Smu", 1000);

//log the ticks to the console - this is a signal event
clock.onTick.subscribe(function () {
    console.log("Tick!");
});

//log the sequence parameter to the console - this is a simple event
clock.onSequenceTick.subscribe(function (s) {
    console.log(`Sequence: ${s}`);
});

//log the name of the clock and the tick argument to the console - this is an event
clock.onClockTick.subscribe(function (c, n) {
    console.log(c.name + " ticked " + n + " times.");
});
```

### Creating events is also easy
We've created a dispatcher to help you propagate your events:
```javascript
function Clock(name, timeout) {

    var _this = this;
    var _ticks = 0;
    var _onTick = new SignalDispatcher();
    var _onSequenceTick = new SimpleEventDispatcher();
    var _onClockTick = new EventDispatcher();

    setInterval(function () {
        _ticks += 1;
        _onTick.dispatch();
        _onSequenceTick.dispatch(_ticks);
        _onClockTick.dispatch(_this, _ticks);
    }, timeout);

    Object.defineProperty(this, "name", {
        get: function () { return name; }
    });

    Object.defineProperty(this, "ticks", {
        get: function () { return _ticks; }
    });

    Object.defineProperty(this, "onTick", {
        get: function () { return _onTick.asEvent(); }
    });

    Object.defineProperty(this, "onSequenceTick", {
        get: function () { return _onSequenceTick.asEvent(); }
    });

    Object.defineProperty(this, "onClockTick", {
        get: function () { return _onClockTick.asEvent(); }
    });
}
```

## Usage
The package contains the following scripts:

- Events that are modeled after .Net with a `sender` and `argument`. 
    - dist/ste-events.js
    - dist/ste-events.min.js
    - dist/ste-promise-events.js
    - dist/ste-promise-events.min.js<br/><br/>
- A simpler version of the `ste-event`-event. No sender, just an argument.
    - dist/ste-simple-events.js
    - dist/ste-simple-events.min.js
    - dist/ste-promise-simple-events.js
    - dist/ste-promise-simple-events.min.js<br/><br/>
- A signal is even simpler, it is just a callback for when you need to be alerted without any scope.
    - dist/ste-signals.js
    - dist/ste-signals.min.js
    - dist/ste-promise-signals.js
    - dist/ste-promise-signals.min.js<br/><br/>
- All objects to build and use events:
    - dist/strongly-typed-events.js
    - dist/strongly-typed-events.min.js<br/><br/>
- Want to build your own style of events? You can use the dispatcher and other base classes for our core project:
    - dist/ste-core.js
    - dist/ste-core.min.js

## CDN
You want to use a CDN? Great!

|What|Link|
|----|----|
|All event types|https://cdn.jsdelivr.net/npm/ste-browser@latest/dist/strongly-typed-events.min.js|
|Events|https://cdn.jsdelivr.net/npm/ste-browser@latest/dist/ste-events.min.js|
|Events with Promise|https://cdn.jsdelivr.net/npm/ste-browser@latest/dist/ste-promise-events.min.js|
|Simple Events|https://cdn.jsdelivr.net/npm/ste-browser@latest/dist/ste-simple-events.min.js|
|Simple Events with Promise|https://cdn.jsdelivr.net/npm/ste-browser@latest/dist/ste-promise-simple-events.min.js|
|Signals|https://cdn.jsdelivr.net/npm/ste-browser@latest/dist/ste-signals.min.js|
|Signals with Promise|https://cdn.jsdelivr.net/npm/ste-browser@latest/dist/ste-promise-signals.min.js|
|Core|https://cdn.jsdelivr.net/npm/ste-browser/dist/strongly-typed-events.min.js|

Every link comes with a `.map`. If you need a specific version, just include after
`ste-browser` (like `ste-browser@1.3` will serve you version 1.3 with the latest 
patches). Like a non-minified version, just remove `.min` from the link.


## Packages
The project is separated into multiple packages, so you only need
to include what you need. We have the following packages:

|Package|Description|
|-------|-----------|
|<a href="https://www.npmjs.com/package/ste-core">`ste-core`</a>|Package that contains all the building blocks for the creation of events. The dispatcher implementation is its main hero.|
|<a href="https://www.npmjs.com/package/ste-events">`ste-events`</a> or <a href="https://www.npmjs.com/package/ste-promise-events">`ste-promise-events`</a>|Events that are modeled after .Net with a `sender` and `argument`. If you use typescript, you can leverage the support for generics and get strongly typed code.|
|<a href="https://www.npmjs.com/package/ste-simple-events">`ste-simple-events`</a> or <a href="https://www.npmjs.com/package/ste-promise-simple-events">`ste-promise-simple-events`</a>|A simpler version of the `ste-event`-event. No sender, just an argument.|
|<a href="https://www.npmjs.com/package/ste-signals">`ste-signals`</a> or <a href="https://www.npmjs.com/package/ste-promise-signals">`ste-promise-signals`</a>|A signal is even simpler, it is just a callback for when you need to be alerted without any scope.|
|<a href="https://www.npmjs.com/package/strongly-typed-events">`strongly-typed-events`</a>|This package includes everything.|
|<a href="https://www.npmjs.com/package/ste-browser">`ste-browser`</a>|Helps to host events in the browser.|
<br/>

## Maintenance
This project is maintained by <a href="https://keestalkstech.com/">Kees C. Bakker</a>.