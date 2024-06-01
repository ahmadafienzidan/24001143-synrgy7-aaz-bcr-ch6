//src/models/cars.model.ts

import { Model, ModelObject } from "objection";
import { UsersModel } from "./users.model";

export class CarsModel extends Model {
  id!: string;
  plate!: string;
  manufacture!: string;
  model!: string;
  image!: string;
  rentPerDay!: number;
  capacity!: number;
  description!: string;
  transmission!: string;
  available!: boolean;
  type!: string;
  year!: string;
  options!: string[];
  specs!: string[];
  createdBy!: string;
  updatedBy!: string;
  deletedBy?: string;
  createdAt!: string;
  updatedAt!: string;
  deletedAt?: string;

  static get tableName() {
    return "cars";
  }

  static get relationMappings() {
    return {
      createdByUser: {
        relation: Model.BelongsToOneRelation,
        modelClass: UsersModel,
        join: {
          from: "cars.createdBy",
          to: "users.id",
        },
      },
      updatedByUser: {
        relation: Model.BelongsToOneRelation,
        modelClass: UsersModel,
        join: {
          from: "cars.updatedBy",
          to: "users.id",
        },
      },
      deletedByUser: {
        relation: Model.BelongsToOneRelation,
        modelClass: UsersModel,
        join: {
          from: "cars.deletedBy",
          to: "users.id",
        },
      },
    };
  }
}

export type Cars = ModelObject<CarsModel>;
