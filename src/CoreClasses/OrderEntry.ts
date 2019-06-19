import Item from './Item';

class OrderEntry {
    item: Item;
    quantity: number;

    constructor(item: Item, quantity: number) {
        this.item = item;
        this.quantity = quantity;
    }
}

export default OrderEntry;