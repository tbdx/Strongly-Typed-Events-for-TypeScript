import { IEventManagement } from "@tobydux/ste-core";

/**
 * Event handler function without arguments
 */
export interface ISignalHandler {
  (ev: IEventManagement): void;
}
