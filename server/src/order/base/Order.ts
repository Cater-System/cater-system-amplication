/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsJSON,
  IsOptional,
  ValidateNested,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Coupon } from "../../coupon/base/Coupon";
import { Type } from "class-transformer";
import { Delivery } from "../../delivery/base/Delivery";
import { Product } from "../../product/base/Product";
import { EnumOrderStatus } from "./EnumOrderStatus";
import { User } from "../../user/base/User";
@ObjectType()
class Order {
  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  address!: JsonValue;

  @ApiProperty({
    required: true,
    type: () => Coupon,
  })
  @ValidateNested()
  @Type(() => Coupon)
  coupon?: Coupon;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: () => Delivery,
  })
  @ValidateNested()
  @Type(() => Delivery)
  delivery?: Delivery;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  orderNumber!: string;

  @ApiProperty({
    required: true,
    type: () => [Product],
  })
  @ValidateNested()
  @Type(() => Product)
  @IsOptional()
  products?: Array<Product>;

  @ApiProperty({
    required: true,
    enum: EnumOrderStatus,
  })
  @IsEnum(EnumOrderStatus)
  @Field(() => EnumOrderStatus, {
    nullable: true,
  })
  status?: "Pending" | "InProgress" | "Completed";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  user?: User;
}
export { Order };
