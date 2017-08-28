export const Env = {
    messageBrokerAddress: process.env['RABBITMQ_ADDRESS'] || 'amqp://guest:guest@localhost:5672'
}
