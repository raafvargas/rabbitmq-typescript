import { Message } from './message';
import { IHandler } from './handler.interface';
import { ISubscriber } from './subscriber.interface';
import { IStartup } from '../infrastructure/initializable.interface';
import { RabbitSubscriber } from './rabbitmq/rabbit-subscriber.interface';

export class BrokerStartup<T extends Message> implements IStartup {
    subscriber: ISubscriber<T>;
    name = 'consumer';

    constructor(private queue: string, private handler: IHandler<T>) {
    }

    Run(): Promise<any> {
        return new Promise<any>((reject, resolve) => {
            this.subscriber = new RabbitSubscriber<T>();
            this.subscriber.subscribeWithHandler(this.queue, this.handler);
            resolve();
        });
    }
}
