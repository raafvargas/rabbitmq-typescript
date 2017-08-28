import { ExampleMessage } from './example.message';
import { IHandler } from '../../../broker-adapter/handler.interface';

export class ExampleHandler implements IHandler<ExampleMessage> {
    handle(message: ExampleMessage): boolean {
        console.log(message.content);
        return true;
    }
}
