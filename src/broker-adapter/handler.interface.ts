import { Message } from './message';

export interface IHandler<T extends Message> {
    handle(message: T): boolean;
}
