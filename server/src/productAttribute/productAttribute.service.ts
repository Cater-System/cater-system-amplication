import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProductAttributeServiceBase } from "./base/productAttribute.service.base";

@Injectable()
export class ProductAttributeService extends ProductAttributeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
