import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { mangaContext } from "../context/mangaContext";
import { useCart } from "../context/CartContextProvider";
import { useNavigate } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
const Details = () => {
  const { getOneManga, oneManga, deleteManga, updateManga } =
    useContext(mangaContext);
  const { addMangaToCart, checkMangaInCart } = useCart();
  const params = useParams();
  useEffect(() => {
    getOneManga(params.id);
  }, []);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // EditManga Start

  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [like, setLike] = useState(0);
  const [plusLike, setPlusLike] = useState(false);
  const [comments, setComments] = useState([
    "Aki", "cood",
    "Rin", "nice",
    "Lucy", "fuck"
  ]);

  useEffect(() => {
    getOneManga(id);
    // PlusMinuLike()
  }, []);

  useEffect(() => {
    if (oneManga) {
      setTitle(oneManga.title);
      setImg(oneManga.img);
      setPrice(oneManga.price);
      setType(oneManga.type);
      setDescription(oneManga.description);
      setLike(oneManga.like);
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
      like,
      type,
      description,
    };

    updateManga(id, EditManga);
    // navigate("/");
  }
  function PlusMinuLike() {
    if (plusLike === false) {
      setLike(like + 1);
      setPlusLike(true);
    } else {
      setLike(like - 1);
      setPlusLike(false);
    }
  }
  // console.log(oneManga.comments)
  return oneManga ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "8%",
        marginTop: "2%",
      }}
    >
      <Card
        style={{
          margin: "10px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        sx={{ maxWidth: 900 }}
      >
        <CardMedia
          component="img"
          alt="error"
          height="450"
          image={oneManga.img}
        />
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              color: "midnightblue",
              fontWeight: "bold",
              fontSize: "35px",
            }}
          >
            {oneManga.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              paddingLeft: "1%",
              fontSize: "23px",
              fontWeight: "lighter",
              color: "grey",
            }}
          >
            {oneManga.description}
          </Typography>
          <h2>
            Genre:{" "}
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ fontSize: "20px", fontWeight: "light" }}
            >
              {oneManga.type}
            </Typography>
          </h2>

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            ${oneManga.price}
          </Typography>
          <CardActions>
            <Button
              onClick={() => {
                deleteManga(oneManga.id);
                navigate("/");
              }}
            >
              Delete
            </Button>
            <div>
              <Button onClick={handleOpen}>Update</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="InputDiv">
                    <TextField
                      className="Input"
                      id="outlined-search"
                      label="Title"
                      style={{ margin: "8px" }}
                      type="search"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                      className="Input"
                      id="outlined-search"
                      style={{ margin: "8px" }}
                      label="Img"
                      type="search"
                      value={img}
                      onChange={(e) => setImg(e.target.value)}
                    />
                    <TextField
                      className="Input"
                      id="outlined-search"
                      label="Price"
                      style={{ margin: "8px" }}
                      type="search"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <TextField
                      style={{ margin: "8px" }}
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
                      style={{ margin: "8px" }}
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
                </Box>
              </Modal>
            </div>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              {like}
            </Typography>
            <Checkbox
              onClick={() => {
                PlusMinuLike();
                setTimeout(saveChanges, 1000);
              }}
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
            {/* <Button onClick={() => navigate(`/details/${oneManga.id}`)}>
                  Details
                </Button> */}
            <IconButton size="small" onClick={() => addMangaToCart(oneManga)}>
              <AddShoppingCartOutlinedIcon
                color={checkMangaInCart(oneManga.id) ? "primary" : ""}
              />
            </IconButton>
            <Checkbox
              onClick={() => {
                // console.log(oneManga.comments);
              }}
              {...label}
              icon={<ChatBubbleOutlineIcon />}
              checkedIcon={<ChatBubbleIcon />}
            />
            {/* <h3>
              {comments.map((item) => {
                <h3>{item}</h3>;
              })}
            </h3> */}
          </CardActions>
        </CardContent>
      </Card>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default Details;
