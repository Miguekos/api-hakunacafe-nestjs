export class CreateInventarioDto {
  idProducto: number;
  movement: string;
  date?: Date;
  nroInvoice: string;
  description: string;
  units: number;
  unitPrice: number;
  totalPrice?: number;
}
