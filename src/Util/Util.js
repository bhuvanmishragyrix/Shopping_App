"use strict";
exports.__esModule = true;
var readline = require('readline');
var Util = /** @class */ (function () {
    function Util() {
        var _this = this;
        this.printToTerminalAndWaitForResponse = function (question) {
            return new Promise(function (resolve, reject) {
                _this.rl.question(question, function (answer) {
                    resolve(answer);
                    _this.rl.close();
                });
            });
        };
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    return Util;
}());
exports["default"] = Util;
