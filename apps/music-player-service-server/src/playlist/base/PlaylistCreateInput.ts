/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { PlaylistTrackCreateNestedManyWithoutPlaylistsInput } from "./PlaylistTrackCreateNestedManyWithoutPlaylistsInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class PlaylistCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PlaylistTrackCreateNestedManyWithoutPlaylistsInput,
  })
  @ValidateNested()
  @Type(() => PlaylistTrackCreateNestedManyWithoutPlaylistsInput)
  @IsOptional()
  @Field(() => PlaylistTrackCreateNestedManyWithoutPlaylistsInput, {
    nullable: true,
  })
  playlistTracks?: PlaylistTrackCreateNestedManyWithoutPlaylistsInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { PlaylistCreateInput as PlaylistCreateInput };
