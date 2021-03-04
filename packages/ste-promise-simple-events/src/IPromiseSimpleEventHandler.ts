import { IEventManagement } from "@tobydux/ste-core";

/**
 * Event handler function with a generic argument
 */

export interface IPromiseSimpleEventHandler<TArgs> {
  (args: TArgs, ev: IEventManagement): Promise<void>;
}
