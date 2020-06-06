import nats from "node-nats-streaming";
import { TicketCreatedPublisher } from "./events/ticket-create-publisher";

console.clear();

const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", async () => {
  console.log("publisher connected to NATS");

  const publisher = new TicketCreatedPublisher(stan);

  try {
    await publisher.publish({
      id: "123",
      title: "concert",
      price: 20,
    });
  } catch (e) {
    console.log(e);
  }

  // stan.on("close", () => {
  //   console.log("NATS connection closed!");
  //   process.exit();
  // });

  // const data = JSON.stringify({
  //   id: "123",
  //   title: "concert",
  //   price: 20,
  // });

  // stan.publish("ticket:created", data, () => {
  //   console.log("Ticket:Created published");
  // });
});

process.on("SIGINT", () => stan.close());
process.on("SIGTERM", () => stan.close());
