"use strict";
exports.__esModule = true;
var Util_1 = require("../Util/Util");
var Customer_1 = require("../CoreClasses/Customer");
var UICustomerDetails = /** @class */ (function () {
    function UICustomerDetails() {
        var _this = this;
        this.displayUIToEnterCustomerDetailsAndStoreInCustomer = function () {
            var customerName, customerPhone;
            return new Util_1["default"]().printToTerminalAndWaitForResponse("Enter the name of the customer :")
                .then(function (ans) {
                customerName = ans;
                return new Util_1["default"]().printToTerminalAndWaitForResponse('Enter the phone number of the customer :');
            })
                .then(function (ans) {
                customerPhone = Number(ans);
                _this.customer = new Customer_1["default"](customerName, customerPhone);
                return new Promise(function (resolve) {
                    resolve();
                });
            });
        };
        this.returnCustomer = function () {
            return _this.customer;
        };
    }
    return UICustomerDetails;
}());
exports["default"] = UICustomerDetails;
