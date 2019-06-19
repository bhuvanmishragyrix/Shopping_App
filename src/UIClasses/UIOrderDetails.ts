import Util from '../Util/Util';
import Order from '../CoreClasses/Order';
import Item from '../CoreClasses/Item';
import OrderEntry from '../CoreClasses/OrderEntry';

class UIOrderDetails {
    order: Order;
    index: number = 0;

    getOrder: any = () => {

        console.log("getOrder Called!", ++this.index);

        let itemName: string, itemQuantity: number;

        new Util().printToTerminalAndWaitForResponse("Enter Item Name :")
            .then((ans: string) => {

                console.log("Reached here, ", this.index);

                if (ans !== 'Done') {
                    itemName = ans;

                    return new Util().printToTerminalAndWaitForResponse("Enter Item Quantity :")
                }

            })
            .then((ans: string) => {
                console.log("Reached second then!");

                itemQuantity = Number(ans);

                this.constructEntryAndAdd(itemName, itemQuantity);
                this.getOrder();
            });


    }

    constructEntryAndAdd = (itemName: string, itemQuantity: number) => {
        let item = new Item(itemName);
        let orderEntry = new OrderEntry(item, itemQuantity);
        this.order = new Order();
        this.order.addEntry(orderEntry);
    }

    returnOrder = () => {
        return this.order;
    }
}

export default UIOrderDetails;