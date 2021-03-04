import { ISubscribable } from "@tobydux/ste-core";
import { IPromiseEventHandler } from "./IPromiseEventHandler";

/**
 * Models an event with a generic sender and generic argument.
 */

export interface IPromiseEvent<TSender, TArgs>
  extends ISubscribable<IPromiseEventHandler<TSender, TArgs>> {
}
