import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProductAttributeItemServiceBase } from "./base/productAttributeItem.service.base";

@Injectable()
export class ProductAttributeItemService extends ProductAttributeItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
