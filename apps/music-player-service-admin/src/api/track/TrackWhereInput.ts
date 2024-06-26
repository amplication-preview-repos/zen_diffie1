import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlaylistTrackListRelationFilter } from "../playlistTrack/PlaylistTrackListRelationFilter";

export type TrackWhereInput = {
  album?: StringNullableFilter;
  artist?: StringNullableFilter;
  duration?: IntNullableFilter;
  file?: JsonFilter;
  id?: StringFilter;
  playlistTracks?: PlaylistTrackListRelationFilter;
  title?: StringNullableFilter;
};
