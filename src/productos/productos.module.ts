import { Module } from "@nestjs/common";
import { ProductosService } from "./productos.service";
import { ProductosController } from "./productos.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductoSchema } from "./schemas/productos.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Producto", schema: ProductoSchema }]),
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
  exports: [ProductosService],
})
export class ProductosModule {}
