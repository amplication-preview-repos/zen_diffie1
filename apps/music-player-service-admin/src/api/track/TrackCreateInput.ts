import { InputJsonValue } from "../../types";
import { PlaylistTrackCreateNestedManyWithoutTracksInput } from "./PlaylistTrackCreateNestedManyWithoutTracksInput";

export type TrackCreateInput = {
  album?: string | null;
  artist?: string | null;
  duration?: number | null;
  file?: InputJsonValue;
  playlistTracks?: PlaylistTrackCreateNestedManyWithoutTracksInput;
  title?: string | null;
};
