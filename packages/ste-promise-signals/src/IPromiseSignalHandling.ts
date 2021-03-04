import { IBaseEventHandling } from '@tobydux/ste-core';
import { IPromiseSignalHandler } from './IPromiseSignalHandler';

/**
 * Indicates the object is capable of handling named signals.
 */

export interface IPromiseSignalHandling
    extends IBaseEventHandling<IPromiseSignalHandler> {
}
