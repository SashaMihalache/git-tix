import { Publisher, Subjects, TicketCreatedEvent } from "@git-tix/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
