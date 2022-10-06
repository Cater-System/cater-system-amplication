import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { OrderStatusServiceBase } from "./base/orderStatus.service.base";

@Injectable()
export class OrderStatusService extends OrderStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
