import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PredictionUpdateInput = {
  birthDate?: Date | null;
  predictionText?: string | null;
  user?: UserWhereUniqueInput | null;
};
