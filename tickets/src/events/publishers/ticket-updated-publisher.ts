import { Publisher, Subjects, TicketUpdatedEvent } from "@git-tix/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
