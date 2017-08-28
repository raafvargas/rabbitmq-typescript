import * as amqp from 'amqplib';
import { Message } from 'amqplib';
import * as broker from '../message';
import { Env } from '../../infrastructure/env';
import { IHandler } from '../handler.interface';
import { ISubscriber } from '../subscriber.interface';
import { IStartup } from '../../infrastructure/initializable.interface';

export class RabbitSubscriber<T extends broker.Message> implements ISubscriber<T> {
    subscribe(queue: string, onMessage: (msg: T | null) => boolean): void {
        amqp.connect(Env.messageBrokerAddress)
            .then(connection => {
                var ok = connection.createChannel();
                ok.then(channel => {
                    channel.assertQueue(queue);
                    channel.consume(queue, message => {
                        if (message) {
                            const body = <T>JSON.parse(message.content.toString());
                            if (body && onMessage(body)) {
                                channel.ack(message);
                            }
                        }
                    });
                });
            });
    }

    subscribeWithHandler(queue: string, handler: IHandler<T>): void {
        this.subscribe(queue, handler.handle);
    }
}
