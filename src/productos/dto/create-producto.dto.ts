export class CreateProductoDto {
  idProducto: number;
  name: string;
  description: string;
  units: number;
  saldoInicial: number;
  entrada: number;
  saldoFinal: number;
  costoDeVenta: number;
  salidaDeInventario: number;
  diferencia: number;
  IsEmpty: boolean;
}
