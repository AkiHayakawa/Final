import React, { useContext, useEffect, useState } from "react";
import FilterManga from "./FilterManga";
import { useSearchParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { mangaContext } from "../context/mangaContext";

const MangaSideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { getTitles } = useContext(mangaContext);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getTitles();
  }, [searchParams]);

  return (
    <TextField
      className="sideBar"
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default MangaSideBar;
