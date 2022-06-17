import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateProductoDto } from "./dto/create-producto.dto";
import { UpdateProductoDto } from "./dto/update-producto.dto";
import { Producto } from "./interfaces/producto.interface";

@Injectable()
export class ProductosService {
  constructor(
    @InjectModel("Producto")
    private readonly productoModel: Model<Producto>
  ) {}

  async getSequenceNextValue(sequenceName: string): Promise<any> {
    const filter = { _id: "62a3bfe12e50e463e75b6605" };
    const update = { $inc: { sequence_value: 1 } };
    const opts = { new: true };
    const seqDoc = await this.productoModel.findOneAndUpdate(
      filter,
      update,
      opts
    );

    console.log("seqDoc", seqDoc);
    // console.log("sequence_value", seqDoc.);

    return seqDoc;
  }

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const responseCreateProducto = await this.productoModel.create({
      ...createProductoDto,
      // idProducto: await this.getSequenceNextValue("productosId"),
    });
    console.log("responseCreateProducto", responseCreateProducto);
    return responseCreateProducto;
  }

  async findAll(): Promise<Producto[]> {
    return await this.productoModel.find().exec();
  }

  async findOne(id: number): Promise<any> {
    const filterSearch = { idProducto: id };
    return await this.productoModel.findOne(filterSearch);
  }

  async update(id: number, updateProductoDto: any): Promise<any> {
    const filterUpdate = { idProducto: id };
    const respUpdateProducto = await this.productoModel.updateOne(
      filterUpdate,
      updateProductoDto
    );
    console.log("respUpdateProducto", respUpdateProducto);
    return respUpdateProducto;
  }

  async remove(id: number): Promise<any> {
    const filterSearch = { idProducto: id };
    return await this.productoModel.deleteOne(filterSearch);
  }

  async findByName(name: string): Promise<Producto[]> {
    const filterSearchByName = {};
    // filterSearchByName["name"] = { $regex: `/^${name}$/i` };
    filterSearchByName["name"] = { $regex: name, $options: "i" };
    return await this.productoModel
      .find(filterSearchByName)
      .sort({ _id: 1 })
      .exec();
  }
}
