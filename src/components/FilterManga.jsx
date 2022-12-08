import React, { useContext } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { mangaContext } from "../context/mangaContext";

export default function ControlledRadioButtonsGroup() {
  const { fetchByParams } = useContext(mangaContext);

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Categories</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        defaultValue="titles"
        onChange={(e) => fetchByParams("type", e.target.value)}
      >
        <FormControlLabel value="titles" control={<Radio />} label="titles" />
        <FormControlLabel value="Shonen" control={<Radio />} label="Shonen" />
        <FormControlLabel value="horror" control={<Radio />} label="horror" />
        <FormControlLabel value="comedy" control={<Radio />} label="comedy" />
        {/* <FormControlLabel value="hentai" control={<Radio />} label="hentai" /> */}
      </RadioGroup>
    </FormControl>
  );
}
