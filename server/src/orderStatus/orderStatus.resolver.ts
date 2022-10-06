import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { OrderStatusResolverBase } from "./base/orderStatus.resolver.base";
import { OrderStatus } from "./base/OrderStatus";
import { OrderStatusService } from "./orderStatus.service";

@graphql.Resolver(() => OrderStatus)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OrderStatusResolver extends OrderStatusResolverBase {
  constructor(
    protected readonly service: OrderStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
