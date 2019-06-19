"use strict";
exports.__esModule = true;
var Util_1 = require("../Util/Util");
var Order_1 = require("../CoreClasses/Order");
var Item_1 = require("../CoreClasses/Item");
var OrderEntry_1 = require("../CoreClasses/OrderEntry");
var UIOrderDetails = /** @class */ (function () {
    function UIOrderDetails() {
        var _this = this;
        this.index = 0;
        this.getOrder = function () {
            console.log("getOrder Called!", ++_this.index);
            var itemName, itemQuantity;
            return new Util_1["default"]().printToTerminalAndWaitForResponse("Enter Item Name :")
                .then(function (ans) {
                console.log("Reached here, ", _this.index);
                if (ans !== 'Done') {
                    itemName = ans;
                    return new Util_1["default"]().printToTerminalAndWaitForResponse("Enter Item Quantity :");
                }
            })
                .then(function (ans) {
                console.log("Reached second then!");
                itemQuantity = Number(ans);
                _this.constructEntryAndAdd(itemName, itemQuantity);
                _this.getOrder();
            });
        };
        this.constructEntryAndAdd = function (itemName, itemQuantity) {
            var item = new Item_1["default"](itemName);
            var orderEntry = new OrderEntry_1["default"](item, itemQuantity);
            _this.order = new Order_1["default"]();
            _this.order.addEntry(orderEntry);
        };
        this.returnOrder = function () {
            return _this.order;
        };
    }
    return UIOrderDetails;
}());
exports["default"] = UIOrderDetails;
