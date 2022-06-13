import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ProductosService } from "src/productos/productos.service";
import { CreateInventarioDto } from "./dto/create-inventario.dto";
import { UpdateInventarioDto } from "./dto/update-inventario.dto";
import { Inventario } from "./interfaces/inventario.interface";
import * as logicMovement from "../utils/funtions";
import { UpdateProductoDto } from "src/productos/dto/update-producto.dto";
import { IProductoUpdate } from "src/productos/interfaces/producto.interface";

@Injectable()
export class InventariosService {
  constructor(
    @InjectModel("Inventario")
    private readonly inventariosModel: Model<Inventario>,
    private readonly productosService: ProductosService
  ) {}

  getSequenceNextValue(seqName) {
    const seqDoc = this.inventariosModel.findOneAndUpdate({
      query: { _id: seqName },
      update: { $inc: { seqValue: 1 } },
      new: true,
    });

    console.log("seqDoc", seqDoc);

    return seqDoc;
  }

  async updateProducto(dataUpdateProducto: UpdateProductoDto): Promise<any> {
    console.log("dataUpdateProducto", dataUpdateProducto);
    return await this.productosService.update(
      dataUpdateProducto.idProducto,
      dataUpdateProducto
    );
  }

  async create(
    createInventarioDto: CreateInventarioDto
  ): Promise<Inventario | string> {
    createInventarioDto["date"] = new Date();
    createInventarioDto["totalPrice"] =
      logicMovement.totalUnitsAndCost(createInventarioDto);

    const productoDetails = await this.productosService.findOne(
      createInventarioDto.idProducto
    );

    const respDataUpdateProducto = await logicMovement.MovementCalc(
      createInventarioDto,
      productoDetails
    );

    console.log("respDataUpdateProducto", respDataUpdateProducto);

    const respUpdateProducto = await this.updateProducto(
      respDataUpdateProducto
    );
    console.log("respUpdateProducto", respUpdateProducto);
    if (respUpdateProducto.acknowledged) {
      const respCreateMovement = await this.inventariosModel.create({
        // idI: this.getSequenceNextValue("itemId"),
        ...createInventarioDto,
      });
      console.log("respCreateMovement", respCreateMovement);
      return respCreateMovement;
    }
    return "no se realizaron cambios";
  }

  findProducto() {
    return "findProducto";
  }

  async findOneProducto(id: number): Promise<any> {
    const filterInvetaryById = { idProducto: id };
    return await this.inventariosModel.find(filterInvetaryById);
    return "findOneProducto";
  }

  findAll() {
    return `This action returns all inventarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventario`;
  }

  update(id: number, updateInventarioDto: UpdateInventarioDto) {
    return `This action updates a #${id} inventario`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventario`;
  }
}
