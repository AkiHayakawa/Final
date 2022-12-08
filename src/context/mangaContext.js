import React, { useState, useReducer } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const mangaContext = React.createContext();

const INIT_STATE = {
  titles: [],
  oneManga: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_TITLES":
      return { ...state, titles: action.payload };
    case "GET_ONE_MANGA":
      return { ...state, oneManga: action.payload };
    default:
      return state;
  }
}

const MangaContextProvider = ({ children }) => {
  const API = "http://localhost:8000/titles";
  const location = useLocation();
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addManga(newManga) {
    await axios.post(API, newManga);
    getTitles();
  }

  async function getTitles() {
    console.log(window.location.search);

    const { data } = await axios(`${API}/${window.location.search}`);
    dispatch({
      type: "GET_TITLES",
      payload: data,
    });
  }

  async function deleteManga(id) {
    await axios.delete(`${API}/${id}`);
    getTitles();
  }

  async function getOneManga(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_MANGA",
      payload: res.data,
    });
  }

  async function updateManga(id, editedManga) {
    await axios.patch(`${API}/${id}`, editedManga);
  }
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value === "titles") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;

    navigate(url);
  };
  return (
    <mangaContext.Provider
      value={{
        titles: state.titles,
        oneManga: state.oneManga,

        addManga,
        getTitles,
        deleteManga,
        getOneManga,
        updateManga,
        fetchByParams,
      }}
    >
      {children}
    </mangaContext.Provider>
  );
};

export default MangaContextProvider;
