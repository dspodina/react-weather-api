import PropTypes from "prop-types";
import { Typography, Paper, Box, Grid } from "@mui/material";
import Hour from "./Hour";

const Day = ({ monthAndDate, dayWeather }) => {
  return (
    <Paper elevation={6} sx={{ p: 2, marginTop: 10 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 2,
          marginTop: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{ marginBottom: 2, marginTop: "10px", fontWeight: "bold", fontSize: "1.7rem",}}
        >
          {monthAndDate}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {dayWeather.map((hourData, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={2}>
            <Hour {...hourData} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

Day.propTypes = {
  monthAndDate: PropTypes.string.isRequired,
  dayWeather: PropTypes.arrayOf(
    PropTypes.shape({
      hour: PropTypes.string.isRequired,
      temp: PropTypes.string.isRequired,
      arrow: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Day;
