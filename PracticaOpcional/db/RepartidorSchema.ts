import mongoose from "npm:mongoose@8.0.0";

const Schema = mongoose.Schema;

export type RepartidorModelType = mongoose.Document;

const RepartidorSchema = new Schema({
    username: { type: String, required: true, unique: true },
    orders: [{ type: Schema.Types.ObjectId, ref: "Pedido" }],
});


export const RepartidorModel = mongoose.model<RepartidorModelType>("Repartidor", RepartidorSchema);