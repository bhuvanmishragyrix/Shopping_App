"use strict";
exports.__esModule = true;
var UICustomerDetails_1 = require("./UIClasses/UICustomerDetails");
var UIShopDetails_1 = require("./UIClasses/UIShopDetails");
var UIOrderDetails_1 = require("./UIClasses/UIOrderDetails");
var UIReceipt_1 = require("./UIClasses/UIReceipt");
var Receipt_1 = require("./CoreClasses/Receipt");
var uICustomerDetails = new UICustomerDetails_1["default"]();
var customer;
var uIShopDetails = new UIShopDetails_1["default"]();
var shop;
var uiOrderDetails = new UIOrderDetails_1["default"]();
var order;
uICustomerDetails.displayUIToEnterCustomerDetailsAndStoreInCustomer()
    .then(function () {
    customer = uICustomerDetails.returnCustomer();
    return uIShopDetails.displayUIToEnterShopDetailsAndStoreInShop();
})
    .then(function () {
    shop = uIShopDetails.returnShop();
    return uiOrderDetails.getOrder();
})
    .then(function () {
    order = uiOrderDetails.returnOrder();
    var receipt = new Receipt_1["default"](order, shop, customer);
    new UIReceipt_1["default"](receipt);
});
