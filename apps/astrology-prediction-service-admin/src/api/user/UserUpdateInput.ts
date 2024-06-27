import { PredictionUpdateManyWithoutUsersInput } from "./PredictionUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  predictions?: PredictionUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
