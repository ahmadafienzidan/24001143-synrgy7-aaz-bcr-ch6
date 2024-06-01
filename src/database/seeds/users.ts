import { Knex } from "knex";
import * as bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    // SUPER ADMIN
    { id: uuidv4(), name: "SuperAdmin1", email: "superadmin1@binar.com", password: await bcrypt.hash("superadmin1", 10), role: "superadmin", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
    { id: uuidv4(), name: "SuperAdmin2", email: "superadmin2@binar.com", password: await bcrypt.hash("superadmin2", 10), role: "superadmin", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
    { id: uuidv4(), name: "SuperAdmin3", email: "superadmin3@binar.com", password: await bcrypt.hash("superadmin3", 10), role: "superadmin", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },

    // ADMIN
    { id: uuidv4(), name: "Admin1", email: "admin1@binar.com", password: await bcrypt.hash("admin1", 10), role: "admin", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
    { id: uuidv4(), name: "Admin2", email: "admin2@binar.com", password: await bcrypt.hash("admin2", 10), role: "admin", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
    { id: uuidv4(), name: "Admin3", email: "admin3@binar.com", password: await bcrypt.hash("admin3", 10), role: "admin", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },

    // CUST
    { id: uuidv4(), name: "Customer1", email: "customer1@binar.com", password: await bcrypt.hash("customer1", 10), role: "customer", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
    { id: uuidv4(), name: "Customer2", email: "customer2@binar.com", password: await bcrypt.hash("customer2", 10), role: "customer", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
    { id: uuidv4(), name: "Customer3", email: "customer3@binar.com", password: await bcrypt.hash("customer3", 10), role: "customer", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
    { id: uuidv4(), name: "Customer4", email: "customer4@binar.com", password: await bcrypt.hash("customer4", 10), role: "customer", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
    { id: uuidv4(), name: "Customer5", email: "customer5@binar.com", password: await bcrypt.hash("customer5", 10), role: "customer", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
  ]);
}
