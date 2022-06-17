import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { ProductosModule } from "./productos/productos.module";
import { InventariosModule } from "./inventarios/inventarios.module";
import { ControlModule } from "./control/control.module";
import { MovimientosModule } from "./movimientos/movimientos.module";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGO_URL}`, {
      useNewUrlParser: true,
    }),
    AuthModule,
    UsersModule,
    ProductosModule,
    InventariosModule,
    ControlModule,
    MovimientosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
