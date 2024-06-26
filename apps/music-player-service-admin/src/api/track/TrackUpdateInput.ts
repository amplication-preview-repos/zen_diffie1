import { InputJsonValue } from "../../types";
import { PlaylistTrackUpdateManyWithoutTracksInput } from "./PlaylistTrackUpdateManyWithoutTracksInput";

export type TrackUpdateInput = {
  album?: string | null;
  artist?: string | null;
  duration?: number | null;
  file?: InputJsonValue;
  playlistTracks?: PlaylistTrackUpdateManyWithoutTracksInput;
  title?: string | null;
};
