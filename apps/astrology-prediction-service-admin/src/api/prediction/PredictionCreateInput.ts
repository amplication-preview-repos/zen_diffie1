import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PredictionCreateInput = {
  birthDate?: Date | null;
  predictionText?: string | null;
  user?: UserWhereUniqueInput | null;
};
