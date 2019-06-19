class Item {
    name: string;
    price: number;

    constructor(name: string) {
        this.setNameAndPrice(name);
    }

    setNameAndPrice = (name: string) => {
        switch (name) {
            case 'Bread':
                this.name = 'Bread';
                this.price = 20;
                break;
            case 'Milk':
                this.name = 'Milk';
                this.price = 25;
                break;
        }
    }
}

export default Item;