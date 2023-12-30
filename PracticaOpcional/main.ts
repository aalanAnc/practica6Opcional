import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Mutation } from "./resolvers/mutation.ts";
import { typeDefs } from "./gql/schema.ts";
import mongoose from "npm:mongoose@8.0.0";
import { Query } from "./resolvers/query.ts";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

// connecto to MongoDB
const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

try { // Conexion con mongo DB
    MONGO_URL ? await mongoose.connect(MONGO_URL) : null
    console.log("Conexión exitosa a MongoDB");
} catch (error) {
    console.error("Error al conectar a MongoDB:", error);
}


const resolvers = {
    Mutation,
    Query
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server);
console.log(`Server ready at ${url}`);