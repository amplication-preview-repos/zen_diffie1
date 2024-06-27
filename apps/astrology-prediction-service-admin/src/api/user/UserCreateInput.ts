import { PredictionCreateNestedManyWithoutUsersInput } from "./PredictionCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  predictions?: PredictionCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
