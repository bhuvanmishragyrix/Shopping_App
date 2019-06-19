"use strict";
exports.__esModule = true;
var Util_1 = require("../Util/Util");
var Shop_1 = require("../CoreClasses/Shop");
var UIShopDetails = /** @class */ (function () {
    function UIShopDetails() {
        var _this = this;
        this.displayUIToEnterShopDetailsAndStoreInShop = function () {
            var shopName, shopAddress, shopGST;
            return new Util_1["default"]().printToTerminalAndWaitForResponse("Enter the name of the shop :")
                .then(function (ans) {
                shopName = ans;
                return new Util_1["default"]().printToTerminalAndWaitForResponse('Enter the address of the customer :');
            })
                .then(function (ans) {
                shopAddress = ans;
                return new Util_1["default"]().printToTerminalAndWaitForResponse('Enter the GST number of the customer :');
            })
                .then(function (ans) {
                shopGST = ans;
                _this.shop = new Shop_1["default"](shopName, shopAddress, shopGST);
                return new Promise(function (resolve) {
                    resolve();
                });
            });
        };
        this.returnShop = function () {
            return _this.shop;
        };
    }
    return UIShopDetails;
}());
exports["default"] = UIShopDetails;
