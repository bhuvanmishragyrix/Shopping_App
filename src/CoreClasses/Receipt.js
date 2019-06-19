"use strict";
exports.__esModule = true;
var Receipt = /** @class */ (function () {
    function Receipt(order, shop, customer) {
        this.orderEntries = order.getEntries();
        this.totalAmount = order.getTotal();
        this.shopName = shop.getShopName();
        this.shopAddress = shop.getShopAddress();
        this.shopGSTNumber = shop.getShopGSTNumber();
        this.customerName = customer.name;
        this.customerPhone = customer.phone;
    }
    return Receipt;
}());
exports["default"] = Receipt;
