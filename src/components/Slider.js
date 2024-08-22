import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const MAX = 500;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];

export default function CustomMarks({ onChangePrice }) {
  const [val, setVal] = React.useState([MIN, MAX]);

  const handleChange = (_, newValue) => {
    setVal(newValue);
    onChangePrice(newValue); // Passing the new value to parent component
  };

  return (
    <Box sx={{ width: 150 }}>
      <Slider
        marks={marks}
        step={10}
        value={val}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={handleChange}
        aria-labelledby="range-slider"
        valueLabelFormat={(x) => `${x}$`}
        sx={{
          color: "black", // Change the slider color to black
          "& .MuiSlider-thumb": {
            backgroundColor: "black", // Thumb color
          },
          "& .MuiSlider-track": {
            backgroundColor: "black", // Track color
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#ddd", // Rail color (optional, to contrast the track)
          },
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="body2"
          onClick={() => setVal([MIN, val[1]])}
          sx={{ cursor: "pointer" }}
        >
          {MIN}$
        </Typography>
        <Typography
          variant="body2"
          onClick={() => setVal([val[0], MAX])}
          sx={{ cursor: "pointer" }}
        >
          {MAX}$
        </Typography>
      </Box>
    </Box>
  );
}
