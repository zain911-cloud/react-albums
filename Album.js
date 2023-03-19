import React from "react";

const Album = ({ album, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(album.id);
  };

  const handleUpdate = () => {
    onUpdate(album);
  };

  return (
    <tr>
      <td>{album.id}</td>
      <td>{album.title}</td>
      <td>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </td>
      <td>
        <button className="btn btn-warning" onClick={handleUpdate}>
          Edit
        </button>
      </td>
    </tr>
  );
};

export default Album;
