import { Model, ModelObject } from "objection";

export class UsersModel extends Model {
  id!: string;
  name!: string;
  email!: string;
  password!: string;
  role!: "customer" | "admin" | "superadmin";
  createdAt!: string;
  updatedAt!: string;

  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    const CarsModel = require("./cars.model");

    return {
      carsCreated: {
        relation: Model.HasManyRelation,
        modelClass: CarsModel,
        join: {
          from: "users.id",
          to: "cars.createdBy",
        },
      },
      carsUpdated: {
        relation: Model.HasManyRelation,
        modelClass: CarsModel,
        join: {
          from: "users.id",
          to: "cars.updatedBy",
        },
      },
      carsDeleted: {
        relation: Model.HasManyRelation,
        modelClass: CarsModel,
        join: {
          from: "users.id",
          to: "cars.deletedBy",
        },
      },
    };
  }
}

export type Users = ModelObject<UsersModel>;
