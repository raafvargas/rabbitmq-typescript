import * as amqp from 'amqplib';
import { Message } from '../message';
import { Env } from '../../infrastructure/env';
import { IProducer } from '../producer.interface';

export class RabbitProducer implements IProducer {
    produce<T extends Message>(queue: string, message: T): void {
        amqp.connect(Env.messageBrokerAddress)
            .then(connection => {
                connection.createChannel()
                    .then(c => {
                        message.publishedAt = new Date();
                        const json = JSON.stringify(message);
                        c.assertQueue(queue);
                        c.sendToQueue(queue, new Buffer(json));
                    })
            })
    }
}
