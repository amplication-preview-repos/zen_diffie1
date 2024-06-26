import { PlaylistTrackCreateNestedManyWithoutPlaylistsInput } from "./PlaylistTrackCreateNestedManyWithoutPlaylistsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlaylistCreateInput = {
  name?: string | null;
  playlistTracks?: PlaylistTrackCreateNestedManyWithoutPlaylistsInput;
  user?: UserWhereUniqueInput | null;
};
