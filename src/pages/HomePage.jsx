import React, { useState } from "react";
import MangaList from "../components/MangaList";
import SideBar from "../components/SideBar";

const HomePage = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <div style={{display:'flex'}}>
        <div style={{width:'250px'}}>
        <SideBar />

        </div>
        <MangaList page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default HomePage;
