import { Document } from "mongoose";

export interface Producto extends Document {
  readonly idProducto: number;
  readonly name: string;
  readonly description: string;
  readonly units: number;
  readonly precioUnitario: number;
  readonly saldoInicial: number;
  readonly entrada: number;
  readonly saldoFinal: number;
  readonly costoDeVenta: number;
  readonly precioVenta: number;
  readonly stockMin: number;
  readonly salidaDeInventario: number;
  readonly diferencia: number;
  readonly IsEmpty: boolean;
}

export interface IProductoUpdate {
  idProducto: number;
  units: number;
  saldoFinal: number;
  costoDeVenta: number;
  salidaDeInventario: number;
  diferencia: number;
}
