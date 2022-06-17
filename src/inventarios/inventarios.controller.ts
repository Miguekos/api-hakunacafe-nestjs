import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InventariosService } from './inventarios.service';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

@Controller(`${process.env.PREFIX}/inventarios`)
export class InventariosController {
  constructor(private readonly inventariosService: InventariosService) {}

  @Post()
  create(@Body() createInventarioDto: CreateInventarioDto) {
    return this.inventariosService.create(createInventarioDto);
  }

  @Get()
  findAll() {
    return this.inventariosService.findAll();
  }

  @Get('producto')
  findProducto() {
    return this.inventariosService.findProducto();
  }

  @Get('producto/:id')
  findOneProducto(@Param('id') id: string) {
    return this.inventariosService.findOneProducto(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInventarioDto: UpdateInventarioDto) {
    return this.inventariosService.update(+id, updateInventarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventariosService.remove(+id);
  }
}
