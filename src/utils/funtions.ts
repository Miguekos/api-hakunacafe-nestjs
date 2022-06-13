import { CreateInventarioDto } from "src/inventarios/dto/create-inventario.dto";
import { CreateProductoDto } from "src/productos/dto/create-producto.dto";
import { IProductoUpdate } from "src/productos/interfaces/producto.interface";

export function totalUnitsAndCost(
  createInventarioDto: CreateInventarioDto
): number {
  return createInventarioDto.units * createInventarioDto.unitPrice;
}

export async function MovementCalc(
  createInventarioDto: CreateInventarioDto,
  productoDetails: CreateProductoDto
): Promise<IProductoUpdate> {
  const dataUpdateProducto: IProductoUpdate = productoDetails;
  console.log("createInventarioDto.idProducto", createInventarioDto.idProducto);
  dataUpdateProducto.idProducto = createInventarioDto.idProducto;
  if (createInventarioDto.movement === "0") {
    dataUpdateProducto.units = createInventarioDto.units;
    dataUpdateProducto["precioUnitario"] = createInventarioDto.unitPrice;
    dataUpdateProducto["saldoInicial"] = totalUnitsAndCost(createInventarioDto);
    dataUpdateProducto["saldoFinal"] = totalUnitsAndCost(createInventarioDto);
  } else if (createInventarioDto.movement === "1") {
    dataUpdateProducto.units =
      productoDetails.units - createInventarioDto.units;
    dataUpdateProducto["saldoFinal"] =
      productoDetails.saldoFinal - createInventarioDto.totalPrice;
    dataUpdateProducto["costoDeVenta"] =
      productoDetails.saldoInicial +
      productoDetails.entrada -
      dataUpdateProducto["saldoFinal"];
    dataUpdateProducto["salidaDeInventario"] =
      productoDetails.salidaDeInventario + createInventarioDto.totalPrice;
    dataUpdateProducto["diferencia"] =
      productoDetails.costoDeVenta - productoDetails.salidaDeInventario;
  } else if (createInventarioDto.movement === "2") {
    dataUpdateProducto.units =
      Number(productoDetails.units) + Number(createInventarioDto.units);
    dataUpdateProducto["saldoFinal"] =
      productoDetails.saldoFinal + createInventarioDto.totalPrice;
    dataUpdateProducto["entrada"] =
      productoDetails.entrada + createInventarioDto.totalPrice;
    dataUpdateProducto["diferencia"] =
      productoDetails.costoDeVenta - productoDetails.salidaDeInventario;
  }
  return dataUpdateProducto;
}

export async function name(params: any) {
  return "asd";
}
