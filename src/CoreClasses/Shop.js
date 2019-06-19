"use strict";
exports.__esModule = true;
var Shop = /** @class */ (function () {
    function Shop(name, address, gstNumber) {
        var _this = this;
        this.getShopName = function () {
            return _this.name;
        };
        this.getShopAddress = function () {
            return _this.address;
        };
        this.getShopGSTNumber = function () {
            return _this.gstNumber;
        };
        this.name = name;
        this.address = address;
        this.gstNumber = gstNumber;
    }
    return Shop;
}());
exports["default"] = Shop;
