/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Course } from "../../course/base/Course";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumEnrollmentStatus } from "./EnumEnrollmentStatus";
import { Student } from "../../student/base/Student";

@ObjectType()
class Enrollment {
  @ApiProperty({
    required: false,
    type: () => Course,
  })
  @ValidateNested()
  @Type(() => Course)
  @IsOptional()
  course?: Course | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  enrollmentDate!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    enum: EnumEnrollmentStatus,
  })
  @IsEnum(EnumEnrollmentStatus)
  @IsOptional()
  @Field(() => EnumEnrollmentStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => Student,
  })
  @ValidateNested()
  @Type(() => Student)
  @IsOptional()
  student?: Student | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Enrollment as Enrollment };
