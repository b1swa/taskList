import Fastify from "fastify";
import cors from "@fastify/cors";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_DB_URI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const Task = mongoose.model(
  "Task",
  new mongoose.Schema({
    title: String,
    description: String,
    status: String,
  }),
);

const fastify = Fastify();

fastify.register(cors, {
  origin: "*",
});

fastify.get("/tasks", async (request, reply) => {
  const tasks = await Task.find();
  reply.send(tasks);
});

fastify.post("/tasks", async (request, reply) => {
  const task = new Task(request.body);
  await task.save();
  reply.send(task);
});

fastify.put("/tasks/:id", async (request, reply) => {
  const task = await Task.findByIdAndUpdate(request.params.id, request.body, {
    new: true,
  });
  reply.send(task);
});

fastify.delete("/tasks/:id", async (request, reply) => {
  await Task.findByIdAndDelete(request.params.id);
  reply.send({ message: "Task deleted" });
});

fastify.listen({ port: 8000 }, (err, address) => {
  if (err) throw err;
  console.log(`server listening on port:8000`);
});
