"use strict";
exports.__esModule = true;
var Order = /** @class */ (function () {
    function Order() {
        var _this = this;
        this.orderEntries = [];
        this.orderTotal = 0;
        this.addEntry = function (orderEntry) {
            _this.orderEntries.push(orderEntry);
        };
        this.getTotal = function () {
            _this.orderEntries.forEach(function (el) {
                _this.orderTotal = _this.orderTotal + el.item.price * el.quantity;
            });
            return _this.orderTotal;
        };
        this.getEntries = function () {
            return _this.orderEntries;
        };
    }
    return Order;
}());
exports["default"] = Order;
