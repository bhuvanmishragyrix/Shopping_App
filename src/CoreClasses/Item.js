"use strict";
exports.__esModule = true;
var Item = /** @class */ (function () {
    function Item(name) {
        var _this = this;
        this.setNameAndPrice = function (name) {
            switch (name) {
                case 'Bread':
                    _this.name = 'Bread';
                    _this.price = 20;
                    break;
                case 'Milk':
                    _this.name = 'Milk';
                    _this.price = 25;
                    break;
            }
        };
        this.setNameAndPrice(name);
    }
    return Item;
}());
exports["default"] = Item;
