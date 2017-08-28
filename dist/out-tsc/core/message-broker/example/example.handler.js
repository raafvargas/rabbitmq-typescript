"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExampleHandler = (function () {
    function ExampleHandler() {
    }
    ExampleHandler.prototype.handle = function (message) {
        console.log(message.content);
        return true;
    };
    return ExampleHandler;
}());
exports.ExampleHandler = ExampleHandler;
//# sourceMappingURL=example.handler.js.map