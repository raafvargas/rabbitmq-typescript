import { Message } from './message';
import { IHandler } from './handler.interface';

export interface ISubscriber<T extends Message> {
    subscribe(queue: string, onMessage: (msg: T | null) => boolean): void;
    subscribeWithHandler(queue: string, hander: IHandler<T>): void;
}
