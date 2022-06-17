import { Injectable } from "@nestjs/common";
import { InventariosService } from "src/inventarios/inventarios.service";
import { ProductosService } from "src/productos/productos.service";
import { CreateControlDto } from "./dto/create-control.dto";
import { UpdateControlDto } from "./dto/update-control.dto";
import * as logicMovement from "../utils/funtions";

@Injectable()
export class ControlService {
  constructor(
    private readonly productosService: ProductosService,
    private readonly inventariosService: InventariosService
  ) {}

  create(createControlDto: CreateControlDto) {
    return "This action adds a new control";
  }

  findAll() {
    return `This action returns all control`;
  }

  public async calculandoBalances(array: []): Promise<any> {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      console.log("element", element);
    }

    // const bodyBalance = {
    // movimientos:
    // compras: 0,
    // ventas: 0,
    // ganancia: 0,
    // devolucion: 0,
    // }
    return "string";
  }

  async findOne(id: number): Promise<any> {
    // const filter = {idProducto : id}
    // const calculo = await this.calculandoBalances(
    //   await this.inventariosService.findOneProducto(id)
    // );
    const findProducto = await this.productosService.findOne(id);
    const calculo = await logicMovement.MovementCalcNew(
      await this.inventariosService.findOneProducto(id)
    );

    console.log("calculo", calculo);

    const bodyResponse = {
      findProducto,
      ...calculo,
    };

    console.log("bodyResponse", bodyResponse);

    return bodyResponse;
  }

  update(id: number, updateControlDto: UpdateControlDto) {
    return `This action updates a #${id} control`;
  }

  remove(id: number) {
    return `This action removes a #${id} control`;
  }
}
