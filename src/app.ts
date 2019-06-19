import UtilModule from './Util/Util';
import UICustomerDetails from './UIClasses/UICustomerDetails';
import UIShopDetails from './UIClasses/UIShopDetails';
import UIOrderDetails from './UIClasses/UIOrderDetails';
import UIReceipt from './UIClasses/UIReceipt';
import Receipt from './CoreClasses/Receipt';

let uICustomerDetails = new UICustomerDetails();
let customer;
let uIShopDetails = new UIShopDetails();
let shop;
let uiOrderDetails = new UIOrderDetails();
let order;
uICustomerDetails.displayUIToEnterCustomerDetailsAndStoreInCustomer()
  .then(() => {
    customer = uICustomerDetails.returnCustomer();
    return uIShopDetails.displayUIToEnterShopDetailsAndStoreInShop();
  })
  .then(() => {
    shop = uIShopDetails.returnShop();
    return uiOrderDetails.getOrder();
  })
  .then(() => {
    order = uiOrderDetails.returnOrder();
    let receipt = new Receipt(order, shop, customer);

    new UIReceipt(receipt);
  })
