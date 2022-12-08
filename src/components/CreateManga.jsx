import React, { useContext, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { mangaContext } from "../context/mangaContext";

const CreateUser = () => {
  const { addManga } = useContext(mangaContext);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [like, setlike] = useState(0);
  const [comments, setComments] = useState([]);
  function addForm() {
    if (!title || !img || !price || !type || !description) {
      alert("Some inputs are empty!");
      return;
    }

    let newManga = {
      title,
      img,
      price,
      type,
      description,
      like,
      comments,
    };

    addManga(newManga);

    setTitle("");
    setImg("");
    setPrice("");
    setType("");
    setDescription("");
  }
  return (
    <div style={{display:'flex',justifyContent: 'center'}}>
      <div className="InputDiv">
        <TextField
        style={{margin:'8px'}}
          className="Input"
          id="outlined-search"
          label="Title"
          type="search"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          className="Input"
        style={{margin:'8px'}}
        id="outlined-search"
          label="Img"
          type="search"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <TextField
        style={{margin:'8px'}}
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
          label="Type:horror,Shonen,stragety,comedy"
        style={{margin:'8px'}}
        type="search"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <TextField
          className="Input"
          id="outlined-search"
          label="Description"
          type="search"
        style={{margin:'8px'}}
        value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={addForm}>
            addManga
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default CreateUser;
