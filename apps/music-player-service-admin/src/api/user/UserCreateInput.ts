import { PlaylistCreateNestedManyWithoutUsersInput } from "./PlaylistCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  playlists?: PlaylistCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
