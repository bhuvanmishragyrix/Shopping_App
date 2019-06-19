import Receipt from "../CoreClasses/Receipt";

class UIReceipt {
    constructor(receipt: Receipt) {

        this.printReceiptOnScreen(receipt);
    }

    printReceiptOnScreen = (receipt: Receipt) => {
        console.log("Receipt :");
        console.log(`Thank you for shopping with us ${receipt.customerName} (${receipt.customerPhone})`);
        console.log(`Name of the shop : ${receipt.shopName}`);
        console.log(`Address of the shop : ${receipt.shopAddress}`);
        console.log(`GST number of the shop : ${receipt.shopGSTNumber}`);
        receipt.orderEntries.forEach((el) => {
            console.log(`${el.item.name} : ${el.quantity} --- ${el.item.price * el.quantity}`)
        });
        console.log(`Order Total : ${receipt.totalAmount}`);
    }
}

export default UIReceipt;