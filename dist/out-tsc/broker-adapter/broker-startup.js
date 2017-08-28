"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rabbit_subscriber_interface_1 = require("./rabbitmq/rabbit-subscriber.interface");
var BrokerStartup = (function () {
    function BrokerStartup(queue, handler) {
        this.queue = queue;
        this.handler = handler;
        this.name = 'consumer';
    }
    BrokerStartup.prototype.Run = function () {
        var _this = this;
        this.subscriber = new rabbit_subscriber_interface_1.RabbitSubscriber();
        return new Promise(function (reject, resolve) {
            try {
                _this.subscriber.subscribeWithHandler(_this.queue, _this.handler);
            }
            catch (err) {
                console.error(err);
            }
            resolve();
        });
    };
    return BrokerStartup;
}());
exports.BrokerStartup = BrokerStartup;
//# sourceMappingURL=broker-startup.js.map