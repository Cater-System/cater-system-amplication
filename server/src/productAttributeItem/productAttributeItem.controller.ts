import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductAttributeItemService } from "./productAttributeItem.service";
import { ProductAttributeItemControllerBase } from "./base/productAttributeItem.controller.base";

@swagger.ApiTags("productAttributeItems")
@common.Controller("productAttributeItems")
export class ProductAttributeItemController extends ProductAttributeItemControllerBase {
  constructor(
    protected readonly service: ProductAttributeItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
