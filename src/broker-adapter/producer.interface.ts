import { Message } from './message';

export interface IProducer {
    produce<T extends Message>(queue: string, message: T): void;
}
