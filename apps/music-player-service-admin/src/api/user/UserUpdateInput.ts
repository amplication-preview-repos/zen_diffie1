import { PlaylistUpdateManyWithoutUsersInput } from "./PlaylistUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  playlists?: PlaylistUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
