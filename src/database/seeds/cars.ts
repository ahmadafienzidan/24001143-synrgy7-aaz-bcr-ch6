import { Knex } from "knex";
import { v4 as uuidv4 } from "uuid";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("cars").del();

  // Inserts seed entries
  await knex("cars").insert([
    {
      id: uuidv4(),
      plate: "B 1268 LH",
      manufacture: "Toyota",
      model: "Camry",
      image: "path/to/image1.jpg",
      rentPerDay: 300000,
      capacity: 5,
      description: "A comfortable midsize sedan.",
      transmission: "Automatic",
      available: true,
      type: "Sedan",
      year: "2020",
      options: ["Air Conditioning", "GPS", "Bluetooth"],
      specs: ["240 hp", "2.5L Engine"],
      createdBy: "3d3d57cc-a420-450d-a00d-040a15813458", // SuperAdmin 1
      updatedBy: "3d3d57cc-a420-450d-a00d-040a15813458", // SuperAdmin 1
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
    },
    {
      id: uuidv4(),
      plate: "L 50 CAN",
      manufacture: "Honda",
      model: "Civic",
      image: "path/to/image2.jpg",
      rentPerDay: 400000,
      capacity: 4,
      description: "A reliable and fuel-efficient compact car.",
      transmission: "Manual",
      available: true,
      type: "Compact",
      year: "2019",
      options: ["Air Conditioning", "Bluetooth"],
      specs: ["158 hp", "2.0L Engine"],
      createdBy: "54052e8f-1c3f-4357-853c-b25e3871ebff", // Admin 1
      updatedBy: "99c05737-735f-421e-bad4-48145c3d1da2", // Admin 2
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
    },
    {
      id: uuidv4(),
      plate: "AG 404 RH",
      manufacture: "Ford",
      model: "Mustang",
      image: "path/to/image3.jpg",
      rentPerDay: 1000000,
      capacity: 4,
      description: "A classic American muscle car.",
      transmission: "Automatic",
      available: false,
      type: "Sport",
      year: "2021",
      options: ["Air Conditioning", "GPS", "Bluetooth", "Leather Seats"],
      specs: ["450 hp", "5.0L V8 Engine"],
      createdBy: "3d3d57cc-a420-450d-a00d-040a15813458", //SuperAdmin 1
      updatedBy: "54052e8f-1c3f-4357-853c-b25e3871ebff", //Admin 1
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      deletedBy: "99c05737-735f-421e-bad4-48145c3d1da2", // Admin 2
      deletedAt: knex.fn.now(), // Example if Deleted (Soft Delete)
    },
  ]);
}
