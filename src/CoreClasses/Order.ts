import OrderEntry from './OrderEntry';

class Order {
    orderEntries: OrderEntry[] = [];
    orderTotal: number = 0;

    addEntry = (orderEntry: OrderEntry) => {
        this.orderEntries.push(orderEntry);
    }

    getTotal = () => {
        this.orderEntries.forEach((el) => {
            this.orderTotal = this.orderTotal + el.item.price * el.quantity;
        })

        return this.orderTotal;
    }

    getEntries = () => {
        return this.orderEntries;
    }
}

export default Order;