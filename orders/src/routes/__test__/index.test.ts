import request from "supertest";
import { app } from "../../app";
import { Order } from "../../models/order";
import { Ticket } from "../../models/ticket";

const buildticket = async () => {
  const ticket = Ticket.build({
    title: "concert",
    price: 20,
  });

  await ticket.save();
  return ticket;
};

it("fetches orders for a particular user", async () => {
  // create 3 tickets
  const ticket1 = await buildticket();
  const ticket2 = await buildticket();
  const ticket3 = await buildticket();

  // create 2 users
  const user1 = global.signin();
  const user2 = global.signin();

  // create one order as user1
  await request(app)
    .post("/api/orders")
    .set("Cookie", user1)
    .send({ ticketId: ticket1.id })
    .expect(201);

  // create  2 orders as user2
  const { body: order1 } = await request(app)
    .post("/api/orders")
    .set("Cookie", user2)
    .send({ ticketId: ticket2.id })
    .expect(201);

  const { body: order2 } = await request(app)
    .post("/api/orders")
    .set("Cookie", user2)
    .send({ ticketId: ticket3.id })
    .expect(201);

  // make request to get orders for user2
  const response = await request(app)
    .get("/api/orders")
    .set("Cookie", user2)
    .expect(200);

  // make sure we only got the orders for u  ser2
  expect(response.body.length).toEqual(2);

  expect(response.body[0].id).toEqual(order1.id);
  expect(response.body[1].id).toEqual(order2.id);
});
