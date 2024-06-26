import { Playlist } from "../playlist/Playlist";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  playlists?: Array<Playlist>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
