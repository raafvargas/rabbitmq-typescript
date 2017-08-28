import * as os from 'os';
import { BrokerStartup } from './broker-adapter/broker-startup';
import { IStartup } from './infrastructure/initializable.interface';
import { ExampleHandler } from './core/message-broker/example/example.handler';

/// Producer
import { IProducer } from './broker-adapter/producer.interface';
import { ExampleMessage } from './core/message-broker/example/example.message';
import { RabbitProducer } from './broker-adapter/rabbitmq/rabbit-producer.interface';

const producer: IProducer = new RabbitProducer();
const servers: IStartup[] = new Array<IStartup>();

servers.push(new BrokerStartup('example-queue', new ExampleHandler()));

const initAll = (server: IStartup) => {
    console.log('%s Starting...', server.name);
    server.Run()
        .then(() => console.log('%s Started!', server.name))
        .catch((err) => console.log(err));
};

servers.forEach(initAll);

for (let i = 0; i < 10; i++) {
    const message = new ExampleMessage();
    message.content = {
        index: i
    };

    producer.produce<ExampleMessage>('example-queue', message);
}
