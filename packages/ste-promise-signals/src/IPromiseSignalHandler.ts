import { IEventManagement } from '@tobydux/ste-core';

/**
 * Event handler function without arguments
 */

export interface IPromiseSignalHandler {
    (ev: IEventManagement): Promise<void>;
}
