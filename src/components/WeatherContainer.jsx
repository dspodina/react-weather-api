import { useEffect, useState } from "react";
import Weather from "./Weather";
import getWeather from "../apis/getWeather";
import { Container, Box, CircularProgress, Alert } from "@mui/material";

const WeatherContainer = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherData = await getWeather();
        setWeather(weatherData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <Container maxWidth="x-lg" lg={12} sx={{ marginTop: 4 }}>
      {loading && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Box my={2}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}
      {weather && <Weather weather={weather} />}
    </Container>
  );
};

export default WeatherContainer;
