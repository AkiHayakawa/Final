import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { mangaContext } from "../context/mangaContext";

const EditManga = () => {
  const { getOneManga, oneManga, updateManga } = useContext(mangaContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    getOneManga(id);
  }, []);

  useEffect(() => {
    if (oneManga) {
      setTitle(oneManga.title);
      setImg(oneManga.img);
      setPrice(oneManga.price);
      setType(oneManga.type);
      setDescription(oneManga.description);
    }
  }, [oneManga]);

  function saveChanges() {
    if (!title || !img || !price || !type || !description) {
      alert("Some inputs are empty!");
      return;
    }

    let EditManga = {
      title,
      img,
      price,
      type,
      description,
    };

    updateManga(id, EditManga);
    navigate("/games");
  }

  return oneManga ? (
    <div className="InputDiv">
      <TextField
        className="Input"
        id="outlined-search"
        label="Title"
        type="search"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        className="Input"
        id="outlined-search"
        label="Img"
        type="search"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <TextField
        className="Input"
        id="outlined-search"
        label="Price"
        type="search"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <TextField
        className="Input"
        id="outlined-search"
        label="Type"
        type="search"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <TextField
        className="Input"
        id="outlined-search"
        label="Description"
        type="search"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={() => {
            saveChanges();
            navigate("/");
          }}
        >
          Save Changes
        </Button>
      </Stack>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default EditManga;
