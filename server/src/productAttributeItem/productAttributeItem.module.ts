import { Module } from "@nestjs/common";
import { ProductAttributeItemModuleBase } from "./base/productAttributeItem.module.base";
import { ProductAttributeItemService } from "./productAttributeItem.service";
import { ProductAttributeItemController } from "./productAttributeItem.controller";
import { ProductAttributeItemResolver } from "./productAttributeItem.resolver";

@Module({
  imports: [ProductAttributeItemModuleBase],
  controllers: [ProductAttributeItemController],
  providers: [ProductAttributeItemService, ProductAttributeItemResolver],
  exports: [ProductAttributeItemService],
})
export class ProductAttributeItemModule {}
