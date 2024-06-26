import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PLAYLIST_TITLE_FIELD } from "../playlist/PlaylistTitle";
import { TRACK_TITLE_FIELD } from "../track/TrackTitle";

export const PlaylistTrackList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PlaylistTracks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Playlist"
          source="playlist.id"
          reference="Playlist"
        >
          <TextField source={PLAYLIST_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Track" source="track.id" reference="Track">
          <TextField source={TRACK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
