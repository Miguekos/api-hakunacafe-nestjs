import * as mongoose from "mongoose";

export const ProductoSchema = new mongoose.Schema(
  {
    idProducto: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    units: { type: Number, default: 0 },
    precioUnitario: { type: Number, default: 0 },
    saldoInicial: { type: Number, default: 0 },
    entrada: { type: Number, default: 0 },
    saldoFinal: { type: Number, default: 0 },
    costoDeVenta: { type: Number, default: 0 },
    precioVenta: { type: Number, default: 0 },
    stockMin: { type: Number, default: 0 },
    salidaDeInventario: { type: Number, default: 0 },
    diferencia: { type: Number, default: 0 },
    IsEmpty: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);
