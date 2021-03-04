import { IEventManagement } from "@tobydux/ste-core";

/**
 * Event handler function with a generic argument
 */

export interface ISimpleEventHandler<TArgs> {
  (args: TArgs, ev: IEventManagement): void;
}
