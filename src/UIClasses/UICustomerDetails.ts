import Util from '../Util/Util';
import Customer from '../CoreClasses/Customer';

class UICustomerDetails {

    customer: Customer;
    displayUIToEnterCustomerDetailsAndStoreInCustomer: any = () => {

        let customerName: string, customerPhone: number;

        new Util().printToTerminalAndWaitForResponse("Enter the name of the customer :")
            .then((ans: string) => {
                customerName = ans;

                return new Util().printToTerminalAndWaitForResponse('Enter the phone number of the customer :')
            })
            .then((ans: string) => {
                customerPhone = Number(ans);

                this.customer = new Customer(customerName, customerPhone);
            });
    }

    returnCustomer = () => {
        return this.customer;
    }
}

export default UICustomerDetails;