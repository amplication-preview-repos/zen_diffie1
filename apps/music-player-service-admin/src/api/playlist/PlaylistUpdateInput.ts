import { PlaylistTrackUpdateManyWithoutPlaylistsInput } from "./PlaylistTrackUpdateManyWithoutPlaylistsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlaylistUpdateInput = {
  name?: string | null;
  playlistTracks?: PlaylistTrackUpdateManyWithoutPlaylistsInput;
  user?: UserWhereUniqueInput | null;
};
