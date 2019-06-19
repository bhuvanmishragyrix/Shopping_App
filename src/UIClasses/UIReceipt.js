"use strict";
exports.__esModule = true;
var UIReceipt = /** @class */ (function () {
    function UIReceipt(receipt) {
        this.printReceiptOnScreen = function (receipt) {
            console.log("Receipt :");
            console.log("Thank you for shopping with us " + receipt.customerName + " (" + receipt.customerPhone + ")");
            console.log("Name of the shop : " + receipt.shopName);
            console.log("Address of the shop : " + receipt.shopAddress);
            console.log("GST number of the shop : " + receipt.shopGSTNumber);
            receipt.orderEntries.forEach(function (el) {
                console.log(el.item.name + " : " + el.quantity + " --- " + el.item.price * el.quantity);
            });
            console.log("Order Total : " + receipt.totalAmount);
        };
        this.printReceiptOnScreen(receipt);
    }
    return UIReceipt;
}());
exports["default"] = UIReceipt;
