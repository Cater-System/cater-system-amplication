import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./user/user.module";
import { ProductModule } from "./product/product.module";
import { BrandModule } from "./brand/brand.module";
import { CategoryModule } from "./category/category.module";
import { CompanyModule } from "./company/company.module";
import { ProductAttributeModule } from "./productAttribute/productAttribute.module";
import { ProductAttributeItemModule } from "./productAttributeItem/productAttributeItem.module";
import { OrderModule } from "./order/order.module";
import { OrderStatusModule } from "./orderStatus/orderStatus.module";
import { PaymentModule } from "./payment/payment.module";
import { DeliveryModule } from "./delivery/delivery.module";
import { CouponModule } from "./coupon/coupon.module";
import { AddressModule } from "./address/address.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    ProductModule,
    BrandModule,
    CategoryModule,
    CompanyModule,
    ProductAttributeModule,
    ProductAttributeItemModule,
    OrderModule,
    OrderStatusModule,
    PaymentModule,
    DeliveryModule,
    CouponModule,
    AddressModule,
    ACLModule,
    AuthModule,
    HealthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
