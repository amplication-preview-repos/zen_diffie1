import { User } from "../user/User";

export type Prediction = {
  birthDate: Date | null;
  createdAt: Date;
  id: string;
  predictionText: string | null;
  updatedAt: Date;
  user?: User | null;
};
