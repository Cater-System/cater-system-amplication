import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductAttributeService } from "./productAttribute.service";
import { ProductAttributeControllerBase } from "./base/productAttribute.controller.base";

@swagger.ApiTags("productAttributes")
@common.Controller("productAttributes")
export class ProductAttributeController extends ProductAttributeControllerBase {
  constructor(
    protected readonly service: ProductAttributeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
