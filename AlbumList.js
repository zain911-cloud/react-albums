import React from "react";
import Album from "./Album";

const AlbumList = ({ albums, onDelete, onUpdate }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {albums.map((album) => (
          <Album
            key={album.id}
            album={album}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </tbody>
    </table>
  );
};

export default AlbumList;
