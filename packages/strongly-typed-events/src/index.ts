/*!
 * Strongly Typed Events for TypeScript
 * https://github.com/KeesCBakker/StronlyTypedEvents/
 * http://keestalkstech.com
 *
 * Copyright Kees C. Bakker / KeesTalksTech
 * Released under the MIT license
 */

export {
    IEventManagement,
    ISubscribable,
    Subscription,
    IBaseEventHandling,
    DispatcherBase,
    DispatcherWrapper,
    EventListBase,
    EventManagement,
    IPropagationStatus,
    DispatchError,
    PromiseSubscription,
    ISubscription,
    PromiseDispatcherBase,
    HandlingBase,
} from "@tobydux/ste-core";

export {
    EventDispatcher,
    EventHandlingBase,
    EventList,
    NonUniformEventList,
    IEventHandling,
    IEvent,
    IEventHandler,
} from "@tobydux/ste-events";

export {
    SimpleEventDispatcher,
    SimpleEventHandlingBase,
    SimpleEventList,
    NonUniformSimpleEventList,
    ISimpleEventHandling,
    ISimpleEvent,
    ISimpleEventHandler,
} from "@tobydux/ste-simple-events";

export {
    SignalDispatcher,
    SignalHandlingBase,
    SignalList,
    ISignalHandling,
    ISignal,
    ISignalHandler,
} from "@tobydux/ste-signals";

export {
    IPromiseEventHandler,
    IPromiseEventHandling,
    IPromiseEvent,
    PromiseEventDispatcher,
    PromiseEventHandlingBase,
    PromiseEventList,
    NonUniformPromiseEventList,
} from "@tobydux/ste-promise-events";

export {
    IPromiseSignalHandling,
    IPromiseSignal,
    IPromiseSignalHandler,
    PromiseSignalDispatcher,
    PromiseSignalHandlingBase,
    PromiseSignalList,
} from "@tobydux/ste-promise-signals";

export {
    PromiseSimpleEventDispatcher,
    PromiseSimpleEventHandlingBase,
    PromiseSimpleEventList,
    NonUniformPromiseSimpleEventList,
    IPromiseSimpleEvent,
    IPromiseSimpleEventHandler,
    IPromiseSimpleEventHandling,
} from "@tobydux/ste-promise-simple-events";
