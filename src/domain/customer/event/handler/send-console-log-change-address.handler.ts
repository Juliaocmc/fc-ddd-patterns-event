import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerChangeAddressHandle from "../customer-change-address.handle";

export default class SendConsoleLogChangeAddressHandler implements EventHandlerInterface<CustomerChangeAddressHandle> {

  async handle(event: CustomerChangeAddressHandle): Promise<void> {
    console.log(`Endereço do cliente: ${event.eventData.id}, ${event.eventData.name} alterado para: ${event.eventData.address}`);
  }
}