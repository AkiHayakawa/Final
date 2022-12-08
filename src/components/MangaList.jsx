import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useCart } from "../context/CartContextProvider";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import Pagination from "@mui/material/Pagination";
import { mangaContext } from "../context/mangaContext";

const MangaList = ({ page, setPage }) => {
  const { getTitles, titles, deleteManga } = useContext(mangaContext);
  const { addMangaToCart, checkMangaInCart } = useCart();

  useEffect(() => {
    getTitles();
  }, []);

  const itemsOnPage = 8;

  const count = Math.ceil(titles.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return titles.slice(begin, end);
  }

  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Titles</h1>

      <div
        className="CardList"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {titles ? (
          currentData().map((item) => (
            <Card
            href="#"
              onClick={() => navigate(`/details/${item.id}`)}
              style={{ margin: "20px", width: "250px" }}
              sx={{ maxWidth: 280, width: 280 }}
              // className="image"
            >
              <CardMedia
                component="img"
                alt="error"
                height="380"
                width='300px'
                image={item.img}
              />
              <CardContent>
                <Typography  gutterBottom variant="h5" component="div">
                  {item.title}<br/>
               

                </Typography>
                {/* <Typography className="h2" gutterBottom variant="h5" component="div">
                  ${item.price}
                </Typography>
                <Typography className="h2" gutterBottom variant="h5" component="div">
                  {item.type}
                </Typography> */}
              </CardContent>
            </Card>
          ))
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      <Pagination
        count={count}
        page={page}
        onChange={handlePage}
        color="primary"
      />
      <br />
    </div>
  );
};

export default MangaList;
