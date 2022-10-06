import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProductAttributeResolverBase } from "./base/productAttribute.resolver.base";
import { ProductAttribute } from "./base/ProductAttribute";
import { ProductAttributeService } from "./productAttribute.service";

@graphql.Resolver(() => ProductAttribute)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductAttributeResolver extends ProductAttributeResolverBase {
  constructor(
    protected readonly service: ProductAttributeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
