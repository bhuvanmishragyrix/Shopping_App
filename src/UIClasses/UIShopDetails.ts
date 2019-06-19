import Util from '../Util/Util';
import Shop from '../CoreClasses/Shop';

class UIShopDetails {

    shop: Shop;

    displayUIToEnterShopDetailsAndStoreInShop: any = () => {

        let shopName: string, shopAddress: string, shopGST: string;

        new Util().printToTerminalAndWaitForResponse("Enter the name of the shop :")
            .then((ans: string) => {
                shopName = ans;

                return new Util().printToTerminalAndWaitForResponse('Enter the address of the customer :')
            })
            .then((ans: string) => {
                shopAddress = ans;

                return new Util().printToTerminalAndWaitForResponse('Enter the GST number of the customer :')
            })
            .then((ans: string) => {
                shopGST = ans;

                this.shop = new Shop(shopName, shopAddress, shopGST);

            });

    }

    returnShop = () => {
        return this.shop;
    }
}

export default UIShopDetails;