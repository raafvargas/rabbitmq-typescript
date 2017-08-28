"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message_1 = require("../../../broker-adapter/message");
var ExampleMessage = (function (_super) {
    __extends(ExampleMessage, _super);
    function ExampleMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ExampleMessage;
}(message_1.Message));
exports.ExampleMessage = ExampleMessage;
//# sourceMappingURL=example.message.js.map