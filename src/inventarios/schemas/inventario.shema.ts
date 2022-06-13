import * as mongoose from "mongoose";

export const InventarioSchema = new mongoose.Schema(
  {
    idProducto: { type: Number, required: true },
    movement: { type: String, required: true },
    date: { type: Date, required: true },
    nroInvoice: { type: String },
    description: { type: String },
    units: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
