import { Module } from "@nestjs/common";
import { ProductAttributeModuleBase } from "./base/productAttribute.module.base";
import { ProductAttributeService } from "./productAttribute.service";
import { ProductAttributeController } from "./productAttribute.controller";
import { ProductAttributeResolver } from "./productAttribute.resolver";

@Module({
  imports: [ProductAttributeModuleBase],
  controllers: [ProductAttributeController],
  providers: [ProductAttributeService, ProductAttributeResolver],
  exports: [ProductAttributeService],
})
export class ProductAttributeModule {}
