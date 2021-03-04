/*!
 * Strongly Typed Events for TypeScript
 * https://github.com/KeesCBakker/StronlyTypedEvents/
 * http://keestalkstech.com
 *
 * Copyright Kees C. Bakker / KeesTalksTech
 * Released under the MIT license
 */

var c = require("@tobydux/ste-core");
var m = require("@tobydux/ste-promise-events");

var expose = require("./expose");

expose({

    DispatcherBase: c.DispatcherBase,
    PromiseDispatcherBase: c.PromiseDispatcherBase,
    DispatcherWrapper: c.DispatcherWrapper,
    EventListBase: c.EventListBase,
    Subscription: c.Subscription,

    PromiseEventDispatcher: m.PromiseEventDispatcher,
    PromiseEventHandlingBase: m.PromiseEventHandlingBase,
    PromiseEventList: m.PromiseEventList
});