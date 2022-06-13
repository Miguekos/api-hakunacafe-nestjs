import { Module } from "@nestjs/common";
import { ControlService } from "./control.service";
import { ControlController } from "./control.controller";
import { ProductosModule } from "src/productos/productos.module";
import { InventariosModule } from "src/inventarios/inventarios.module";

@Module({
  imports: [ProductosModule, InventariosModule],
  controllers: [ControlController],
  providers: [ControlService],
})
export class ControlModule {}
