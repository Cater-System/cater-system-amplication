import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DeliveryResolverBase } from "./base/delivery.resolver.base";
import { Delivery } from "./base/Delivery";
import { DeliveryService } from "./delivery.service";

@graphql.Resolver(() => Delivery)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DeliveryResolver extends DeliveryResolverBase {
  constructor(
    protected readonly service: DeliveryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
