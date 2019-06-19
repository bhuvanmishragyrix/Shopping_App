class Shop {
    name: string;
    address: string;
    gstNumber: string;

    constructor(name: string, address: string, gstNumber: string) {
        this.name = name;
        this.address = address;
        this.gstNumber = gstNumber;
    }

    getShopName = () => {
        return this.name;
    }

    getShopAddress = () => {
        return this.address;
    }

    getShopGSTNumber = () => {
        return this.gstNumber;
    }
}

export default Shop;