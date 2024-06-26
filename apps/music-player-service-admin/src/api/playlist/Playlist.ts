import { PlaylistTrack } from "../playlistTrack/PlaylistTrack";
import { User } from "../user/User";

export type Playlist = {
  createdAt: Date;
  id: string;
  name: string | null;
  playlistTracks?: Array<PlaylistTrack>;
  updatedAt: Date;
  user?: User | null;
};
