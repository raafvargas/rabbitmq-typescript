"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var amqp = require("amqplib");
var env_1 = require("../../infrastructure/env");
var RabbitSubscriber = (function () {
    function RabbitSubscriber() {
    }
    RabbitSubscriber.prototype.subscribe = function (queue, onMessage) {
        amqp.connect(env_1.Env.messageBrokerAddress)
            .then(function (connection) {
            connection.createChannel()
                .then(function (channel) {
                channel.assertQueue(queue);
                channel.consume(queue, function (message) {
                    if (message) {
                        var body = JSON.parse(message.content.toString());
                        console.log(body);
                        if (body && onMessage(body)) {
                            channel.ack(message);
                        }
                    }
                });
            });
        });
    };
    RabbitSubscriber.prototype.subscribeWithHandler = function (queue, handler) {
        this.subscribe(queue, handler.handle);
    };
    return RabbitSubscriber;
}());
exports.RabbitSubscriber = RabbitSubscriber;
//# sourceMappingURL=rabbit-subscriber.interface.js.map