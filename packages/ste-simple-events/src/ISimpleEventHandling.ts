import { IBaseEventHandling } from "@tobydux/ste-core";
import { ISimpleEventHandler } from "./ISimpleEventHandler";

/**
 * Indicates the object is capable of handling named simple events.
 */

export interface ISimpleEventHandling<TArgs>
  extends IBaseEventHandling<ISimpleEventHandler<TArgs>> {
}
