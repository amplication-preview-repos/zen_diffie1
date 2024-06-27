import { Prediction } from "../prediction/Prediction";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  predictions?: Array<Prediction>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
