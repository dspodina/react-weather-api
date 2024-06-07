import { Container, Box } from "@mui/material";
import organizedWeatherData from "../utils/organizedWeatherData";
import PropTypes from "prop-types";
import Day from "./Day";

const Weather = ({ weather }) => {
  const organizedData = organizedWeatherData(weather);
  return (
    <Container>
      {Object.entries(organizedData).map(([day, dayWeather], index) => (
        <Box key={index} mb={4}>
          <Day
            day={day}
            dayWeather={dayWeather.date}
            monthAndDate={dayWeather.monthAndDate}
          />
        </Box>
      ))}
    </Container>
  );
};

Weather.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default Weather;
