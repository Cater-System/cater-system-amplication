import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProductAttributeItemResolverBase } from "./base/productAttributeItem.resolver.base";
import { ProductAttributeItem } from "./base/ProductAttributeItem";
import { ProductAttributeItemService } from "./productAttributeItem.service";

@graphql.Resolver(() => ProductAttributeItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductAttributeItemResolver extends ProductAttributeItemResolverBase {
  constructor(
    protected readonly service: ProductAttributeItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
