import { JsonValue } from "type-fest";
import { PlaylistTrack } from "../playlistTrack/PlaylistTrack";

export type Track = {
  album: string | null;
  artist: string | null;
  createdAt: Date;
  duration: number | null;
  file: JsonValue;
  id: string;
  playlistTracks?: Array<PlaylistTrack>;
  title: string | null;
  updatedAt: Date;
};
