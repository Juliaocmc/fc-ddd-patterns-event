import CustomerCreatedEvent from "../customer-created.event";
import Customer from "../../entity/customer";
import SendConsoleLogCustomerCreated1Handler from "./send-console-log-customer-created-1.handler";
import SendConsoleLogCustomerCreated2Handler from "./send-console-log-customer-created-2.handler";
import SendConsoleLogChangeAddressHandler from "./send-console-log-change-address.handler";
import CustomerChangeAddressHandle from "../customer-change-address.handle";
import Address from "../../value-object/address";


describe("Handle CustomerCreatedEvent", () => {
    it("should execute SendConsoleLog1Handler", () => {
        const customer = new Customer("123", "Jão do teste")
        const event = new CustomerCreatedEvent(customer);
        const handler = new SendConsoleLogCustomerCreated1Handler();
        const spy = jest.spyOn(handler, 'handle');

        handler.handle(event);

        expect(spy).toHaveBeenCalled();

    });

    it("should execute SendConsoleLog2Handler", () => {
        const customer = new Customer("123", "Jão do teste")
        const event = new CustomerCreatedEvent(customer);
        const handler = new SendConsoleLogCustomerCreated2Handler();
        const spy = jest.spyOn(handler, 'handle');

        handler.handle(event);

        expect(spy).toHaveBeenCalled();

    });

    it('should execute SendConsoleLogChangeAddressHandler', () => {
        const customer = new Customer("123", "Jão do teste")
        const address = new Address("Street 1", 1, "Zipcode 1", "City 1");
        customer.changeAddress(address)
        const customerEvent = {
            id: customer.id,
            name: customer.name,
            address: address
        }
        const event = new CustomerChangeAddressHandle(customerEvent);
        const handler = new SendConsoleLogChangeAddressHandler();
        const spy = jest.spyOn(handler, 'handle');

        handler.handle(event);

        expect(spy).toHaveBeenCalled

    });
})