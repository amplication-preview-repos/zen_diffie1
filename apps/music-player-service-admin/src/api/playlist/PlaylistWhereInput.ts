import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PlaylistTrackListRelationFilter } from "../playlistTrack/PlaylistTrackListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlaylistWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  playlistTracks?: PlaylistTrackListRelationFilter;
  user?: UserWhereUniqueInput;
};
