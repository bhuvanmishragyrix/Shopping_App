import OrderEntry from "./OrderEntry";
import Order from "./Order";
import Shop from "./Shop";
import Customer from "./Customer";

class Receipt {
    orderEntries: OrderEntry[];
    totalAmount: number;
    shopName: string;
    shopAddress: string;
    shopGSTNumber: string;

    customerName: string;

    customerPhone: number;

    constructor(order: Order, shop: Shop, customer: Customer) {
        this.orderEntries = order.getEntries();
        this.totalAmount = order.getTotal();
        this.shopName = shop.getShopName();
        this.shopAddress = shop.getShopAddress();
        this.shopGSTNumber = shop.getShopGSTNumber();
        this.customerName = customer.name;
        this.customerPhone = customer.phone;
    }
}

export default Receipt;