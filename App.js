import React, { useState, useEffect } from "react";
import axios from "axios";
import AlbumList from "./AlbumList";

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState({});
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAdd = () => {
    const newAlbum = {
      userId: 1,
      title: title,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/albums", newAlbum)
      .then((response) => {
        setAlbums([...albums, response.data]);
        setTitle("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = (album) => {
    setSelectedAlbum(album);
    setTitle(album.title);
  };

  const handleSave = () => {
    axios
      .put(
        `https://jsonplaceholder.typicode.com/albums/${selectedAlbum.id}`,
        { ...selectedAlbum, title: title }
      )
      .then((response) => {
        setAlbums(
          albums.map((album) =>
            album.id === response.data.id ? response.data : album
          )
        );
        setSelectedAlbum({});
        setTitle("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then(() => {
        setAlbums(albums.filter((album) => album.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Albums</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <AlbumList
        albums={albums}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
      {selectedAlbum.id && (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
};

export default App;
