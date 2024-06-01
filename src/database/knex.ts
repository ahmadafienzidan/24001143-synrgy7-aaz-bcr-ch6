import { knex } from "knex";
import { Model } from "objection";
import knexConfig from "../../knexfile";

console.log("Initializing Knex instance");

const knexInstance = knex(knexConfig.development);

Model.knex(knexInstance);

console.log("Knex instance initialized and Model bound");

export default knexInstance;
