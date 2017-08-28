"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var amqp = require("amqplib");
var env_1 = require("../../infrastructure/env");
var RabbitProducer = (function () {
    function RabbitProducer() {
    }
    RabbitProducer.prototype.produce = function (queue, message) {
        amqp.connect(env_1.Env.messageBrokerAddress)
            .then(function (connection) {
            connection.createChannel()
                .then(function (c) {
                message.publishedAt = new Date();
                var json = JSON.stringify(message);
                c.assertQueue(queue);
                c.sendToQueue(queue, new Buffer(json));
            });
        });
    };
    return RabbitProducer;
}());
exports.RabbitProducer = RabbitProducer;
//# sourceMappingURL=rabbit-producer.interface.js.map