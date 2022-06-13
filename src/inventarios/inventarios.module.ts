import { forwardRef, Module } from "@nestjs/common";
import { InventariosService } from "./inventarios.service";
import { InventariosController } from "./inventarios.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { InventarioSchema } from "./schemas/inventario.shema";
import { ProductosModule } from "src/productos/productos.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Inventario", schema: InventarioSchema },
    ]),
    forwardRef(() => ProductosModule),
  ],
  controllers: [InventariosController],
  providers: [InventariosService],
  exports: [],
})
export class InventariosModule {}
