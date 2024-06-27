import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PredictionWhereInput = {
  birthDate?: DateTimeNullableFilter;
  id?: StringFilter;
  predictionText?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
